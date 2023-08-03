import Image from 'next/image';
import { useState } from 'react';
import Swipe from 'react-easy-swipe';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
const Banner = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="px-10  lg:flex sm:flex-row-reverse justify-between   ">
      <div className="  items-center justify-center  text-center mx-auto mt-10  ">
        <h1 className="sm:text-3xl lg:text-5xl  font-bold text-black mt-2 ">
          ORIGINAL PART ONLY
        </h1>
        <h3 className=" sm:text-2xl lg:text-3xl font-semibold text-black mt-2">
          {' '}
          First, Affordable prices{' '}
        </h3>
        <p className="sm:text-xl lg:text-2xl font-thin text-black mt-2">
          we only carry genuine replacement part
        </p>
      </div>
      <div className="relative sm:mt-5">
        <AiOutlineLeft
          onClick={handlePrevSlide}
          className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
        />
        <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
          <Swipe
            onSwipeLeft={handleNextSlide}
            onSwipeRight={handlePrevSlide}
            className="relative z-10 w-full h-full"
          >
            {images.map((image, index) => {
              if (index === currentSlide) {
                return (
                  <Image
                    key={image.id}
                    src={image}
                    width={700}
                    className="animate-fadeIn"
                    alt="banner"
                  />
                );
              }
            })}
          </Swipe>
        </div>
        <AiOutlineRight
          onClick={handleNextSlide}
          className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
        />

        <div className="relative flex justify-center p-2">
          {images.map((_, index) => {
            return (
              <div
                className={
                  index === currentSlide
                    ? 'h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer'
                    : 'h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer'
                }
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
