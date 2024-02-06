import React, { useState } from 'react';
import './Hero2.css';

const BoxContainer = () => {
  const [lockedIndex, setLockedIndex] = useState(null);

  const handleBoxClick = (index) => {
    setLockedIndex(index);
  };

  return (
    <>
      <div className="container">
        <div
          className={`box ${lockedIndex === 0 ? 'locked' : ''}`}
          onClick={() => handleBoxClick(0)}
        >
          <img src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Image 1" />
        </div>
        <div
          className={`box ${lockedIndex === 1 ? 'locked' : ''}`}
          onClick={() => handleBoxClick(1)}
        >
          <img src="https://media.istockphoto.com/id/1310856881/photo/powerful-white-big-rig-long-haul-industrial-semi-truck-transporting-goods-in-refrigerator.jpg?s=612x612&w=0&k=20&c=pccl5umR3AzaEidbocqGmhx37J8bvmfCLpkTiFJmwCQ=" alt="Image 2" />
        </div>
        <div
          className={`box ${lockedIndex === 2 ? 'locked' : ''}`}
          onClick={() => handleBoxClick(2)}
        >
          <img src="https://ftl-media.imgix.net/blue-truck-homepage-618x340.jpg" alt="Image 3" />
        </div>
        <div
          className={`box ${lockedIndex === 3 ? 'locked' : ''}`}
          onClick={() => handleBoxClick(3)}
        >
          <img src="https://ftl-media.imgix.net/truck/electricnav.png" alt="Image 4" />
        </div>
      </div>
      <div className="text-center px-56 mt-10">
        <h1 className="text-4xl font-bold mb-8">4 KEYS TO MAKING "YOUR TRUCK"</h1>
        <p className="text-lg text-gray-400 font-medium">
          Experience: Over a century of history is in our rear-view mirror, yet our passion still drives us to build truck bodies that reflect our principles of excellence in workmanship and honest craftsmanship.
        </p>
      </div>
    </>
  );
};

export default BoxContainer;
