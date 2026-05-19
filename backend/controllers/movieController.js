const Movie = require("../models/Movie");

exports.createMovie = async (req, res) => {

    try {

        console.log(req.body);

        const movie = new Movie(req.body);

        await movie.save();

        res.json(movie);

    } catch (error) {

        console.log(error);

        res.status(500).json(error);
    }
};

exports.getMovies = async (req, res) => {

    try {

        const movies = await Movie.find();

        res.json(movies);

    } catch (error) {

        console.log(error);

        res.status(500).json(error);
    }
};