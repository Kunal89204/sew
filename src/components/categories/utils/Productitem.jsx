import React from 'react'


const Productitem = () => {
  return (
    <div className='flex'>
      <div className=" lg:w-1/2 ">
            <h1 className="text-3xl p-4">Automatic Pouch Packing Machines</h1>
            <div className="img border flex justify-center">
              <img
                src="https://5.imimg.com/data5/FV/AQ/YI/SELLER-3781527/pouch-packaging-machines-500x500.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-center py-4">
              <button className="py-2 m-2 px-8 bg-yellow-300 text-xl">
                Get Best Quote
              </button>
            </div>
          </div>

          <div className="border lg:w-1/2">
            <h1 className="px-10 py-2 text-3xl">Heading</h1>

            <div class="relative overflow-x-auto lg:w-full p-4 px-10">
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
                      Sealing Type
                    </th>

                    <td class="px-6 py-4 text-black 2xl:text-base">4 Side</td>
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

            <p className="px-10 py-2 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius
              exercitationem error cupiditate, delectus accusantium incidunt
              voluptatum mollitia. Amet sequi illo nostrum dignissimos ullam
              earum laborum ad cupiditate fugit? Repellat.
            </p>

            <div className="py-2 px-8 ">
              <button className="text-xl bg-yellow-300 py-2 px-2">
                Yes! I am Interested
              </button>
            </div>
          </div>
    </div>
  )
}

export default Productitem
