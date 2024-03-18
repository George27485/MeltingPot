import React from 'react';
import safety from '../assets/safety.jpg';

const KitchenSafetyRules = () => {
    return (
        <div className=' flex flex-col w-screen h-screen mt-20 items-center'>
            <img src={safety} className='flex justify-center h-45 w-screen'/>
            <h1>Kitchen Safety Rules</h1>
            <div className='bg-gradient-to-b from-transparent to-black '>
            <h2 className='mb-10'>We've all heard those chilling tales. A moment's distraction in the kitchen, and suddenly a child is holding a sharp knife. None of us want to live through such frightening experiences or feel unsafe in our own kitchens. To help mitigate everyday risks, we've compiled a list of fundamental kitchen safety tips that everyone should follow:</h2>
<ol className='flex flex-col justify-center items-center text-center'>
<li>1. Stay Vigilant: Whether you're chopping vegetables or boiling water, never leave the kitchen unattended, especially if there are children around. It only takes a second for an accident to happen.</li>

<li>2. Proper Tool Use: Always use kitchen tools and utensils for their intended purposes. Avoid using knives or other sharp objects as makeshift tools.</li>

<li>3. Keep Your Workspace Clear: Cluttered countertops and floors increase the risk of accidents. Keep your workspace tidy and free from unnecessary items.</li>

<li>4. Fire Safety: Know how to handle grease fires and have fire extinguishing materials readily available. Never leave cooking food unattended, especially if it involves hot oil or open flames.</li>

<li>5. Use Caution with Hot Surfaces: Whether it's a stovetop, oven, or toaster, always use oven mitts or potholders to handle hot pots, pans, and trays.</li>

<li>6. Mind Your Clothing: Avoid loose-fitting clothing and accessories that could catch fire or get caught in kitchen equipment. Roll up sleeves and tie back long hair to prevent accidents.</li>

<li>7. Practice Knife Safety: Handle knives with care, always cutting away from your body. Keep knives sharp and store them in a designated knife block or rack when not in use.</li>

<li>8. Clean Up Spills Immediately: Spills on the floor can lead to slips and falls, while spills on the stovetop can cause fires or create hazardous smoke. Clean up spills promptly to maintain a safe kitchen environment.</li>

<li>9. Prevent Cross-Contamination: Use separate cutting boards and utensils for raw meats, poultry, and seafood to prevent the spread of harmful bacteria. Wash your hands thoroughly after handling raw ingredients.</li>

<li>10. Educate Everyone in the Household: Make sure everyone in your household, including children, understands basic kitchen safety rules and practices. Encourage open communication about potential hazards.</li>
</ol>
<p className='mt-10'>By adhering to these simple yet crucial kitchen safety tips, you can create a safer environment for yourself and your loved ones while cooking and preparing meals. Stay vigilant, stay safe!</p>

</div>

        </div>
    );
}

export default KitchenSafetyRules;
