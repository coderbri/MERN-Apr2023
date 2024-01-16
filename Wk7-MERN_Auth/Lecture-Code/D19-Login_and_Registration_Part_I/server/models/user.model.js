const mongoose = require("mongoose");
const bcrypt = require('bcrypt'); // ! NEW
const { isEmail } = require('validator'); // ! NEW

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [ true, "First Name is required"],
        // minLength: [ 2, "First Name must be 2 or more characters" ],
    },
    lastName: {
        type: String,
        required: [ true, "Last Name is required"],
        // minLength: [ 2, "Last Name must be 2 or more characters" ],
    },
    email: {
        type: String,
        required: [ true, "Email is required"],
        validate: [ isEmail, "Invalid email" ]
    },
    password: {
        type: String,
        required: [ true, "Password is required"],
        minLength: [ 8, "Password must be at least 8 characters" ]
    }
}, {timestamps:true});

// ! NEW
// * MIDDLEWARE
// ? Middleware to make sure the password and confirmPassword match
// ! We do not need to create an actual field for confirmPassword
// This will not be saved into the database but will be used for matching, sorta like a promise GET request
// defines virtual field that is not a part of the schema, but is a field added
// temporarily when user is registering their details; this will not be stored in the db
//         virtual field: confirm password
UserSchema.virtual('confirmPassword')
    .get(() => this.confirmPassword) // "this" refers to the current instance of the field
    .set(value => this.confirmPassword = value); // this field will set to whatever value the user inputted into the form

// Middleware to validate the password and confirmPassword match
// previous-to-saving : this runs before anything saves to the db
//                              this function takes in param of "next"
UserSchema.pre('validate', function(next) {
    if ( this.password !== this.confirmPassword ) {
        this.invalidate('confirmPassword', 'Passwords don\'t match')
    }
    next();
    // invoke this function to execute the rest of the code after the passwords go through validation
});

// bcrypt
UserSchema.pre('save', function(next) {
    bcrypt.hash( this.password, 10 )
        .then( hash => {
            this.password = hash;
            next();
        });
})

module.exports = mongoose.model("User", UserSchema);