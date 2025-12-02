import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between items-center px-20 bg-cyan-950 text-white'>
            <div className='w-20 h-20'>
              {/* <img src="../../public/recipefinderlogo.png" className='w-full h-full object-cover' alt="logo" /> */}
              <img src="/recipefinderlogo.png" className='w-full h-full object-cover' alt="logo" />
            </div>
            <div className='flex items-center gap-16 text-xl text-white'>
              <Link to="/" className='hover:text-yellow-500 hover:font-semibold'>Home</Link>
              <Link to="/categories" className='hover:text-yellow-500 hover:font-semibold'>Categories</Link>
              <Link to="/fav" className='hover:text-yellow-500 hover:font-semibold'>Favourites</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
