import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroseldata } from './MainCaroseldata';

const items = MainCaroseldata.map((item, index) => (
    <div key={index} className="carousel-item  flex justify-center  items-center">
        <img
            src={item.image}
            alt={`Carousel item ${index + 1}`}
            className="cursor-pointer w-[90%] "
        />
    </div>
));

const MainCarosel = () => (
    <AliceCarousel className="w-full h-[80vh] bg-red-800"
        items={items}
        autoPlay
        autoPlayInterval={3000}
        infinite
        disableButtonsControls
    />
);

export default MainCarosel;