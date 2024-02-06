import React from "react";
import {Link} from 'react-router-dom'

const Othercategories = ({ img, name, description, route }) => {
  return (
    <div className="product-card w-1/2 lg:w-3/12 h-1/10 p-2 bg-gray-50">
      <div className="">
        <img src={img} alt="" className="  w-full" />
      </div>
      <div className="title text-2xl py-2">{name}</div>
      <div className="desc text-sm">{description}</div>

      <div className="my-2">
        <button className=" py-1 px-4 rounded bg-blue-400">
          <Link to={route}>Visit</Link>
        </button>
      </div>
    </div>
  );
};

export default Othercategories;
