import React from 'react'
import MainCarosel from '../../component/HomeCarosel/MainCarosel'
import Sectioncarosel from '../../component/HomeSectionCarosel/Sectioncarosel'

const HomePages = () => {
  return (
    <div>
        <MainCarosel/>
        <div className='space-y-10 py-10 px-[2vw] '>
            <Sectioncarosel/>
            <Sectioncarosel/>
            <Sectioncarosel/>
            <Sectioncarosel/>
        </div>
    </div>
  )
}

export default HomePages