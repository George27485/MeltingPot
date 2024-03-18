import React from 'react';
import Footer from './footer';
import welcome from '../assets/welcome.jpg';

const AboutMain = () => (
  <>
    <div className="bg-gradient-to-b from-transparent to-black flex flex-col items-center text-center overflow-auto">
      <div>
        <img
          src={welcome}
          style={{ height: '75vh' }}
          className='w-auto'
          alt="Welcome to The Melting Pot"
        />
        <h1 className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold'>The Melting Pot</h1>
      </div>
      <p className="flex justify-center text-lg text-center mb-20 p-10 font-bold border-b-2 border-double">
        Welcome to The Melting Pot! At The Melting Pot, we're passionate about bringing people together through the joy of cooking and sharing delicious recipes. Whether you're a seasoned chef or a beginner in the kitchen, our platform is designed to inspire and empower you to explore the culinary world and create memorable meals.
      </p>
      <h2 className="text-xl text-center font-semibold mb-4">Our Mission</h2>
      <ul className="text-lg text-center mb-6">
        <li>Inspire Creativity: Explore a diverse collection of recipes from around the globe, ranging from traditional favorites to innovative creations.</li>
        <li>Share Knowledge: Connect with fellow food lovers, share your own insights, and learn from others to enhance your cooking skills.</li>
        <li>Celebrate Diversity: Explore new flavors, ingredients, and cooking techniques from different cuisines and culinary traditions.</li>
        <li>Promote Sustainability: Discover eco-friendly recipes, tips for reducing food waste, and ways to make conscious choices in the kitchen.</li>
      </ul>
      <p className="text-lg text-center mb-6">
        Whether you're looking to discover new recipes, share your culinary creations, or connect with fellow food enthusiasts, we invite you to join our vibrant community at The Melting Pot. Let's embark on a culinary adventure together and make every meal a memorable experience!
      </p>
    </div>
    <Footer/>
  </>
);

export default AboutMain;
