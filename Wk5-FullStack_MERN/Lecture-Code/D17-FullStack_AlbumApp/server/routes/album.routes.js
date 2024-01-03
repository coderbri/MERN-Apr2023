const AlbumController = require("../controllers/album.controller");

module.exports = app => {
    // * READ (ALL)
    app.get( "/api/albums", AlbumController.findAllAlbumns );
    // * CREATE
    app.post( "/api/album/new", AlbumController.createAlbum );
    // * READ (ONE)
    app.get( "/api/album/:id", AlbumController.findOneAlbum );
    // * UPDATE
    app.put( "/api/album/update/:id", AlbumController.updateOneAlbum );
    // * DELETE
    app.delete( "/api/album/delete/:id", AlbumController.deleteOneAlbum );
}