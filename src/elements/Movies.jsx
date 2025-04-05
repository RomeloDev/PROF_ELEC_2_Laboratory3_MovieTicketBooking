import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/header';
import BookMovie from '../components/BookMovie';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [showBookModal, setShowBookModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedMovieID, setSelectedMovieID] = useState(null);
  
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try{
      const response = await axios.get('http://localhost:3000/movies');
      setMovies(response.data);
    }
    catch(error){
      console.error('Error fetching movies:', error);
    }
  };

  const handleBookMovie = (movieID, movieName) => {
    setSelectedMovieID(movieID);
    setSelectedMovie(movieName);
    setShowBookModal(true);
  };

  return (
    <>
      <Header />
      <div className='px-[2rem] md:px-[10rem] py-5 border-gray-200 dark:bg-gray-800 min-h-screen'>
        <h2 className='text-center mb-[3rem] text-[2rem] font-bold dark:text-white'>Movies</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {movies.map((movie) => (
            <div key={movie.id} className="max-w-[22rem] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <img className='rounded-t-lg w-full h-[25rem]' src={movie.image} alt={movie.title} />
              <div className='p-5'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{movie.title}</h5>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{movie.genre}</p>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Showing Date: {movie.showingDate}</p>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Seats Available: {movie.seats}</p>
                <button onClick={() => handleBookMovie( movie.id,movie.title)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Book Now
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showBookModal && (
        <BookMovie 
          movieID={selectedMovieID} 
          movieName={selectedMovie} 
          onClose={() => setShowBookModal(false)} 
          onBookingSuccess={fetchMovies}
        />)}
    </>
  )
}

export default Movies