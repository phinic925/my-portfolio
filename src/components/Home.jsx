import React from 'react'
import { Link } from 'react-router-dom';
import {FiArrowRight} from 'react-icons/fi'
const Home = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
         <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>I have 2 years of experience building and designing software. Currently, I love to work on web application using 
            technologies like react, javascript, Tailwind, ruby and ruby on rails.
          </p>
          <div className='text-white w-fit px-6 py-3'>
            <a href='/cv1.pdf' download='true' target='_blank' rel='noreferrer'>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Download resume
              <span className='group-hover:rotate-90 duration-300'>
                <FiArrowRight size={25}/>
              </span>
            </button>
            </a>
          </div>
         </div>
         <div>
          <img  className='roundend-2xl mx-auto w-2/3 md:w-full'src='https://images.unsplash.com/photo-1671726203454-5d7a5370a9f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'></img>
         </div>
        </div>

    </div>
  )
}

export default Home