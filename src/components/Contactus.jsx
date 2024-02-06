import React from 'react';
import Header from '../assets/ContactUsHeader.png'


export default function Contactus() {
  return (
    <>

    <div className='bg-gray-800 hadow-md h-screen'>
    <div className='absolute'><img src={Header} alt="" className='' /></div>




      <div className='bg-black p-4 flex justify-center'>
        <div className='text-gray-900 text-4xl relative top-36'>Contact Us</div>
      </div>
      
      <div className='bg-gray-900 text-gray-100 p-8 relative w-fit top-0 left-1/2 -translate-x-1/2 translate-y-1/3'>
        <div className='max-w-4xl mx-auto flex'>
          <div className='w-2/3'>
            <form className='bg-gray-800 shadow-md rounded px-8 py-8 '>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-bold mb-2' htmlFor='name'>
                    Name
                  </label>
                  <input
                    className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='name'
                    type='text'
                    placeholder='Your Name'
                  />
                </div>
                <div>
                  <label className='block text-sm font-bold mb-2' htmlFor='phone'>
                    Phone Number
                  </label>
                  <input
                    className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='phone'
                    type='tel'
                    placeholder='Your Phone Number'
                  />
                </div>
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='email'>
                  Email
                </label>
                <input
                  className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='email'
                  type='email'
                  placeholder='Your Email'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='message'>
                  Message
                </label>
                <textarea
                  className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='message'
                  placeholder='Your Message'
                ></textarea>
              </div>
              <div className='flex items-center justify-between'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='button'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className='w-1/3 pl-8'>
            <div className='bg-gray-800 rounded p-6'>
              <h2 className='text-xl font-bold mb-4'>Contact Information</h2>
              <p className='mb-2'>123 Main Street</p>
              <p className='mb-2'>City, Country</p>
              <p className='mb-2'>Email: example@example.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}