import React from "react";
import Rows from "./Rows";

const Infotable = ({title, rowsData}) => {
  return (
    <div className="">
      {/* Below is the table */}
      <h1 className="p-8 px-8 text-4xl font-semibold">{title}</h1>
      <div class="relative overflow-x-auto lg:w-1/2 p-4 px-10">
        <table class="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-300 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                class="px-6 py-3  text-gray-700 text-base 2xl:text-lg"
              >
                Product Details
              </th>

              <th scope="col" class="px-6 py-3  text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
          {rowsData.map((rowData, index) => (
          <Rows key={index} rowData={rowData} />
        ))}
          </tbody>
        </table>
      </div>

      {/* above is the table */}
    </div>
  );
};

export default Infotable;
