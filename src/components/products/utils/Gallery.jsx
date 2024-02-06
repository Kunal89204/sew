import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Gallery = ({v1, img1, img2, img3, img4, img5}) => {
    const breakpoints = {
        480: {
          slidesPerView: 2, // 2 slides on phones
        },

        800: {
            slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4, // 5 slides on laptops
        },
        1500 : {
          slidesPerView: 6, // 6 slides on monitors
        },
      };
  return (
    <div className='p-4 bg-gray-50 px-10 my-10'>
      <h1 className='text-4xl font-semibold'>Gallery</h1>


      <Swiper
      
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={breakpoints}
        className="mySwiper py-10"
      >
        <SwiperSlide><div className='bg-gray-100 sm:w-60 sm:h-40 rounded-xl   w-40 h-24   flex justify-center items-center '><video src={v1}></video></div></SwiperSlide>
        <SwiperSlide><div className='bg-gray-100 sm:w-60 sm:h-40 rounded-xl   w-40 h-24   flex justify-center items-center '>{img1}</div></SwiperSlide>
        <SwiperSlide><div className='bg-gray-100 sm:w-60 sm:h-40 rounded-xl   w-40 h-24   flex justify-center items-center '>{img2}</div></SwiperSlide>
        <SwiperSlide><div className='bg-gray-100 sm:w-60 sm:h-40 rounded-xl   w-40 h-24   flex justify-center items-center '>{img3}</div></SwiperSlide>
        <SwiperSlide><div className='bg-gray-100 sm:w-60 sm:h-40 rounded-xl   w-40 h-24   flex justify-center items-center '>{img4}</div></SwiperSlide>
        <SwiperSlide><div className='bg-gray-100 sm:w-60 sm:h-40 rounded-xl   w-40 h-24   flex justify-center items-center '>{img5}</div></SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Gallery
