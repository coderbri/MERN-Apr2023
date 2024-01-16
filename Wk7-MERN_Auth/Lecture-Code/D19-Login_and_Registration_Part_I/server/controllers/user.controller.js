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
                response.status(201).json(newUser);
            }
        } catch (error) {
            response.status(400).json(error);
        }
    }
    
    // loginUser: {},
    // logoutUser: {},
}