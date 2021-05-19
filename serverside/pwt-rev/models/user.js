const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JSON_SECRET_KEY="ctsINtraining$"

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    //   _id: Schema.ObjectId,
    name: {
        type: String,
        unique: true,
        required: [true, 'Please provide a name']
    },
    email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        minLength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.generateToken = async function(){
    console.log('Generating token ***')
    let token = await jwt.sign({id: this._id}, JSON_SECRET_KEY);
    // console.log(token);
    return token;
}

UserSchema.methods.matchPassword = async function(enteredPassword){
    console.log('Inside match password ***')
    return await bcrypt.compare(enteredPassword, this.password);
}

UserSchema.pre('save', async function() {
    console.log(this);
    console.log('Before User save operation ..... ', this.password);
    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
  });

// 3. Model from Schema (object from schema)
const User = mongoose.model('User', UserSchema);

module.exports = User;

