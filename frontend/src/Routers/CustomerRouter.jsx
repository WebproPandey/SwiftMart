import React from 'react'
import { Route, Routes } from 'react-router'
import HomePages from '../Customer/pages/HomePage/HomePages'
import Cart from '../Customer/component/Cartsection/Cart'
import Navigation from '../Customer/component/Navigation/Navigation'
import Fotter from '../Customer/Fotter/Fotter'
import Products from '../Customer/component/products/Products'
import ProductDetails from '../Customer/component/productDetails/ProductDetails'
import CheckOutProduct from '../Customer/component/Checkout/CheckOutProduct'
import OrderTracking from '../Customer/component/order/OrderTracking'
import OrderDetails from '../Customer/component/order/OrderDetails'


const CustomerRouter = () => {


  return (
    <div>
        <div>
         <Navigation/>
        </div>
        <Routes>
            <Route path='/' element={<HomePages/>} ></Route>
            <Route path='/cart' element={<Cart/>} ></Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Products/>} ></Route>
            <Route path='/:product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<CheckOutProduct/>}></Route>
            <Route path='/account/order' element={<OrderTracking/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>



        </Routes>
        <div>
          <Fotter/>
        </div>
    </div>
  )
}

export default CustomerRouter