// Description.jsx
import React from "react";

const Description = ({ title, description, features }) => {
  return (
    <div className="p-4 bg-gray-100 px-10">
      <h1 className="text-2xl lg:text-4xl lg:py-4 2xl:text-4xl 2xl:py-6 font-semibold">
        {title}
      </h1>
      <p className="xl:text-lg">{description}</p>
      <ul className="list-disc text-lg py-4 px-4">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default Description;
