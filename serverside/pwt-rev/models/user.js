const mongoose = require('mongoose');

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

// 3. Model from Schema (object from schema)
const User = mongoose.model('User', UserSchema);

module.exports = User;

