import React from 'react';
import { useEffect } from 'react';
import CleaningVid from '../assets/Cleaning.mp4';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'; 
import Footer from '../footer';


const KitchenCleaningTips = () => {
    const [playVideo, setPlayVideo] = React.useState(false);
    const vidRef = React.useRef();


    useEffect(() => {
       
        vidRef.current.play();
    }, []);


  return (
    <>

<div className='bg-gradient-to-b from-transparent to-black flex flex-col w-screen h-screen mt-18 items-center relative overflow-auto '>
    <div>
<div className=" h-3/4 w-screen relative"> 
<video
  ref={vidRef}
  src={CleaningVid}
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
      <BsFillPlayFill color="#fff" fontSize={30} />
    ) : (
      <BsPauseFill color="#fff" fontSize={30} />
    )}
  </div>
  </div>
  </div>


    
      <h1 className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold '>Kitchen Cleaning Tips for a Spotless Space</h1>
      <p className='item-center justify-center mt-10 text-xl font-bold border-b-2 border-double m-5 text-center'>Keep your kitchen clean and hygienic with these effective cleaning tips and tricks.</p>
      </div>
      <h2>Cleaning Countertops</h2>
      <p>1. Use a mixture of warm water and dish soap to clean kitchen countertops.</p>
      <p>2. For stubborn stains, apply a paste of baking soda and water, then scrub gently.</p>
      <p>3. Disinfect countertops regularly, especially after handling raw meat or poultry.</p>
      
      <h2>Cleaning Appliances</h2>
      <p>1. Wipe down the exterior of appliances with a damp cloth and mild detergent.</p>
      <p>2. Clean the inside of the microwave by heating a bowl of water mixed with lemon juice or vinegar for a few minutes, then wipe away the loosened grime.</p>
      <p>3. Run a cleaning cycle with baking soda and vinegar in the dishwasher to remove food residue and odors.</p>

      <h2>Cleaning Cooking Utensils</h2>
      <p>1. Wash cooking utensils, pots, and pans immediately after use to prevent food from drying and sticking.</p>
      <p>2. Soak stubborn food residue in warm, soapy water before scrubbing.</p>
      <p>3. Use a non-abrasive sponge or scrubber to avoid scratching cooking surfaces.</p>
      
      
      <h2>Organizing and Decluttering</h2>
      <p>1. Regularly declutter cabinets and drawers to maintain an organized kitchen space.</p>
      <p>2. Use storage containers and labels to keep pantry items neatly organized.</p>
      <p>3. Clean out the refrigerator and freezer regularly, disposing of expired food items and wiping down shelves and drawers.</p>
    </div>
    <div>
     
    </div>
    </>
  );
}

export default KitchenCleaningTips;
