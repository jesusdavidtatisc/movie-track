const router = require("express").Router();

const {
    createReview,
    likeReview,
    dislikeReview
} = require("../controllers/reviewController");

router.post("/", createReview);

router.put("/like/:id", likeReview);

router.put("/dislike/:id", dislikeReview);

module.exports = router;