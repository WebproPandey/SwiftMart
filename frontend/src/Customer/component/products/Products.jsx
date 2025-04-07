import React from 'react'
import { filters, singleFilter } from './filterProducts';
import FilterProduct from './FilterProduct'

const Products = () => {
  return (
    <div className='flex w-full relative'>
      <FilterProduct/>
    </div>
  )
}

export default Products