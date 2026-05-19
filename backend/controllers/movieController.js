const Movie = require("../models/Movie");

exports.createMovie = async (req, res) => {

    try {

        const movie = new Movie(req.body);

        await movie.save();

        res.json(movie);

    } catch (error) {

        res.status(500).json(error);
    }
};

exports.getMovies = async (req, res) => {

    try {

        const movies = await Movie.find();

        res.json(movies);

    } catch (error) {

        res.status(500).json(error);
    }
};

exports.getTopMovies = async (req, res) => {

    try {

        const movies = await Movie
        .find()
        .sort({ calificacion: -1 })
        .limit(5);

        res.json(movies);

    } catch (error) {

        res.status(500).json(error);
    }
};

exports.getMoviesByGenre = async (req, res) => {

    try {

        const genre = req.params.genre;

        const movies = await Movie.find({
            genero: genre
        });

        res.json(movies);

    } catch (error) {

        res.status(500).json(error);
    }
};

exports.searchMovie = async (req, res) => {

    try {

        const name = req.query.name;

        const movies = await Movie.find({
            nombre: {
                $regex: name,
                $options: "i"
            }
        });

        res.json(movies);

    } catch (error) {

        res.status(500).json(error);
    }
};