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
        validate: [ isEmail, "Invalid email" ] // ! NEW
    },
    password: {
        type: String,
        required: [ true, "Password is required"],
        minLength: [ 8, "Password must be at least 8 characters" ]
    }
}, {timestamps:true});

// ! NEW
// * MIDDLEWARE
// ? to make sure the password and confirmPassword match
UserSchema.virtual('confirmPassword')
    .get(() => this.confirmPassword)
    .set(value => this.confirmPassword = value);

UserSchema.pre('validate', function(next) {
    if ( this.password !== this.confirmPassword ) {
        this.invalidate('confirmPassword', 'Passwords don\'t match')
    }
    next();
});

// * Bcrypt
UserSchema.pre('save', function(next) {
    bcrypt.hash( this.password, 10 )
        .then( hash => {
            this.password = hash;
            next();
        });
})

module.exports = mongoose.model("User", UserSchema);