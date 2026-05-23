const express =
require("express");

const router =
express.Router();

const Movie =
require("../models/Movie");

const authMiddleware =
require("../middleware/authMiddleware");

router.get(

    "/",

    async (req, res) => {

        const movies =
        await Movie.find();

        res.json(movies);
    }
);

router.get(

    "/search",

    async (req, res) => {

        const movies =
        await Movie.find({

            nombre: {

                $regex:req.query.q,

                $options:"i"

            }

        });

        res.json(movies);
    }
);

router.get(

    "/filter",

    async (req, res) => {

        const filters = {};

        if (req.query.genero) {

            filters.genero =
            req.query.genero;
        }

        if (req.query.anio) {

            filters.anio =
            Number(req.query.anio);
        }

        if (req.query.rating) {

            filters.calificacion =
            Number(req.query.rating);
        }

        const movies =
        await Movie.find(filters);

        res.json(movies);
    }
);

router.get(

    "/:id",

    async (req, res) => {

        const movie =
        await Movie.findById(
            req.params.id
        );

        res.json(movie);
    }
);

router.post(

    "/",

    authMiddleware,

    async (req, res) => {

        try {

            const movie =
            await Movie.create({

                ...req.body,

                creadoPor:
                req.user.userId

            });

            res.status(201).json(
                movie
            );

        } catch (error) {

            res.status(500).json({

                message:error.message

            });
        }
    }
);

router.put(

    "/:id",

    authMiddleware,

    async (req, res) => {

        try {

            const movie =
            await Movie.findById(
                req.params.id
            );

            if (

                movie.creadoPor.toString()

                !==

                req.user.userId

            ) {

                return res.status(403).json({

                    message:
                    "No autorizado"

                });
            }

            const updatedMovie =

            await Movie.findByIdAndUpdate(

                req.params.id,

                req.body,

                {

                    new:true

                }

            );

            res.json(updatedMovie);

        } catch (error) {

            res.status(500).json({

                message:error.message

            });
        }
    }
);

router.delete(

    "/:id",

    authMiddleware,

    async (req, res) => {

        try {

            const movie =
            await Movie.findById(
                req.params.id
            );

            if (

                movie.creadoPor.toString()

                !==

                req.user.userId

            ) {

                return res.status(403).json({

                    message:
                    "No autorizado"

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

                message:error.message

            });
        }
    }
);
module.exports =
router;