const express =
require("express");

const router =
express.Router();

const {

    createReview,

    getMovieReviews

} = require(
    "../controllers/reviewController"
);

router.post(
    "/",
    createReview
);

router.get(
    "/movie/:id",
    getMovieReviews
);

module.exports =
router;