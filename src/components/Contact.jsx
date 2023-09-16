import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/670f2169-98a4-4a1d-9afc-42fa8fb008b5" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-white'>Contact</p>
                <p className='text-gray-300 py-4'>Let's connect by leaving a message below</p>
            </div>
            <input className=' p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 ' type="email" placeholder='Email' name='email' />
            <textarea className=' p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 my-8 mx-auto flex items-center rounded-md'>Submit</button>
        </form>
    </div>
  )
}

export default Contact