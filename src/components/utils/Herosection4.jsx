import React from "react";
import "./Hero4.css";

function heroSection4() {
  return (
    <>
      <div className="section-latest-news mx-auto relative  mt-96 ">
        <div className="container flex justify-between items-start mx-auto ">
          {/* Left Half */}
          <div className="left-half flex-shrink-0 mt-5 mr-32">
            <div className="title-color animate">
              <p>Latest News</p>
            </div>
            <a
              href="https://www.marionbody.com/news/15kcustomcab"
              className="block"
            >
              <div className="">
                <h4 className="">
                  Marion Body Works Celebrates Their 15,000th Custom Cab for
                  Spartan Motors
                </h4>
                <p className=" ">
                  Marion, Wis - Marion Body Works has reached yet another
                  milestone in the custom cab industry. They recently celebrated
                  the completion of their 15,000th cab made for Spartan motors.
                  <span>...</span>
                </p>
              </div>
            </a>
          </div>
          {/* Right Half */}
          <div className="right-half flex-1 mr-32">
            <div
              className="image bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://www.marionbody.com/hubfs/MBW%2015000%20cab%5B58%5D.jpg')",
              }}
            >
              <img
                src="https://www.marionbody.com/hubfs/MBW%2015000%20cab%5B58%5D.jpg"
                alt="Marion Body Works Celebrates Their 15,000th Custom Cab for Spartan Motors"
                className="hidden"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-40 bg-gray-400 mt-96">
        <h2 className="text-2xl font-bold mb-4">STAY CONNECTED WITH MARION.</h2>
        <p className="text-lg mb-4">
          Elevate your game by subscribing. We'll take care of the rest!
        </p>
        <div className="w-64">
          <input
            type="text"
            placeholder="your email address*"
            className="w-full py-2 px-4 border border-gray-300  focus:outline-none focus:ring focus:ring-blue-500"
          />
          <svg
            className="absolute right-0 w-6 h-6 text-gray-400 top-1/2 transform -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default heroSection4;
