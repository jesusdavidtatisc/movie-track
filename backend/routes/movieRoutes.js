const router = require("express").Router();

const {

    createMovie,
    getMovies,
    searchMovies,
    filterByGenre,
    topMovies

} = require("../controllers/movieController");

router.post("/", createMovie);

router.get("/", getMovies);

router.get("/search", searchMovies);

router.get("/genre/:genre", filterByGenre);

router.get("/top", topMovies);

module.exports = router;