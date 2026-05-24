const express =
require("express");

const router =
express.Router();

const Review =
require("../models/Review");

const authMiddleware =
require("../middleware/authMiddleware");

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

    authMiddleware,

    async (req, res) => {

        try {

            const existingReview =

            await Review.findOne({

                movieId:req.body.movieId,

                userId:req.user.userId

            });

            if (existingReview) {

                return res.status(400).json({

                    message:
                    "Ya hiciste una reseña para esta película"

                });
            }

            const review =
            new Review({

                movieId:req.body.movieId,

                comentario:req.body.comentario,

                rating:req.body.rating,

                userId:req.user.userId

            });

            await review.save();

            res.status(201).json(review);

        } catch (error) {

            console.log(error);

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

            const review =

            await Review.findById(
                req.params.id
            );

            if (!review) {

                return res.status(404).json({

                    message:
                    "Reseña no encontrada"

                });
            }

            if (

                review.userId.toString()

                !==

                req.user.userId

            ) {

                return res.status(403).json({

                    message:
                    "No autorizado"

                });
            }

            await Review.findByIdAndDelete(
                req.params.id
            );

            res.json({

                message:
                "Reseña eliminada"

            });

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