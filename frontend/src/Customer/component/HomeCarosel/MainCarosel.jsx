import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroseldata } from './MainCaroseldata';

const items = MainCaroseldata.map((item, index) => (
    <div key={index} className="carousel-item flex justify-center  h-[90vh] items-start z-[-10]">
        <img
            src={item.image}
            alt={`Carousel item ${index + 1}`}
            className="cursor-pointer w-[95%] h-full z-[-10] object-cover object-top"
        />
    </div>
));

const MainCarosel = () => (
    <AliceCarousel
        className="w-full bg-red-800 z-[-10] h-[80vh]"
        items={items}
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableButtonsControls
        responsive={{
            0: { items: 1 }, 
            720: { items: 1 },
            1024: { items: 1 },
        }}
    />
);

export default MainCarosel;