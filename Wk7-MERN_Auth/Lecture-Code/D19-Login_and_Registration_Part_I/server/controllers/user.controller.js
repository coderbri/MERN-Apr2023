const User = require('../models/user.model');
const secret = process.env.SECRET_KEY; // ! NEW
const jwt = require('jsonwebtoken'); // ! NEW
const bcrypt = require('bcrypt'); // ! NEW

module.exports = {
    registerUser: async (request, response) => {
        try {
            // check if inputted email already exists in db
            const potentialUser = await User.findOne({ email: request.body.email })
            if (potentialUser) {
                response.status(200).json({ msg: 'That email already exists. Please login' })
            } else { // if not, create a new user object
                const newUser = await User.create( request.body );
                
                // * Generating a userToken and storing the id and email of the newly created user
                const userToken = jwt.sign({ _id: newUser._id, email:newUser.email }, secret, { expiresIn: '2h'})
                // console.log(userToken);
                
                // * Sending user data back to the client
                response.status(201).cookie('userToken', userToken, { httpOnly: true, maxAge: 2*60*60*1000 }).json(newUser);
            }
        } catch (error) {
            response.status(400).json(error);
        }
    },
    
    // loginUser: {},
    // logoutUser: {},
}