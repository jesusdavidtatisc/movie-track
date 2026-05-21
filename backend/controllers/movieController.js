const Movie =
require("../models/Movie");

exports.getMovies =
async (req, res) => {

    try {

        const movies =
        await Movie.find();

        res.json(movies);

    } catch (error) {

        console.log(error);

        res.status(500).json({

            message:
            "Error obteniendo películas"

        });
    }
};

exports.addMovie =
async (req, res) => {

    try {

        const movie =
        new Movie(req.body);

        await movie.save();

        res.json(movie);

    } catch (error) {

        console.log(error);

        res.status(500).json({

            message:
            "Error agregando película"

        });
    }
};

exports.searchMovies =
async (req, res) => {

    try {

        const movies =
        await Movie.find({

            nombre: {

                $regex: req.query.q,

                $options: "i"

            }

        });

        res.json(movies);

    } catch (error) {

        console.log(error);

        res.status(500).json({

            message:
            "Error buscando películas"

        });
    }
};

exports.filterMovies =
async (req, res) => {

    try {

        const {

            genero,
            anio,
            rating

        } = req.query;

        let filters = {};

        if (genero) {

            filters.genero = genero;
        }

        if (anio) {

            filters.anio =
            Number(anio);
        }

        if (rating) {

            filters.calificacion =
            Number(rating);
        }

        const movies =
        await Movie.find(filters);

        res.json(movies);

    } catch (error) {

        console.log(error);

        res.status(500).json({

            message:
            "Error filtrando películas"

        });
    }
};

exports.getMovieById =
async (req, res) => {

    try {

        const movie =
        await Movie.findById(
            req.params.id
        );

        res.json(movie);

    } catch (error) {

        console.log(error);

        res.status(500).json({

            message:
            "Error obteniendo película"

        });
    }
};