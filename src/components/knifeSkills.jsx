import React from 'react';
import { useState, useEffect } from 'react';
import CuttingIntro from '../assets/CuttingIntro.mp4'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'; 


const KnifeSkills = () => {
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
  src={CuttingIntro}
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

    
      <h1 className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold '>Welcome to Your New Knife Mastery Guide!</h1>

      <p className='item-center justify-center mt-10 text-xl font-bold border-b-2 border-double m-5'>Here, you'll discover the secrets to selecting the perfect knives, maintaining them properly, and mastering the art of safe and efficient cutting. Whether you're a novice in the kitchen or a seasoned home cook, these techniques will elevate your culinary skills to new heights.</p>

      </div>
    
<h1 className='flex justify-center mt-5 font-bold'>How to Properly Grip a Knife</h1>
<p>The grip you use when handling a knife is crucial for safety and efficiency. While the cutting hand takes the lead role, the supporting hand plays a vital role in stabilizing the ingredient being cut.</p>

<h1 className='flex justify-center font-bold'>THE HOLD</h1>
<p>Most professional chefs use a grip where the palm chokes up on the handle, with the thumb and index finger gripping the top of the blade. This grip maximizes the use of the knife's weight, blade sharpness, and your arm strength, making cutting easier and more effective.</p>

<h1 className='flex justify-center font-bold '>THE SUPPORTING HAND</h1>
Position your supporting hand in the "bear claw" style, with fingertips curled under and knuckles pressing down on the ingredient. This position stabilizes the ingredient, preventing it from rolling or sliding while cutting. Alternatively, bunch your fingertips together and rest them on top of the ingredient.

While the cutting hand moves forward and back, the supporting hand moves across in even increments, creating consistent slices. However, perfection takes practice, and it's not a strict requirement for home cooks.

<h1 className='flex justify-center font-bold'>TIPS FOR A PROPER GRIP</h1>
<ul>Here are some principles to follow:</ul>

<li>Avoid gripping the knife handle too tightly; relax your hands and wrists and let the blade do the work.</li>
 <li>Position your fingers so they are out of the cutting path, ensuring safety.</li>
<li>Ensure the hand holding the knife grips both the blade and the handle.</li>
 <li>Use a rocking motion when cutting, moving the knife from front to back and up and down.</li>
<li>Maintain the knife at the same height as or slightly below your elbows to utilize the entire upper body's strength.</li>

<h1 className='flex justify-center font-bold' >Mastering the Chop</h1>
Chopping is a home cook's best friend, making tasks like chopping carrots quick and easy. Unlike professional chefs, who meticulously dice ingredients, home cooks can keep it rough as long as the pieces are roughly the same size.

<h1 className='flex justify-center font-bold' >How to Chop Garlic</h1>
To chop garlic, place an unpeeled clove on a cutting board and smash it with the flat side of a chef's knife. Remove the skin, cut off the root end, and slice the clove from root to tip. Pile the slices together and chop them finely.

<h1 className='flex justify-center font-bold' >How to Chop Herbs</h1>
For leafy herbs like parsley, hold them in a bunch over the cutting surface and run a knife through them at a 45-degree angle. Gather the leaves, use the "claw" grip, and chop them using a rocking motion.

<h1 className='flex justify-center font-bold' >How to Chop a Carrot</h1>
Start with clean, peeled carrots and chop them crosswise into equal lengths. Cut each piece lengthwise and then slice across to create half-moon shapes. For a rough chop, cut the half-moons into quarter moons.

<h1 className='flex justify-center font-bold' >Dice with Precision</h1>
<p>Dicing involves turning irregular fruits and vegetables into neat cubes for uniform cooking. Whether it's a large potato or a small carrot, dicing ensures even cooking.</p>

<h1 className='flex justify-center font-bold' >How to Dice an Onion</h1>
<p>Cut an onion in half, leaving the root end intact. Make horizontal cuts from the stem to the root, stopping just before slicing through the root. Then, make downward slices, moving the "claw" grip back as you go.</p>

<h1 className='flex justify-center font-bold' >How to Dice a Tomato</h1>
<p>Quarter a tomato, remove the seeds, and cut it into equal-sized strips. Turn the strips and dice them into cubes. Repeat for desired dice size.</p>

<h1 className='flex justify-center font-bold' >How to Dice a Potato</h1>
<p>Start with a peeled potato and cut it into equal-sized pieces. For larger dice, cut lengthwise and then crosswise. Adjust the size for medium and small dice.</p>

<h1 className='flex justify-center font-bold' >Slice and Cut with Precision</h1>
<p>Slicing ingredients like tomatoes or apples requires careful technique and the right knife. Whether using a chef's knife or a serrated knife, the goal is smooth, even slices.</p>

<h1 className='flex justify-center font-bold' >How to Slice a Tomato</h1>
<p>Core a tomato and slice it into equal-sized pieces using a serrated knife. Use a gentle back-and-forth motion for smooth slices.</p>

<h1 className='flex justify-center font-bold' >How to Slice an Apple</h1>
<p>Cut an apple into wedges by first cutting it in half and then quartering it. Remove the seeds and slice each quarter into wedges. Trim the edges for even slices.</p>

<h1 className='flex justify-center font-bold' >How to Roll Cut a Carrot</h1>
<p>Hold a peeled carrot firmly and cut it diagonally. Roll the carrot and continue cutting diagonally to create irregular wedges.</p>

<h1 className='flex justify-center font-bold' >Mastering Chiffonade and Julienne</h1>
<p>Chiffonade and julienne cuts are perfect for stir-fries, salads, and elegant garnishes. Mastering these cuts adds finesse to your dishes.</p>

<h1 className='flex justify-center font-bold' >How to Chiffonade Basil</h1>
<p>Stack basil leaves and roll them tightly. Slice across the roll to create uniform strands.</p>

<h1 className='flex justify-center font-bold' >How to Julienne Celery</h1>
<p>Trim celery and cut it into two-inch pieces. Slice each piece lengthwise into slender lengths to create julienne strips.</p>

<h1 className='flex justify-center font-bold' >Essential Knife Selection</h1>
<p>Having the right knives makes all the difference in the kitchen. While there are specific knives for different tasks, a few versatile ones can handle most kitchen jobs.</p>

<ul className='flex justify-center font-bold' >The Essentials:</ul>
<li> Chef's Knife: A versatile knife with a broad, tapering blade, perfect for various tasks.</li>
<li>Utility Knife: Small and practical for everyday kitchen tasks like chopping small ingredients.</li>
<li>Serrated Knife: Ideal for slicing bread and cutting through firm-skinned ingredients.</li>

<ul className='flex justify-center font-bold' >Extra Knives:</ul>
<li> Boning or Filleting Knife: Useful for cutting raw meat, poultry, and fish.</li>
<li> Carving Knife: Designed for slicing cooked meats and poultry.</li>
<li>Santoku Knife: A versatile East-West hybrid knife suitable for most prep work.</li>

<h1 className='flex justify-center font-bold' >Sharpening and Storage Tips</h1>
<p>Maintaining sharp knives is essential for efficient and safe cutting. Regular sharpening and proper storage keep your knives in top condition.</p>

<h1 className='flex justify-center font-bold' >How to Sharpen a Knife</h1>
<p>Use a manual sharpener and gentle pressure to sharpen your knife. Test frequently to avoid over-sharpening.</p>

<h1 className='flex justify-center font-bold' >How to Hone a Knife</h1>
<p>Regular honing keeps the blade straight and maintains sharpness. Use a honing rod and draw the blade along it at a consistent angle.</p>

<ul className='flex justify-center font-bold' >Care and Storage Tips:</ul>
<li> Keep knives sharp to avoid dullness and slipping accidents.</li>
<li> Use cutting surfaces like wood or thick plastic to prevent dulling.</li>
<li>Store knives safely to prevent nicks and damage.</li>
<li>Wash knives with care, especially those with sensitive materials.</li>

<p>With these knife mastery techniques, you'll become a confident and efficient home cook, ready to tackle any recipe with ease and precision. Happy cooking!</p>



    </div>
   
    </>
  );
}

export default KnifeSkills;
