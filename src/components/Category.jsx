import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <div className="text-3xl md:text-4xl lg:text-5xl lg:w-3/4 lg:py-10 text-gray-600 font-semibold p-4">
        <span className="text-black">Explore.</span> Your destination for
        acquiring top-notch machinery tailored to your needs.
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="p-2"
        breakpoints={{
            640: {
                slidesPerView: 4
            },

            750: {
                slidesPerView: 5
            },

            1150: {
                slidesPerView: 6
            }


        }}
      >
        <SwiperSlide>
          <div className="h-38 w-28  p-2 shadow-md rounded-lg">
            <div>
              <Link to="/machine">
                <img
                  src="https://5.imimg.com/data5/MJ/YE/MY-3781527/pulplizer-15-inch-machine-250x250.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="truncate">Machine packing machine</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-38 w-28  p-2 shadow-md rounded-lg">
            <div>
              <Link to="/machine">
                <img
                  src="https://5.imimg.com/data5/MJ/YE/MY-3781527/pulplizer-15-inch-machine-250x250.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="truncate">Machine packing machine</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-38 w-28  p-2 shadow-md rounded-lg">
            <div>
              <Link to="/machine">
                <img
                  src="https://5.imimg.com/data5/MJ/YE/MY-3781527/pulplizer-15-inch-machine-250x250.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="truncate">Machine packing machine</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-38 w-28  p-2 shadow-md rounded-lg">
            <div>
              <Link to="/machine">
                <img
                  src="https://5.imimg.com/data5/MJ/YE/MY-3781527/pulplizer-15-inch-machine-250x250.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="truncate">Machine packing machine</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-38 w-28  p-2 shadow-md rounded-lg">
            <div>
              <Link to="/machine">
                <img
                  src="https://5.imimg.com/data5/MJ/YE/MY-3781527/pulplizer-15-inch-machine-250x250.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="truncate">Machine packing machine</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-38 w-28  p-2 shadow-md rounded-lg">
            <div>
              <Link to="/machine">
                <img
                  src="https://5.imimg.com/data5/MJ/YE/MY-3781527/pulplizer-15-inch-machine-250x250.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="truncate">Machine packing machine</div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="text-2xl md:text-3xl lg:text-4xl lg:py-10 text-gray-600 font-semibold p-4">
        Discover <span className="text-black">Our Machinery</span>. Explore the
        Options
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="p-2"
        breakpoints={{
            640:{
                slidesPerView: 2
            },

            750: {
                slidesPerView: 3
            },

            1120: {
                slidesPerView: 4
            },

            1300: {
                slidesPerView: 5
            }

        }}
      >
        <SwiperSlide className="flex justify-center">
          <div className="border w-64 h-60">I am a div</div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="border w-64 h-60">I am a div</div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="border w-64 h-60">I am a div</div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="border w-64 h-60">I am a div</div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="border w-64 h-60">I am a div</div>
        </SwiperSlide>
      </Swiper>

      <div className="text-2xl md:text-3xl lg:text-4xl lg:py-10 p-4 text-gray-600 font-semibold">
        <span className="text-black">The Machinery</span> Store Distinction.
        More Reasons to Choose Us.
      </div>


      <Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="p-2 "
      breakpoints={{
        640:{
            slidesPerView: 2
        },

        750: {
            slidesPerView: 3
        },

        1120: {
            slidesPerView: 4
        },

        1300: {
            slidesPerView: 5
        }
        
    }}
    >
      <SwiperSlide className="flex justify-center"><div className="border w-72 h-48 rounded-xl">I am a div</div></SwiperSlide>
      <SwiperSlide className="flex justify-center"><div className="border w-72 h-48 rounded-xl">I am a div</div></SwiperSlide>
      <SwiperSlide className="flex justify-center"><div className="border w-72 h-48 rounded-xl">I am a div</div></SwiperSlide>
      <SwiperSlide className="flex justify-center"><div className="border w-72 h-48 rounded-xl">I am a div</div></SwiperSlide>
      <SwiperSlide className="flex justify-center"><div className="border w-72 h-48 rounded-xl">I am a div</div></SwiperSlide>
     
   
      
    </Swiper>


    </div>
  );
};

export default Category;
