import React from 'react';
import SubHeading from './subHeader';
import { Link } from 'react-router-dom';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import meal from '../assets/meal.mp4'
import Menu from './menu';

const Header = () => {
    const [playVideo, setPlayVideo] = React.useState(false);
    const vidRef = React.useRef();

    return(
        <div className='flex h-screen'>
  <div className="w-1/2 bg-gradient-to-b from-black to-transparent py-16 px-4 md:px-16" id="home">
    <div className="max-w-4xl mx-auto">
      <SubHeading title="The Melting Pot" webTitle ={true} />
      <h1 className="text-golden font-semibold md:text-6xl mb-8">Indulge in Gourmet Recipes Crafted with Passion</h1>
      
     <Link to="/menu"><button className="bg-white text-black py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200">Explore Menu</button></Link>
    </div>
    <div className="w-80 mx-auto md:hidden">
     
    </div>
  </div>

<div className=" w-1/2 relative"> 
<video
  ref={vidRef}
  src={meal}
  type="video/mp4"
  loop
  controls={false}
  muted
  className="w-full h-full object-cover" 
/>
<div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center"> 
  <div
    className="w-20 h-20 border border-golden rounded-full flex justify-center items-center cursor-pointer" 
    onClick={() => {
      setPlayVideo(!playVideo);
      if (playVideo) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
    }}
  >
    {playVideo ? (
      <BsPauseFill color="#fff" fontSize={30} />
    ) : (
      <BsFillPlayFill color="#fff" fontSize={30} />
    )}
  </div>
</div>
</div>
</div>
    )
};

export default Header;
