const ShowController = require("../controllers/show.controller");

module.exports = app => {
    // * GET ALL
    app.get( "/api/shows", ShowController.findAllShows );
    // * GET ONE
    app.get( "/api/show/:id", ShowController.findOneShow );
    // * CREATE
    app.post( "/api/show/new", ShowController.createShow );
    // * UPDATE
    // app.patch( "/api/show/:id", ShowController.findAllShows );
    // * DELETE
}