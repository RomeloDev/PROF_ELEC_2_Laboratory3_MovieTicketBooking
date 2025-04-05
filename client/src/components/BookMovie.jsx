import React from 'react';
import axios from 'axios';

const BookMovie = ({ movieID, movieName, onClose, onBookingSuccess }) => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const customerName = e.target.customer.value;

    try {
      const response = await axios.post('http://localhost:3000/book', {
        movieID: Number(movieID),
        customerName: customerName
      });
      
      //alert('Booking successful!');
      alert(response.data.message);
      onBookingSuccess();
      onClose(); // Close the modal after booking
    } catch (error) {
      alert(error.response?.data?.error || 'Booking failed. Please try again.');
    }
  };

  return (
    <>
      <div className='fixed inset-0 bg-black/50 z-40' onClick={onClose}></div>
      
      <div className='fixed inset-0 z-50 flex justify-center items-center'>
        <div className='relative p-4 w-full max-w-md'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Book: {movieName}
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            <form className='p-4 md:p-5' onSubmit={handleSubmit}>
              <div className='grid gap-4 mb-4 grid-cols-2'>
                <div className='col-span-2'>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Movie ID
                  </label>
                  <input 
                    type='text'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white cursor-not-allowed'
                    value={movieID}
                    readOnly
                    disabled
                  />
                </div>
                
                <div className='col-span-2'>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Movie Name
                  </label>
                  <input 
                    type='text'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white cursor-not-allowed'
                    value={movieName}
                    readOnly
                    disabled
                  />
                </div>

                <div className='col-span-2'>
                  <label htmlFor='customer' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Customer Name
                  </label>
                  <input 
                    type='text'
                    name='customer'
                    id='customer'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                    placeholder='Enter your name'
                    required
                  />
                </div>
              </div>

              <button 
                type='submit'
                className='w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700'
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookMovie;