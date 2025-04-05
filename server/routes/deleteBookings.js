const express = require('express');
const router = express.Router();
const bookings = require('../data/bookingsList');
const movies = require('../data/movieList');

router.delete("/:id", (req, res) => {
    const bookingId = req.params.id;  // Access the id parameter from the URL

    // Find the booking index by ID
    const bookingIndex = bookings.findIndex(booking => booking.id === bookingId);
    if (bookingIndex === -1) {
        return res.status(404).json({message: "Booking not found"});
    }

    // Remove the booking from the bookings list
    const deletedBooking = bookings.splice(bookingIndex, 1);

    // Find the corresponding movie and update the seat count
    const movie = movies.find(m => m.id === deletedBooking[0].movieID);
    if (movie) {
        movie.seats++;
    }
    
    return res.status(200).json({ message: "Booking deleted successfully", deletedBooking });
});

module.exports = router;