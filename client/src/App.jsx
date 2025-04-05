import { React, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Bookings, Movies } from './elements'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='*' element={<h1 className="text-center text-4xl font-bold mt-5">404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
