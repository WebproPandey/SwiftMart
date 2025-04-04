import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCards from "../HomeSectionCard/HomeSectionCards";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const Sectioncarosel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCards />);
  return (
    <div className="relative px-4 lg:px-8 border border-black">
      <div className="relative p-5 flex justify-center items-center">
        <AliceCarousel
          className="w-full  "
          items={items}
          autoPlay
          autoPlayInterval={3000}
          infinite
          disableButtonsControls
          responsive={responsive}
        />
        <button className="absolute top-1/2 -left-5 -translate-y-1/2 bg-white rounded-md px-2 py-5 shadow-lg hover:bg-gray-200 active:bg-gray-300 transition duration-200">
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button className="absolute top-1/2 -right-5 -translate-y-1/2  bg-white rounded-md px-2 py-5 shadow-lg hover:bg-gray-200 active:bg-gray-300 transition duration-200">
          <ChevronRightIcon className="h-6 w-6  " />
        </button>
      </div>
    </div>
  );
};

export default Sectioncarosel;
