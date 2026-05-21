const express =
require("express");

const router =
express.Router();

const {

    getMovies,
    addMovie,
    searchMovies,
    filterMovies,
    getMovieById

} = require(
    "../controllers/movieController"
);

router.get(
    "/search",
    searchMovies
);

router.get(
    "/filter",
    filterMovies
);

router.get(
    "/:id",
    getMovieById
);

router.get(
    "/",
    getMovies
);

router.post(
    "/",
    addMovie
);

module.exports =
router;