const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    authorFirstName: {
        type: String,
        required: [ true, "Author's first Name is required" ],
        minLength: [ 3, "Author's first Name must be 2 or more characters" ],
        // maxLength: [ 128, "Author's first Name is too long" ]
    },
    authorLastName: {
        type: String,
        required: [ true, "Author's last Name is required" ],
        minLength: [ 3, "Author's last Name must be 2 or more characters" ],
        // maxLength: [ 128, "Author's first Name is too long" ]
    }
}, {timestamps:true});

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;