const router =
require("express").Router();

const {

    createReview,
    getMovieReviews,
    likeReview,
    dislikeReview

} = require(
    "../controllers/reviewController"
);

router.post("/", createReview);

router.get(
    "/:movieId",
    getMovieReviews
);

router.put(
    "/like/:id",
    likeReview
);

router.put(
    "/dislike/:id",
    dislikeReview
);

module.exports = router;