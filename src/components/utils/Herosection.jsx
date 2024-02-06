import React from 'react';
import './Hero.css'; 

const Hero = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center relative'>
      <div className="main-image">
        <img
          src="https://www.marionbody.com/hs-fs/hubfs/2019/home-header-text.png"
          alt="Hero Image"
          className="max-w-full h-auto"
        />
      </div>
      <div className="slideshow">
        <img
          src="https://www.marionbody.com/hs-fs/hubfs/2019/header-trucks-custom-cabs-v2.png?width=1078&height=547&name=header-trucks-custom-cabs-v2.png"
          alt="Slide 1"
          className="slide"
        />
        <img
          src="https://www.marionbody.com/hs-fs/hubfs/2019/header-trucks-fe-v2.png?width=1078&height=547&name=header-trucks-fe-v2.png"
          alt="Slide 2"
          className="slide"
        />
        <img
          src="https://www.marionbody.com/hs-fs/hubfs/2019/header-trucks-commercial-v2.png?width=1078&height=547&name=header-trucks-commercial-v2.png"
          alt="Slide 3"
          className="slide"
        />
        <img
          src="https://www.marionbody.com/hs-fs/hubfs/2019/header-trucks-defense-v2.png?width=1078&height=547&name=header-trucks-defense-v2.png"
          alt="Slide 4"
          className="slide"
        />
        <img
          src="https://www.marionbody.com/hs-fs/hubfs/2019/header-trucks-cev-v2.png?width=1078&height=547&name=header-trucks-cev-v2.png"
          alt="Slide 5"
          className="slide"
        />
      </div>
      <div className="text-center px-56">
        <h1 className="text-4xl font-bold mb-8">YOU ARE IN THE DRIVER’S SEAT</h1>
        <p className="text-lg text-gray-400 font-medium">
          Your exact specifications and expectations inspire us to craft and engineer the right custom vehicle for your needs. Our focus is on helping you do your job efficiently and effectively, whether that’s going to battle, fighting fires, moving furniture, or fixing wires. That’s Customized to Drive Greatness.
        </p>
        <button className="bg-yellow-400 text-gray-800 text-2xl font-bold py-4 px-8 mt-4">
          LEARN WHY 
        </button>
      </div>
    </div>
  );
};

export default Hero;
