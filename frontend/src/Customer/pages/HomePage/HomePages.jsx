import React from 'react'
import MainCarosel from '../../component/HomeCarosel/MainCarosel'
import Sectioncarosel from '../../component/HomeSectionCarosel/Sectioncarosel'
import { mens_kurta } from '../../../Data/mens_kurta'
import { sareePage1 } from '../../../Data/Saree'
import { dressPage1 } from '../../../Data/women'
import { mensPantsPage1 } from '../../../Data/men'
import { mensShoesPage1 } from '../../../Data/Shoes'
import { Outlet } from 'react-router'

const HomePages = () => {

  return (
    <div className="relative">
        <MainCarosel/>
        <div className='space-y-10 py-10 px-[2vw] '>
            <Sectioncarosel sectionName={"Men's Kurta"} data={mens_kurta}/>
            <Sectioncarosel sectionName={"Men's shoes"} data={mensShoesPage1}/>
            <Sectioncarosel sectionName={"Men's Pants"} data={mensPantsPage1}/>
            <Sectioncarosel sectionName={"Women's Saree"} data={sareePage1}/>
            <Sectioncarosel sectionName={"Women's Dress"} data={dressPage1}/>
        </div>
        <Outlet />

    </div>
  )
}

export default HomePages