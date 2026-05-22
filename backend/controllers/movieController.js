const Movie =
require("../models/Movie");

const getMovies =
async (req, res) => {

    try {

        const movies =
        await Movie.find();

        res.json(movies);

    } catch (error) {

        res.status(500).json({

            message:
            error.message

        });
    }
};

const getMovieById =
async (req, res) => {

    try {

        const movie =
        await Movie.findById(
            req.params.id
        );

        res.json(movie);

    } catch (error) {

        res.status(500).json({

            message:
            error.message

        });
    }
};

const addMovie =
async (req, res) => {

    try {

        const movie =
        await Movie.create({

            ...req.body,

            creadaPorUsuario: true

        });

        res.status(201).json(
            movie
        );

    } catch (error) {

        res.status(500).json({

            message:
            error.message

        });
    }
};

const deleteMovie =
async (req, res) => {

    try {

        const movie =
        await Movie.findById(
            req.params.id
        );

        if (!movie) {

            return res.status(404).json({

                message:
                "Película no encontrada"

            });
        }

        if (
            !movie.creadaPorUsuario
        ) {

            return res.status(403).json({

                message:
                "No puedes eliminar películas del sistema"

            });
        }

        await Movie.findByIdAndDelete(
            req.params.id
        );

        res.json({

            message:
            "Película eliminada"

        });

    } catch (error) {

        res.status(500).json({

            message:
            error.message

        });
    }
};

const searchMovies =
async (req, res) => {

    try {

        const movies =
        await Movie.find({

            nombre: {

                $regex:
                req.query.q,

                $options: "i"

            }

        });

        res.json(movies);

    } catch (error) {

        res.status(500).json({

            message:
            error.message

        });
    }
};

const filterMovies =
async (req, res) => {

    try {

        const filtro = {};

        if (req.query.genero) {

            filtro.genero = {

                $regex:
                req.query.genero,

                $options: "i"

            };
        }

        if (req.query.anio) {

            filtro.anio =
            Number(
                req.query.anio
            );
        }

        if (req.query.rating) {

            filtro.calificacion =
            Number(
                req.query.rating
            );
        }

        const movies =
        await Movie.find(
            filtro
        );

        res.json(movies);

    } catch (error) {

        res.status(500).json({

            message:
            error.message

        });
    }
};

module.exports = {

    getMovies,

    getMovieById,

    addMovie,

    deleteMovie,

    searchMovies,

    filterMovies

};