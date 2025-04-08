import React from 'react'
import Navigation from './Customer/component/Navigation/Navigation'
import HomePages from './Customer/pages/HomePage/HomePages'
import Fotter from './Customer/Fotter/Fotter'
import Products from './Customer/component/products/Products'
import ProductDetails from './Customer/component/productDetails/ProductDetails'
import Cart from './Customer/component/Cartsection/Cart'
import CheckOutProduct from './Customer/component/Checkout/CheckOutProduct'
import OrderTracking from './Customer/component/order/OrderTracking'

const App = () => {
  return (
    <div className='relative'>
      <Navigation/>
      <div>
        {/* <HomePages/> */}
        {/* <Products/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <CheckOutProduct/> */}
       <OrderTracking/>
      </div>
      <Fotter/>
      
    </div>
  )
}

export default App