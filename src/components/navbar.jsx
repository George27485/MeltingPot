import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../assets/Subject.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  
  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-black text-gray-300 border-2 border-black shadow-5xl z-10'>
        <div className='flex items-center'>
        <img src={logo} className='flex justify-start w-10 h-auto mr-4' />
      <ul className="hidden md:flex space-x-6 text-white">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Recipes</Link></li>
        <li><Link to="/kitchenTips">Kitchen Tips</Link></li>
      </ul>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex items-center space-x-6 text-white">
          <Link to="/FAQ" className='border-r pr-5'>FAQ</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        
        <div className="md:hidden">
          <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} className='cursor-pointer' />
          {toggleMenu && (
            <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col justify-center items-center">
              <MdOutlineRestaurantMenu fontSize={27} className="text-white absolute top-8 right-8 cursor-pointer" onClick={() => setToggleMenu(false)} />
              <ul className="flex flex-col items-center space-y-6 text-white">
                <li><Link to="/" onClick={() => setToggleMenu(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setToggleMenu(false)}>About</Link></li>
                <li><Link to="/menu" onClick={() => setToggleMenu(false)}>Recipes</Link></li>
                <li><Link to="/kitchenTips" onClick={() => setToggleMenu(false)}>Kitchen Tips</Link></li>
                <li><Link to="/Contact" onClick={() => setToggleMenu(false)}>Contact</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
