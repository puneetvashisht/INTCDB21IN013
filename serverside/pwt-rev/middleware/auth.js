const asyncHandler = require('./async')
const jwt = require('jsonwebtoken');

const protect =  asyncHandler(async (req, res, next)=> {

    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        console.log('token after split: ' + token);
        let user = await jwt.verify(token, process.env.JSON_SECRET_KEY);
        if(!user) throw new Error('Invalid token!!') 
        console.log(user);
        req.user = user;
        next();

    } else {
        res.sendStatus(403);
    }

})

module.exports = {protect};