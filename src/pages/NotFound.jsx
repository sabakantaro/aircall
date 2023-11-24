import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigation('/');
    }, 3000);
  }
  , []);

  return (
    <div className='container relative'>
      <section className='flex flex-col items-center justify-center w-full px-5 py-5 h-[526px] overflow-y-scroll'>
          <p className="text-6xl font-bold tracking-wider text-gray-300">404</p>
          <p className="text-2xl font-bold tracking-wider text-gray-500 mt-4">Not Found</p>
          <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">Sorry, the page you are looking for could not be found.</p>
          <Link to="/" className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150" title="Return Home">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"></path>
            </svg>
            <span>Return Home</span>
          </Link>
      </section>
    </div>
  )
}

export default NotFound
