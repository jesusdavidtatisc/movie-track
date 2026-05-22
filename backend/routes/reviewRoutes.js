const express =
require("express");

const router =
express.Router();

const Review =
require("../models/Review");

router.get(

    "/:movieId",

    async (req, res) => {

        try {

            const reviews =

            await Review.find({

                movieId:
                req.params.movieId

            })

            .populate(
                "userId",
                "nombre"
            )

            .sort({
                createdAt:-1
            });

            res.json(reviews);

        } catch (error) {

            res.status(500).json({
                message:error.message
            });
        }
    }
);

router.post(

    "/",

    async (req, res) => {

        try {

            const review =
            new Review({

                movieId:
                req.body.movieId,

                comentario:
                req.body.comentario,

                userId:null

            });

            await review.save();

            res.status(201).json(
                review
            );

        } catch (error) {

            console.log(error);

            res.status(500).json({
                message:error.message
            });
        }
    }
);

module.exports =
router;