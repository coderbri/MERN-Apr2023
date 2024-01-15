const mongoose = require("../config/mongoose.config")

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [ true, "First name is required" ],
        min: [ true, "First name must be at least 2 characters" ],
    },
    lastName: {
        type: String,
        required: [ true, "Last name is required" ],
        min: [ true, "Last name must be at least 2 characters" ],
    },
    email: {
        type: String,
        required: [ true, "Email is required" ],
        unique: [ true, "Email already exists" ]
    },
    password: {
        type: String,
        required: [ true, "Password is required" ],
        minLength: [ 8, "Password must be at least 8 characters" ]
    }
}, { timestamps: true });

// * NEW
// ? Middleware to make sure the password and confirmPassword match
// ! We do not need to create an actual field for confirmPassword
// This will not be saved into the database but will be used for matching, sorta like a promise GET request
UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword) // create the virtual field
    .set((value) => this._confirmPassword = value); // then set the value to the confirmPasword

    // Middleware to validate the password and confirmPassword match
UserSchema.pre('validate', function (next) {
    if ( this.password !== this.confirmPassword ) {
        this.invalidate( "confirmPassword", "Password must match confirm password" );
    } next(); // move on with validation
});

const User = mongoose.model("User", UserSchema);
module.exports = User;