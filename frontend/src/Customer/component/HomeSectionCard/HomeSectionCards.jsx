import React from 'react'

const HomeSectionCards = () => {
  return (
    <div className='cursor-pointer flex flex-col  items-center bg-white rounded-lg shadow-lg overflow-hidden w-[20vw] mx-3'>
        <div className='h-[40vh] w-[16vw]'>
            <img className='object-cover object-top  w-full  h-full' src="https://i.pinimg.com/474x/7f/95/6f/7f956f373a6f8f1f2dc73c61f89baa57.jpg" alt="" />

        </div>
        <div className='p-4'>
            <h2 className='text-lg font-semibold text-center'>Title</h2>
            <p className='text-gray-600 text-sm text-center'>Description of the card goes here. It can be a brief summary or any relevant information.</p>

        </div>
    </div>
  )
}

export default HomeSectionCards