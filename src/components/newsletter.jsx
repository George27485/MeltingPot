import React from 'react';
import SubHeading from './subHeader';
const Newsletter = () => (
  <div className=" justify-center p-8 border border-golden bg-black">
    <div className="text-center">
      <SubHeading title="Newsletter" centerImage={true}/>
      <h1 className="font-cormorant text-3xl text-golden">Subscribe To Our Newsletter</h1>
      <p className="text-white">And never miss latest Updates!</p>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center mt-6">
      <input type="email" placeholder="Enter your email address" className="w-full md:w-96 border border-golden rounded-md text-white py-2 px-4 mb-4 md:mr-4 md:mb-0" />
      <button type="button" className="bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-gray-200">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
