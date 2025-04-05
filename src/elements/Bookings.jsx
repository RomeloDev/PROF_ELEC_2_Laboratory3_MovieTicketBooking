import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import axios from 'axios'

const Bookings = () => {
  const [ bookings, setBookings ] = useState([]);
  const [ deleted, setDeleted ] = useState(false);

  useEffect(() => {
      fetchBookings();
      if (deleted){
        setDeleted(false);
      }
  }, [deleted]);

  const fetchBookings = async () => {
    try{
      const response = await axios.get('http://localhost:3000/bookings');
      setBookings(response.data);
    }
    catch(error){
      alert('Error fetching bookings:', error);
    }
  };

  const deleteBooking = async (id) => {
    try{
      const response = await axios.delete(`http://localhost:3000/delete/${id}`);
      alert(response.data.message);
      setDeleted(true);
    }
    catch(error){
      console.error('Error deleting booking:', error);
      alert(error || 'Error deleting booking. Please try again.');
    }

  };

  return (
    <>
      <Header />
      <div className='px-[2rem] md:px-[10rem] py-5 border-gray-200 dark:bg-gray-800 min-h-screen'>
        <h2 className='text-center mb-[3rem] text-[2rem] font-bold dark:text-white'>My Bookings</h2>
        <div className='flex justify-center items-center'>
          <div className='relative overflow-x-auto shadow-sm shadow-gray-600 sm:rounded-lg'>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>ID</th>
                  <th scope='col' className='px-6 py-3'>Movie ID</th>
                  <th scope='col' className='px-6 py-3'>Movie Name</th>
                  <th scope='col' className='px-6 py-3'>Customer Name</th>
                  <th scope='col' className='px-6 py-3'>Booking Date</th>
                  <th scope='col' className='px-6 py-3'>Action</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {booking.id}
                    </td>
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {booking.movieID}
                    </td>
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {booking.movieTitle}
                    </td>
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {booking.customerName}
                    </td>
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {booking.bookingDate}
                    </td>
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <button type="button" onClick={() => deleteBooking(booking.id)} className="text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-1 dark:bg-red-600 dark:hover:bg-red-800 focus:outline-none dark:focus:ring-red-800">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bookings