const express =
require("express");

const router =
express.Router();

const {

    getMovies,

    getMovieById,

    addMovie,

    deleteMovie,

    searchMovies,

    filterMovies

} = require(
    "../controllers/movieController"
);

router.get(
    "/",
    getMovies
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

router.post(
    "/",
    addMovie
);

router.delete(
    "/:id",
    deleteMovie
);

module.exports =
router;