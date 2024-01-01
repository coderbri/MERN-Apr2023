const ShowController = require("../controllers/show.controller");

module.exports = app => {
    // * GET ALL
    app.get( "/api/shows", ShowController.findAllShows );
    // * CREATE
    app.post( "/api/show/new", ShowController.createShow );
    // * GET ONE
    app.get( "/api/show/:id", ShowController.findOneShow );
    // * UPDATE
    app.put( "/api/show/update/:id", ShowController.updateOneShow );
    // * DELETE
    app.delete( "/api/show/delete/:id", ShowController.deleteOneShow );
}