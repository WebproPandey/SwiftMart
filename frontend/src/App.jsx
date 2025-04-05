import React from 'react'
import Navigation from './Customer/component/Navigation/Navigation'
import HomePages from './Customer/pages/HomePage/HomePages'
import Fotter from './Customer/Fotter/Fotter'
import Products from './Customer/component/products/Products'

const App = () => {
  return (
    <div className='relative'>
      <Navigation/>
      <div>
        {/* <HomePages/> */}
        <Products/>
      </div>
      <Fotter/>
      
    </div>
  )
}

export default App