const express = require('express');
const router = express.Router();
const bookings = require('../data/bookingsList');

let movies = require('../data/movieList');
//let bookings = [];

router.post("/", (req, res) => {
    const { movieID, customerName } = req.body;

    //Input Validation 
    if (!movieID || !customerName) {
        return res.status(400).json({ error: "Movie ID and customer name are required." });
    }

    //Find movie
    const movie = movies.find(m => m.id === Number(movieID));

    if (!movie) {
        return res.status(404).json({ error: `Movie not found.`});
    }

    //Check seat availability
    if (movie.seats <= 0) {
        return res.status(400).json({ error: "No seats available."});
    }

    //Create booking
    const booking = {
        id: Date.now().toString(),
        movieID,
        customerName,
        movieTitle: movie.title,
        bookingDate: new Date().toISOString()
    };

    //Update seats and save booking
    movie.seats --;
    bookings.push(booking);

    res.status(201).json({
        message: `Successfully booked ${movie.title} for ${customerName}`,
        booking,
    });
});

module.exports = router;