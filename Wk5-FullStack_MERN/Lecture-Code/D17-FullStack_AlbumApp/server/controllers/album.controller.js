const Album = require("../models/album.model");

module.exports = {
    findAllAlbumns: ( request, response ) => { // * READ (ALL)
        Album.find()
            .then((allAlbumData) => {
                console.log("\n=== All albums retrieved! ===\n", allAlbumData);
                response.json(allAlbumData);
            })
            .catch((err) => response.status(400).json(err));
    },
    
    createAlbum: (req, res) => { // * CREATE
        Album.create( req.body )
            .then((newAlbum) => {
                console.log("\=== Album created! ===\n", newAlbum);
                res.json(newAlbum);
            })
            .catch((err) => res.status(400).json(err));
    },
    
    findOneAlbum: (req, res) => { // * READ (ONE)
        Album.findOne({ _id: req.params.id })
            .then((oneSingleAlbum) => {
                console.log("\=== Album retrieved! ===\n", oneSingleAlbum);
                res.json(oneSingleAlbum);
            })
            .catch((err) => res.status(400).json(err));
    },
    
    updateOneAlbum: (req, res) => { // * UPDATE
        Album.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
            .then((updatedAlbum) => {
                console.log("\=== Album updated! ===\n", updatedAlbum);
                res.json(updatedAlbum);
            })
            .catch((err) => res.status(400).json(err));
    },
    
    deleteOneAlbum: (req, res) => { // * DELETE
        Album.deleteOne({ _id: req.params.id })
            .then((result) => {
                console.log("\=== Album deleted! ===");
                res.json({ albumStatus: result });
            })
            .catch((err) => res.status(400).json(err));
    },
}