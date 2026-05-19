const router = require("express").Router();

const {
    createMovie,
    getMovies
} = require("../controllers/movieController");

router.post("/", createMovie);

router.get("/", getMovies);

module.exports = router;