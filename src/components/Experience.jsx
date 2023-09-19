import React from 'react'
import { skills } from './ProjectItems'

const Experience = () => {
  return (
    <div className='bg-gradient-to-b from-black to-gray-500 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
          <p className='py-6'>These are languages and frameworks i have worked with before</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-12 sm:px-0 w-full text-center'>
          {skills.map((item) => (
            <div key={item.id} className='shadow-md shadow-gray-600 py-2 hover:scale-105 duration-500 rounded-lg'>
              <img className='w-20 mx-auto rounded-md' src={item.image} alt={item.title} />
             <p className='mt-4 '>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
