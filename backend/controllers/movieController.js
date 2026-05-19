const Movie = require("../models/Movie");

exports.createMovie = async (req, res) => {

    try {

        const movie =
        new Movie(req.body);

        await movie.save();

        res.json(movie);

    } catch (error) {

        console.log(error);

        res.status(500).json(error);
    }
};

exports.getMovies = async (req, res) => {

    try {

        const movies =
        await Movie.find()
        .sort({ createdAt: -1 });

        res.json(movies);

    } catch (error) {

        console.log(error);

        res.status(500).json(error);
    }
};

exports.searchMovies = async (req, res) => {

    try {

        const query = req.query.q;

        const movies = await Movie.find({

            nombre: {
                $regex: query,
                $options: "i"
            }

        });

        res.json(movies);

    } catch (error) {

        console.log(error);

        res.status(500).json(error);
    }
};

exports.filterByGenre = async (req, res) => {

    try {

        const genre = req.params.genre;

        const movies =
        await Movie.find({
            genero: genre
        });

        res.json(movies);

    } catch (error) {

        console.log(error);

        res.status(500).json(error);
    }
};

exports.topMovies = async (req, res) => {

    try {

        const movies =
        await Movie.find()
        .sort({ calificacion: -1 })
        .limit(5);

        res.json(movies);

    } catch (error) {

        console.log(error);

        res.status(500).json(error);
    }
};