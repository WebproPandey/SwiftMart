import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCards from "../HomeSectionCard/HomeSectionCards";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Sectioncarosel = ({data , sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  
  
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const items = data.slice(0,10).map((item) =>   <HomeSectionCards  product={item} />)

  const slidePrev = () => {
    if (carouselRef.current) {
      const newIndex = Math.max(activeIndex - 1, 0);
      carouselRef.current.slideTo(newIndex);
      setActiveIndex(newIndex);
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      const newIndex = Math.min(activeIndex + 1, items.length - 1);
      carouselRef.current.slideTo(newIndex);
      setActiveIndex(newIndex);
    }
  };

  const syncActiveIndex = (event) => {
    setActiveIndex(event.item);
  };

  return (
    <div className="relative px-4 lg:px-8 border ">
      <h2 className="text-[2vw] font-semibold capitalize">{sectionName}</h2>
      <div className="relative p-5 flex justify-center items-center">
        <AliceCarousel
          ref={carouselRef}
          className="w-full"
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
        />
        
        {activeIndex > 0 && (
          <button
            onClick={slidePrev}
            className="absolute top-1/2 -left-5 -translate-y-1/2 bg-white rounded-md px-2 py-5 shadow-lg hover:bg-gray-200 active:bg-gray-300 transition duration-200"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
        )}

        <button
          onClick={slideNext}
          className="absolute top-1/2 -right-5 -translate-y-1/2 bg-white rounded-md px-2 py-5 shadow-lg hover:bg-gray-200 active:bg-gray-300 transition duration-200"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Sectioncarosel;
