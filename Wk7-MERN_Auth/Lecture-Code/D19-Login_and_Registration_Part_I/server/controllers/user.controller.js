const User = require('../models/user.model');
// ! still need to create secret key
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    /* METHOD 1
    register: (reg, res) => {
        User.create( req.body )
            .then(user => {
                const userToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY );
                res
                    .cookie("userToken", userToken, { httpOnly: true })
                    .json({ msg: "success!", user: user })
            })
            .catch(err => res.json(err));
    } */
    /* METHOD 2 - BEST! */
    registerUser: async (request, response) => {
        try {
            // check if inputted email already exists in db
            const potentialUser = await User.findOne({ email: request.body.email })
            if (potentialUser) {
                response.status(200).json({ msg: 'That email already exists. Please login' })
            } else { // if not, create a new user object
                const newUser = await User.create( request.body );
                
                // this function generates a json web token string
                //  takes in somewhat sensitive information that can be safely decoded in the backend
                //  takes in 2 args: 
                //      1. user's id and email
                //      2. secret key
                //   this will also need expiration time
                // * Generating a userToken and storing the id and email of the newly created user
                const userToken = jwt.sign({ _id: newUser._id, email:newUser.email }, secret, { expiresIn: '2h'})
                // console.log(userToken);
                // * Sending user data back to the client
                //                                                              maxAge takes in seconds
                response.status(201).cookie('userToken', userToken, { httpOnly: true, maxAge: 2*60*60*1000 }).json(newUser);
            }
        } catch (error) {
            response.status(400).json(error);
        }
    }
    
    // loginUser: {},
    // logoutUser: {},
}