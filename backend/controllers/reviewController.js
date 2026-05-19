const Review = require("../models/Review");

exports.createReview = async (req, res) => {

    try {

        const review = new Review(req.body);

        await review.save();

        res.json(review);

    } catch (error) {

        res.status(500).json(error);
    }
};

exports.likeReview = async (req, res) => {

    try {

        const review =
        await Review.findById(req.params.id);

        review.likes += 1;

        await review.save();

        res.json(review);

    } catch (error) {

        res.status(500).json(error);
    }
};

exports.dislikeReview = async (req, res) => {

    try {

        const review =
        await Review.findById(req.params.id);

        review.dislikes += 1;

        await review.save();

        res.json(review);

    } catch (error) {

        res.status(500).json(error);
    }
};