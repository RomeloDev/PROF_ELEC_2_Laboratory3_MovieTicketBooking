const express =  require('express');
const cors = require('cors');
const path = require('path');

const app = express();  

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(express.json());

// Import routes
const moviesRoute = require('./routes/movies');
const bookMovieRoute = require('./routes/bookMovie');
const bookingsRoute = require('./routes/bookings');
const deleteBookingsRoute = require('./routes/deleteBookings');

// Use routes
app.use("/movies", moviesRoute);
app.use("/book", bookMovieRoute);
app.use("/bookings", bookingsRoute);
app.use("/delete", deleteBookingsRoute);

// Default Route
app.get('/', (req, res) => {
    res.send("Hi there! Welcome to the Movie Booking API.");
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});