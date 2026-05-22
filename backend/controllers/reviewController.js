const Review =
require("../models/Review");

const User =
require("../models/User");

const mongoose =
require("mongoose");

const createReview =
async (req, res) => {

    try {

        const {

            movieId,
            comentario

        } = req.body;

        if (
            !movieId ||
            !comentario
        ) {

            return res.status(400).json({

                message:
                "Faltan datos"

            });
        }

        const user =
        await User.findOne();

        if (!user) {

            return res.status(400).json({

                message:
                "No hay usuarios registrados"

            });
        }

        const review =
        await Review.create({

            movieId:
            new mongoose.Types.ObjectId(
                movieId
            ),

            userId:
            user._id,

            comentario,

            likes: [],

            dislikes: []

        });

        res.status(201).json(
            review
        );

    } catch (error) {

        console.log(
            "ERROR REVIEW:",
            error
        );

        res.status(500).json({

            message:
            error.message

        });
    }
};

const getMovieReviews =
async (req, res) => {

    try {

        const reviews =
        await Review.find({

            movieId:
            req.params.id

        })

        .populate(
            "userId",
            "name email"
        )

        .sort({
            createdAt: -1
        });

        res.json(
            reviews
        );

    } catch (error) {

        console.log(error);

        res.status(500).json({

            message:
            error.message

        });
    }
};

module.exports = {

    createReview,

    getMovieReviews

};