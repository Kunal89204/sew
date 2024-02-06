import React from "react";
import './hero3.css';
const TestimonialImage = () => {
  return (
    <>
    <div className="flex justify-end mr-48 mt-12">
                <img
                    src="https://www.marionbody.com/hs-fs/hubfs/2019/testimonial-quote-curtis.png?width=485&height=379&name=testimonial-quote-curtis.png"
                    alt="Testimonial Image"
                    className="max-w-full h-auto"
                />
            </div>
            <p className="text-left pl-96 mt-10 ml-80">
                "Marion Body is always willing to help Clean <br />
                Harbors with any issues or business requests that <br />
                are presented. Clean Harbors is proud to work with <br />
                Marion Body."
            </p>
      <div className="container">
      
        <div className="content-left">
          <div className="inner">
            <p>
              Free Guide:
              <br />
              <strong>Comprehensive Maintenance Tips and Check Lists</strong>
            </p>
          </div>
        </div>
        <div className="image">
          <img
            src="https://www.marionbody.com/hs-fs/hubfs/Ebook_FE.png?width=1000&height=1000&name=Ebook_FE.png"
            alt="Ebook_FE"
            width="1000"
            height="1000"
            srcSet="https://www.marionbody.com/hs-fs/hubfs/Ebook_FE.png?width=500&height=500&name=Ebook_FE.png 500w, https://www.marionbody.com/hs-fs/hubfs/Ebook_FE.png?width=1000&height=1000&name=Ebook_FE.png 1000w, https://www.marionbody.com/hs-fs/hubfs/Ebook_FE.png?width=1500&height=1500&name=Ebook_FE.png 1500w, https://www.marionbody.com/hs-fs/hubfs/Ebook_FE.png?width=2000&height=2000&name=Ebook_FE.png 2000w, https://www.marionbody.com/hs-fs/hubfs/Ebook_FE.png?width=2500&height=2500&name=Ebook_FE.png 2500w, https://www.marionbody.com/hs-fs/hubfs/Ebook_FE.png?width=3000&height=3000&name=Ebook_FE.png 3000w"
            sizes="(max-width: 1000px) 100vw, 1000px"
          />
        </div>
        <div className="content-right">
          <div className="inner">
            <p>KEEP YOUR TRUCK IN TOP WORKING ORDER.</p>
            <p>
              <a href="/gated-fire-emergency">Download Now</a>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute ">
        <img
          src="https://www.marionbody.com/hs-fs/hubfs/2019/banner-defense-supplier-documents-1.jpg?width=1440&height=338&name=banner-defense-supplier-documents-1.jpg"
          alt="Banner"
        />
        <div className="relative bottom-0 right-1/4 px-60 top-80 ">
          <div className=" pl-4 pr-4 bg-stone-500 bg-cover bg-center border-stone-500 shadow-2xl shadow-black text-white text-center text-2xl font-semibold leading-none py-6 mx-10 text-decoration-none uppercase">
            Defense Supplier Documents
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialImage;
