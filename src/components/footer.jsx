import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import FooterOverlay from './footerOverlay';
import Newsletter from './newsletter';
import spoon from '../assets/spoon.png'
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="relative bg-black py-16 md:py-24">
    <FooterOverlay />
    <Newsletter />

    <div className="flex  justify-center md:justify-between px-4 md:px-0 max-w-screen-lg mx-auto mt-10 md:mt-0">
      {/* Contact Section */}
      <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
      <ul className="flex justify-center md:justify-start">
    <li className="mr-4"><Link to="/about">About</Link></li>
    <li className="mr-4"><Link to="/Contact">Contact</Link></li>
    <li><Link to="/faq">FAQ</Link></li>
  </ul>
      </div>

      {/* Logo Section */}
      <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
       
        <p className="text-gray mb-2 md:mb-4">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        </div>
       

     

    {/* Copyright Section */}
    <div className="flex text-center mt-1 px-5">
      <p className="text-gray">&copy; 2024 The Melting Pot. All Rights reserved.</p>
    </div>

    
  </div>
  <div className='mt-2'>
        <img src={spoon} className="mx-auto " />
        <div className="flex justify-center mt-1">
          <FiFacebook className="text-white text-2xl md:text-3xl mr-4 hover:text-golden cursor-pointer" />
          <FiTwitter className="text-white text-2xl md:text-3xl mr-4 hover:text-golden cursor-pointer" />
          <FiInstagram className="text-white text-2xl md:text-3xl hover:text-golden cursor-pointer" />
        </div>
      </div>

  </div>
);

export default Footer;
