
const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
    albumName: {
        type: String,
        required: [ true, 'The Album Name is required '],
        minLength: [ 3, 'The Album Name must be 3 or more characters' ],
        maxLength: [ 50, 'The Album Name is too long' ]
    },
    artist: {
        type: String,
        required: [ true, 'The Artist\'s name is required '],
        minLength: [ 3, 'The Artist\'s name must be 3 or more characters' ],
        maxLength: [ 50, 'The Artist\'s name is too long' ]
    },
    releaseYear: {
        type: Number,
        required: [ true, 'The Release Year is required' ],
        min: [ 1920, 'No albums before 1920 allowed' ]
    },
    genre: {
        type: String,
        required: [ true, '' ],
        minLength: [ 3, 'The Genre must be 3 or more characters' ],
        maxLength: [ 50, 'The Genre is too long' ]
    },
    explicit: {
        type: Boolean,
        required: [ 'Please verified if this Album is explicit or not' ]
    }
}, { timestamps: true });

const Album = mongoose.model("Album", AlbumSchema);
module.exports = Album;