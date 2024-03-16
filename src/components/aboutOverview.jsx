import React from 'react';
import spoon from '../assets/spoon.png';
import knife from '../assets/knife.png';
 

const AboutUsOverview = () => (
  <div className="relative bg-gradient-to-b from-transparent to-black">
  
   
    <div className="flex flex-col md:flex-row justify-between items-center px-4 py-8 md:py-16 max-w-screen-lg mx-auto">
     
      <div className="md:w-1/2 flex flex-col items-end text-right pr-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome</h1>
        <img src={spoon}/>
        <p className="mb-4 text-gray-500">Welcome to The Melting Pot! At The Melting Pot, we're passionate about bringing people together through the joy of cooking and sharing delicious recipes. Whether you're a seasoned chef or a beginner in the kitchen, our platform is designed to inspire and empower you to explore the culinary world and create memorable meals.</p>
        <button type="button" className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800">Know More</button>
      </div>

      {/* Knife Image */}
      <div className="hidden md:block w-1/6">
        <img src={knife} alt="about_knife" className="w-full" />
      </div>

      {/* History Section */}
      <div className="md:w-1/2 flex flex-col items-start text-left pl-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our History</h1>
        <img src={spoon}/>
        <p className="mb-4 text-gray-500">At The Melting Pot, our journey began with a simple passion for cooking and a desire to create a space where food enthusiasts could come together to share their love for culinary delights. Our recipe sharing platform has evolved into a vibrant community that celebrates the joy of cooking and the art of sharing delicious recipes.</p>
        
      </div>
    </div>
  </div>
);

export default AboutUsOverview;
