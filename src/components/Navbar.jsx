import React, { useState } from "react";
import "./utils/slideStyles.css";

function Nav() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    // Nav component
    <div className=" z-50 ">
      <div className="w-[419.76px] h-[410px] left-[-8.09px] top-[-297px] absolute origin-top-left rotate-45 bg-yellow-400" />
      <div className="w-[663.27px] h-[0px] left-[440px] top-[-2px] absolute origin-top-left rotate-[135deg] border-4 border-yellow-400 slide-div"></div>
      <img
        className="w-[70px] h-[66px] left-[30px] top-[45px] absolute"
        src="https://www.marionbody.com/hubfs/2019/logo-marion.png"
      />

      <>
        <input
          type="checkbox"
          id="menu-toggle"
          checked={showSidebar}
          onChange={toggleSidebar}
        />
        <label
          className="hamburger-menu w-[55px] h-[66px] left-[122px] top-[49px] "
          htmlFor="menu-toggle"
        >
          <img src="./hamburger.png" alt="Menu Icon" />
        </label>
        <aside className={`sidebar ${showSidebar ? "open" : ""}`}>
          <nav className="z-50">
            <div className="">Commerical truck bodies</div>
            <div className="">Defense</div>
            <div className="">Fire & Emergency</div>
            <div className="">Custom cabs</div>
            <div className="">Custom Vehicle</div>
            <div className="">About</div>
            <div className="">News</div>
            <div className="">Contact</div>
          </nav>
        </aside>
      </>
    </div>
  );
}

export default Nav;
