const mongoose = require("mongoose");

const ShowSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [ true, 'Title is required' ],
        minLength: [ 3, 'Title must be at least 3 or more characters' ],
        maxLength: [ 45, 'Title is too long' ],
    },
    
    releaseYear: {
        type: Number,
        required: [ true, 'Release Year is required' ],
        min: [ 1920, 'No shows before 1920 allowed' ]
    },
    network: {
        type: String,
        required: [ true, 'Network is required' ],
        minLength: [ 3, 'Network must be at least 3 or more characters' ],
        maxLength: [ 10, 'Network is too long' ]
    },
    creator: {
        type: String,
        required: [ true, 'Creator is required' ],
        minLength: [ 3, 'Creator must be at least 3 or more characters' ],
        maxLength: [ 45, 'Creator is too long' ]
    },
    genre: {
        type: String,
        required: [ true, 'Genre is required' ],
        minLength: [ 5, 'Genre must be at least 5 or more characters' ],
        maxLength: [ 50, 'Genre is too long' ]
    }
    
    // ? Timestamps are needed for mongoose to manage createdAt and updatedAt entries
}, { timestamps : true });

//                      cannot be the same name!
const Show = mongoose.model("Show", ShowSchema);
module.exports = Show;