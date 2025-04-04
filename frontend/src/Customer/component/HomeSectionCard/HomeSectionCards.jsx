import React from 'react'

const HomeSectionCards = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col  items-center bg-white rounded-lg shadow-lg overflow-hidden   md:w-[25vw] lg:w-[20vw] mx-3'>
        <div className='md:h-[30vh] lg:h-[40vh] w-[18vw] lg:w-[16vw]'>
            <img className='object-cover object-top  w-full  h-full' 
            src={product.imageUrl || product.image} alt="" />

        </div>
        <div className='p-4'>
            <h2 className='text-lg font-semibold text-center'>{product.brand}</h2>
            <p className='text-gray-600 text-sm text-center'>{product.title}</p>
        </div>
    </div>
  )
}

export default HomeSectionCards