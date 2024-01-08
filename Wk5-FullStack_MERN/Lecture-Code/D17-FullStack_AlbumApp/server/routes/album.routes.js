const AlbumController = require("../controllers/album.controller");

module.exports = app => {
    app.get( "/api/albums", AlbumController.findAllAlbumns ); // * READ (ALL)
    app.post( "/api/album/new", AlbumController.createAlbum ); // * CREATE
    app.get( "/api/album/:id", AlbumController.findOneAlbum ); // * READ (ONE)
    app.put( "/api/album/update/:id", AlbumController.updateOneAlbum ); // * UPDATE
    app.delete( "/api/album/delete/:id", AlbumController.deleteOneAlbum ); // * DELETE
}