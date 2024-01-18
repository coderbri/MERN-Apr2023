const Author = require('../models/author.model');

module.exports = {
    // * READ (ALL)
    findAllAuthors: (req, res) => {
        Author.find()
            .then((allAuthorData) => {
                console.log("\n === All authors retrieved! ===", allAuthorData);
                res.status(200).json(allAuthorData);
            })
            .catch((err) => res.status(400).json(err));
    },
    // * CREATE
    createAuthor: (req, res) => {
        Author.create( req.body )
            .then((newAuthor) => {
                console.log("\n === New author added! ===", newAuthor);
                res.status(200).json(newAuthor);
            })
            .catch((err) => res.status(400).json(err));
    },
    // * READ (ONE)
    findOneAuthor: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then((singleAuthorData) => {
                console.log("\n === Author retrieved! ===", singleAuthorData);
                res.status(200).json(singleAuthorData);
            })
            .catch((err) => res.status(400).json(err));
    },
    // * UPDATE
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
            .then((updatedAuthor) => {
                console.log("\n === Author information updated! ===", updatedAuthor);
                res.status(200).json(updatedAuthor);
            })
            .catch((err) => res.status(400).json(err));
    },
    // * DELETE
    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(result => res.status(200).json({ AuthorStatus: result }))
            .catch((err) => res.status(400).json(err));
    }
}