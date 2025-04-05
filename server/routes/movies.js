const express = require('express');
const router = express.Router();
const movies = require('../data/movieList');

router.get("/", (req, res) => {
    res.json(movies);
});

module.exports = router;