import React, { useState } from "react";
import Features from "./utils/Features";
import Description from "./utils/Description";
import Infotable from "./utils/Infotable";
import Gallery from "./utils/Gallery";
import Othercategories from "./utils/Othercategories";
import Otherproducts from "./utils/Otherproducts";
import Contactus from "../Contactus";
import Tables from "./utils/Tables";

const Product = () => {
  // Below code is for adding features of the product in description component
  const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4",
    "Feature 5",
    "Feature 6",
    // Add more features as needed
  ];

  // below code is for adding data in the Tables component
  const rowsData = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
  ];

  const defaultImage =
    "https://5.imimg.com/data5/QR/HB/MY-3781527/automatic-pouch-packaging-machines-500x500.jpg";

  const [selectedImage, setSelectedImage] = useState(defaultImage);
  const [showModal, setShowModal] = useState(false);

  const imageOptions = [
    "https://5.imimg.com/data5/QR/HB/MY-3781527/automatic-pouch-packaging-machines-500x500.jpg",
    "https://5.imimg.com/data5/KU/FG/MY-3781527/collar-type-pneumatic-packing-machine-filler-500x500.jpg",
    "https://5.imimg.com/data5/VU/UA/MY-3781527/semi-pneumatic-packing-machine-500x500.png",
    "https://5.imimg.com/data5/VU/UA/MY-3781527/semi-pneumatic-packing-machine-500x500.png",
  ];

  const handleImageChange = (image) => {
    setSelectedImage(image);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="product-box lg:flex py-2 ">
        <div className="img-gallery-box lg:w-1/2 flex justify-center">
          <div className="">
            <div
              className="main-img w-96 h-96 2xl:w-[500px] 2xl:h-[500px] p-2 py-6 cursor-pointer "
              onClick={openModal}
            >
              <img
                src={selectedImage}
                alt=""
                className="w-full h-96 2xl:w-[500px] 2xl:h-[500px]"
              />
            </div>

            <div className="thumbnails flex w-full p-2 pt-16 space-x-3 justify-center 2xl:pt-16">
              {imageOptions.map((image, index) => (
                <div className="thumbnail w-14 h-14 border-2 rounded p-1 cursor-pointer">
                  <img
                    className="h-12"
                    key={index}
                    src={image}
                    alt={`Option ${index + 1}`}
                    onMouseEnter={() => handleImageChange(image)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="product-info-box w-full lg:w-1/2 flex justify-center">
          <div className=" w-full lg:w-11/12 px-2">
            <div className="product-name text-5xl 2xl:text-4xl 2xl:py-4 py-4 font-semibold">
              Automatic Powder Packing Machine
            </div>
            <div className="product-description pb-4 2xl:text-lg"></div>

            <div className="pb-10 pt-4 text-xl">
              We are leading manufacturers, suppliers of high-quality of
              Automatic Powder Packing Machine. Some Description Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Quaerat, quae. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Saepe adipisci
              corrupti porro Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Fuga eos quam rem tempore velit cum repellendus nisi facere
              cupiditate optio voluptas ipsam ullam iusto sunt obcaecati
              expedita enim, quibusdam dolores.
            </div>

            <div className="contact-btn ">
              <button className="rounded text-gray-800 text-2xl font-semibold py-6 px-10 bg-yellow-300 hover:bg-yellow-400">
                Get the best Quote
              </button>
            </div>
            <Features />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div className="max-w-4xl w-full p-4 bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src={selectedImage}
              alt=""
              className="w-full h-auto max-h-[85vh]"
            />
            <button
              className="absolute top-2 right-2 text-white font-bold text-xl cursor-pointer bg-transparent border-none"
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal from closing when clicking on the button
                closeModal();
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Description
        title="I am Title prop"
        description="I am description prop and i can be very longggg"
        features={features}
      />

      {/* <Infotable
      title="Props Machine Specs "
       /> */}
      <Tables rowsData={rowsData} />
      <Gallery />

      <div className="contact-btn px-10">
        <button className="rounded text-gray-800 text-2xl font-semibold py-6 px-10 bg-yellow-300 hover:bg-yellow-400">
          Get the best Quote
        </button>
      </div>

      <div>


        <h1 className="text-4xl px-4 py-10 underline">Similar Products</h1>
        <div className="p-4 flex flex-wrap">

        <Otherproducts 
      img="https://5.imimg.com/data5/SC/FQ/MY-3781527/mini-pouch-packing-machine-500x500.jpg"
      name="Packing Machine"
      description="This is a good machine please khareed lo"
      route="/categories"
      />
        <Otherproducts 
      img="https://5.imimg.com/data5/SC/FQ/MY-3781527/mini-pouch-packing-machine-500x500.jpg"
      name="Packing Machine"
      description="This is a good machine please khareed lo"
      route="/categories"
      />
        <Otherproducts 
      img="https://5.imimg.com/data5/SC/FQ/MY-3781527/mini-pouch-packing-machine-500x500.jpg"
      name="Packing Machine"
      description="This is a good machine please khareed lo"
      route="/categories"
      />
        <Otherproducts 
      img="https://5.imimg.com/data5/SC/FQ/MY-3781527/mini-pouch-packing-machine-500x500.jpg"
      name="Packing Machine"
      description="This is a good machine please khareed lo"
      route="/categories"
      />

        </div>
      


      </div>

      <div>
      <h1 className="text-4xl  font-semibold p-4 pt-10 underline">Other Categories</h1>
      <div className="p-4 flex flex-wrap">
        
      <Othercategories
      img="https://5.imimg.com/data5/QR/HB/MY-3781527/automatic-pouch-packaging-machines-500x500.jpg"
      name="Snack Packing Machine"
      description="This is a good machine please khareed lo"
      route="/categories"
      />

        



      </div>
    </div>
      <Contactus />
    </>
  );
};

export default Product;
