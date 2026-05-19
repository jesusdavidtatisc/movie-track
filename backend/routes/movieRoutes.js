const router = require("express").Router();

const {
    createMovie,
    getMovies,
    getTopMovies,
    getMoviesByGenre,
    searchMovie
} = require("../controllers/movieController");

router.post("/", createMovie);

router.get("/", getMovies);

router.get("/top", getTopMovies);

router.get("/genre/:genre", getMoviesByGenre);

router.get("/search/movie", searchMovie);

module.exports = router;