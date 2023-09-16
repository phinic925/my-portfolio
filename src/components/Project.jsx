import React from 'react'
import { projects } from './ProjectItems'

const Project = () => {
  return (
    <div className='bg-gradient-to-b from-black to-gray-500 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-6'>Check out some of my work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map((item) => (
            <div key={item.id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img className='rounded-md duration-200 hover:scale-105' src={item.image} alt={item.title} />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-4 m-4 duration-200 hover:scale-105 text-white'>Demo</button>
                <button className='w-1/2 px-6 py-4 m-4 duration-200 hover:scale-105 text-white'>Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
