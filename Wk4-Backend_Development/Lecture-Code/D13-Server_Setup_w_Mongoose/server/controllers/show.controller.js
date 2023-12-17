const Show = require("../models/show.model");


// * GET ALL
module.exports.findAllShows = ( request, resposne ) => {
    Show.find()
        .then((allShowsData) => {
            resposne.json({ shows: allShowsData });
        })
        .catch((error) => {
            resposne.json({ message: "Something went wrong", error: error });
        });
}

// * CREATE
module.exports.createShow = ( request, response ) => {
    Show.create( request.body )
        .then((newShow) => {
            response.json({ show: newShow });
        })
        .catch((error) => {
            resposne.json({ message: "Something went wrong", error: error });
        });
}

// * UPDATE

// * GET ONE
module.exports.findOneShow = ( request, resposne ) => {
    Show.findOne({ _id: request.params.id })
        .then((oneSingleShow) => {
            resposne.json({ show: oneSingleShow });
        })
        .catch((error) => {
            resposne.json({ message: "Something went wrong", error: error });
        });
}

// * DELETE
