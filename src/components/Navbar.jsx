import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between items-center md:px-20 px-5 bg-cyan-950 text-white'>
            <div className='md:w-20 md:h-20 w-15 h-15'>
              {/* <img src="../../public/recipefinderlogo.png" className='w-full h-full object-cover' alt="logo" /> */}
              <img src="/recipefinderlogo.png" className='w-full h-full object-cover' alt="logo" />
            </div>
            <div className='flex items-center md:gap-16 gap-5 md:text-xl text-sm text-white'>
              <Link to="/" className='hover:text-yellow-500 hover:font-semibold'>Home</Link>
              <Link to="/categories" className='hover:text-yellow-500 hover:font-semibold'>Categories</Link>
              <Link to="/fav" className='hover:text-yellow-500 hover:font-semibold'>Favourites</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
