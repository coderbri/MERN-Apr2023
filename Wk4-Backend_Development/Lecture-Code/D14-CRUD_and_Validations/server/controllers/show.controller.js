const Show = require("../models/show.model");

module.exports = {
    // * GET ALL
    findAllShows: ( request, resposne ) => {
        Show.find()
            .then((allShowsData) => {
                console.log("\n=== All shows retrieved! ===\n" + allShowsData);
                resposne.json({ shows: allShowsData });
            })
            .catch((error) => {
                resposne.json({ message: "Something went wrong", error: error });
            });
    },
    
    // * CREATE
    createShow: ( request, response ) => {
        Show.create( request.body )
            .then((newShow) => {
                console.log("\n=== New show added! ===\n" + newShow);
                response.json({ show: newShow });
            })
            .catch( error => response.status(400).json({ message: "Something went wrong", error: error }) );
    },
    
    // * GET ONE
    findOneShow: ( request, response ) => {
        Show.findOne({ _id: request.params.id })
            .then((oneSingleShow) => {
                console.log("\n=== Show retrieved! ===\n" + oneSingleShow);
                response.json({ show: oneSingleShow });
            })
            .catch((error) => {
                response.json({ message: "Something went wrong", error: error });
            });
    },
    
    // * UPDATE
    updateOneShow: ( request, response ) => {
        Show.findOneAndUpdate(
            // ! All three must be included for successful update!
            { _id: request.params.id }, request.body, { new: true, runValidators: true }
        )
            .then((updatedShow) => {
                console.log("\n=== Show updated! ===\n" + updatedShow);
                response.json({ show: updatedShow });
            })
            .catch((error) => {
                response.json({ message: "Something went wrong", error: error });
            });
    },
    
    // * DELETE
    deleteOneShow: ( request, response ) => {
        Show.deleteOne({ _id: request.params.id })
            .then((result) => {
                console.log("\n=== Show deleted! ===\n");
                response.json({ showStatus: result });
            })
            .catch((error) => {
                response.json({ message: "Something went wrong", error: error });
            });
    }
}