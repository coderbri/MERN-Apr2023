const AuthorController = require('../controllers/author.controller');

module.exports = app => {
        app.get("/api/authors", AuthorController.findAllAuthors); // READ (ALL)
        app.post("/api/author/new", AuthorController.createAuthor); // CREATE
        app.get("/api/author/:id", AuthorController.findOneAuthor); // READ (ONE)
        app.put("/api/author/update/:id", AuthorController.updateAuthor); // UPDATE
        app.delete("/api/author/delete/:id", AuthorController.deleteAuthor); // DELETE
}
