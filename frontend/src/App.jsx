import React from 'react'
import { Route, Routes } from 'react-router'
import CustomerRouter from './Routers/CustomerRouter'

const App = () => {
  return (
    <div className='relative'>

    
      <Routes>
        <Route path='/*' element={<CustomerRouter/>} ></Route>
      </Routes>

      <div>
     
      </div>
      
    </div>
  )
}

export default App