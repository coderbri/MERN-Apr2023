const JokesController = require("../controllers/joke.controller");

module.exports = app => {
    // GET ONE (random)
    app.get("/api/jokes/random", JokesController.findRandomJoke);
    // GET ALL
    app.get("/api/jokes", JokesController.findAllJokes);
    // GET ONE
    app.get("/api/jokes/:id", JokesController.findOneJoke);
    // CREATE
    app.post("/api/jokes", JokesController.createNewJoke);
    // UPDATE
    app.patch("/api/jokes/:id", JokesController.updatedExistingJoke);
    // DELETE
    app.delete("/api/jokes/:id", JokesController.deleteExistingJoke);
}