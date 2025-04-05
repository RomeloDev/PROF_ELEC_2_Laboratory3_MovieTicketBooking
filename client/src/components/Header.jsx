import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='flex justify-center items-center md:sm:gap-[50rem] w-full h-[4rem] bg-gray-900 text-white sticky top-0 z-10'>
            <div>
                <a className='font-bold text-[1.7rem]'>MovieFlix</a>
            </div>
            <ul className='flex justify-center item-center gap-5 font-semibold flex-wrap'>
                <li><Link to='/' className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Movies</Link></li>
                <li><Link to='/bookings' className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>My Bookings</Link></li>
            </ul>
        </nav>
    )
}

export default Header