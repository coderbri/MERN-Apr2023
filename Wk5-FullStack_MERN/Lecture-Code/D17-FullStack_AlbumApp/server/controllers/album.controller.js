const Album = require("../models/album.model");

module.exports = {
    // * READ (ALL)
    findAllAlbumns: ( request, response ) => {
        Album.find()
            .then((allAlbumData) => {
                console.log("\n=== All albums retrieved! ===\n", allAlbumData);
                response.json(allAlbumData);
            })
            .catch((err) => response.status(400).json(err));
    },
    // * CREATE
    createAlbum: (req, res) => {
        Album.create( req.body )
            .then((newAlbum) => {
                console.log("\=== Album created! ===\n", newAlbum);
                res.json(newAlbum);
            })
            .catch((err) => res.status(400).json(err));
    },
    // * READ (ONE)
    findOneAlbum: (req, res) => {
        Album.findOne({ _id: req.params.id })
            .then((oneSingleAlbum) => {
                console.log("\=== Album retrieved! ===\n", oneSingleAlbum);
                res.json(oneSingleAlbum);
            })
            .catch((err) => res.status(400).json(err));
    },
    // * UPDATE
    updateOneAlbum: (req, res) => {
        Album.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
            .then((updatedAlbum) => {
                console.log("\=== Album updated! ===\n", updatedAlbum);
                res.json(updatedAlbum);
            })
            .catch((err) => res.status(400).json(err));
    },
    // * DELETE
    deleteOneAlbum: (req, res) => {
        Album.deleteOne({ _id: req.params.id })
            .then((result) => {
                console.log("\=== Album deleted! ===");
                res.json({ albumStatus: result });
            })
            .catch((err) => res.status(400).json(err));
    },
}