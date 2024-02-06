import React from "react";

const Infotable = ({title}) => {
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
            <tr class="bg-white dark:bg-gray-200">
              <th
                scope="row"
                class="px-6 py-4 font-medium  whitespace-nowrap text-black 2xl:text-base"
              >
                Sealing Type
              </th>

              <td class="px-6 py-4 text-black 2xl:text-base">4 Side</td>
            </tr>
            <tr class="bg-white dark:bg-gray-200">
              <th
                scope="row"
                class="px-6 py-4 font-medium  whitespace-nowrap text-black 2xl:text-base"
              >
                Material
              </th>

              <td class="px-6 py-4 text-black 2xl:text-base">
                Stainless Steel
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-200">
              <th
                scope="row"
                class="px-6 py-4 font-medium  whitespace-nowrap text-black 2xl:text-base"
              >
                Sealing Type
              </th>

              <td class="px-6 py-4 text-black 2xl:text-base">4 Side</td>
            </tr>

            <tr class="bg-white dark:bg-gray-200">
              <th
                scope="row"
                class="px-6 py-4 font-medium  whitespace-nowrap text-black 2xl:text-base"
              >
                Surface Finish
              </th>

              <td class="px-6 py-4 text-black 2xl:text-base">Polished</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* above is the table */}
    </div>
  );
};

export default Infotable;
