const Joke = require("../models/joke.model");

// GET ALL
module.exports.findAllJokes = (request, response) => {
    Joke.find()
        .then((allJokes) => {
            response.json({ jokes: allJokes });
        })
        .catch((error) => {
            response.json({ message: "Error retrieving jokes.", error: error });
        });
}

// GET ONE
module.exports.findOneJoke = (request, response) => {
    Joke.findOne({ _id: request.params.id })
        .then(( aSingleJoke ) => {
            console.log( "Joke Found!\n", aSingleJoke );
            response.json({ joke: aSingleJoke });
        })
        .catch((error) => {
            response.json({ message: "Error retrieving this joke.", error: error });
        });
}

// CREATE
module.exports.createNewJoke = (request, response) => {
    Joke.create( request.body )
        .then(( newlyCreatedJoke ) => {
            console.log( "Jokes created!\n", newlyCreatedJoke );
            response.json({ newJoke: newlyCreatedJoke });
        })
        .catch((error) => {
            response.json({ message: "Error creating this joke.", error: error });
        });
}

// UPDATE
module.exports.updatedExistingJoke = (request, response) => {
    Joke.findOneAndUpdate(
        { _id: request.params.id }, 
        request.body, 
        { new: true, runValidators: true }
    )
        .then(( updatedJoke ) => {
            console.log( "Joke updated!\n", updatedJoke );
            response.json({ joke: updatedJoke });
        })
        .catch((error) => {
            response.json({ message: "Error updating this joke.", error: error });
        });
}
// DELETE
module.exports.deleteExistingJoke = (request, response) => {
    Joke.deleteOne({ _id: request.params.id })
        .then(( result ) => {
            console.log( "Joke deleted!\n", result );
            response.json({ result: result });
        })
        .catch((error) => {
            response.json({ message: "Error deleting this joke.", error: error });
        });
}