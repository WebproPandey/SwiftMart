import React from 'react'
import Navigation from './Customer/component/Navigation'
import HomePages from './Customer/pages/HomePage/HomePages'

const App = () => {
  return (
    <div>
      <Navigation/>
      <div>
        <HomePages/>
      </div>
    </div>
  )
}

export default App