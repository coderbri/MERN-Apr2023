const User = require('../models/user.model');
const secret = process.env.SECRET_KEY; // ! NEW
const jwt = require('jsonwebtoken'); // ! NEW
const bcrypt = require('bcrypt'); // ! NEW

module.exports = {
    registerUser: async (request, response) => {
        try {
            // check if inputted email already exists in db
            const potentialUser = await User.findOne({ email: request.body.email });
            if (potentialUser) {
                response.status(200).json({ msg: 'That email already exists. Please login' });
            } else { // if not, create a new user object
                const newUser = await User.create( request.body );
                
                // * Generating a userToken and storing the id and email of the newly created user
                const userToken = jwt.sign({ _id: newUser._id, email: newUser.email }, secret, { expiresIn: '2h'});
                // console.log(userToken);
                
                // * Sending user data back to the client
                response.status(201).cookie('userToken', userToken, { httpOnly: true, maxAge: 2*60*60*1000 }).json(newUser);
            }
        } catch (error) {
            response.status(400).json(error);
        }
    },
    
    loginUser: async (request, response ) => {
        try { // check if user already exists
            const user = await User.findOne({ email: request.body.email });
            if (user) {
                // * Check to see if the passwrd entered matches the password in the db for that email, specifically the hash
                const passwordsMatch = await bcrypt.compare( request.body.password, user.password );
                if (passwordsMatch) {
                    // * Generate user token
                    const userToken = jwt.sign({ _id: user._id, email: user.email }, secret, { expiresIn: '2h'});
                    
                    // * Log user in
                    response.status(201).cookie('userToken', userToken, { httpOnly: true, maxAge: 2*60*60*1000 }).json(user);
                    
                } else { // * If the email does exist but the passwords don't match
                    // ! NEVER SPECIFY WHAT VALIDATION WENT WRONG IN CASE ITS A HACKER
                    response.status(400).json({ message: "Invalid email/password" })
                }
            } else { // * If the user doesn't exist
                response.status(400).json({ message: "Invalid email/password" })
            }
        } catch (error) {
            response.status(400).json(error);
        }
    },
    
    logoutUser: async (request, response) => {
        response.clearCookie('userToken').json({ message: "You've logged out!" })
    }
}