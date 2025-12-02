import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='bg-cyan-50 w-screen h-screen flex justify-center items-center pb-[10vh]'>
        <div className='flex flex-col gap-12 justify-center items-center'>
          <img src="../../public/404 error with a landscape-rafiki.svg" alt="404" />
          <p className='text-4xl text-cyan-950 font-bold text-shadow-cyan-500'>404  |  Page Not Found </p>
          <button>
            <Link to="/" className='text-white bg-cyan-950 p-4 rounded-full font-semibold hover:text-yellow-500'>Go to Home</Link>  
          </button>
        </div>
    </div>
  )
}

export default NotFound
