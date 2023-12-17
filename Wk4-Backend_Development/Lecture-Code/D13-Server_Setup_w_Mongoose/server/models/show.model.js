const mongoose = require("mongoose");

const ShowSchema = new mongoose.Schema({
    title: { type: String },
    releaseYear: { type: Number },
    network: { type: String },
    creator: { type: String },
    genre: { type: String },
}, { timestamps : true });

//                      cannot be the same name!
const Show = mongoose.model("Show", ShowSchema);
module.exports = Show;