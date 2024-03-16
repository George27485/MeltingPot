import safety from '../assets/Ksafety.png';
import storage from '../assets/StorageKitchen.png';
import clean from '../assets/kitchenClean.png';
import knifeSafety from '../assets/KnifeSafety.png';
import KT from '../assets/KT.png'; 
import { Link } from 'react-router-dom';
import Footer from './footer';

const KitchenTips = () => (
  <>
<div className='bg-gradient-to-b from-transparent to-black  flex flex-col justify-center items-center'>
    <img src={KT} className='flex justify-center w-1/2 h-auto mt-20' />
  <div className=" h-screen flex  justify-center mt-3 p-6">
    
    <div className="flex flex-col border border-white rounded-lg p-4 m-5">
      <h2 className="text-white">Knife Skills</h2>
      <img src={knifeSafety} className="w-50 h-auto" alt="Knife Safety" />
      <p className="text-white">Proper Grip: Hold the knife firmly but not too tightly. Cutting Techniques: Learn slicing, dicing, chopping, and mincing. Maintenance: Keep knives sharp and clean after each use.</p>
      <Link to='/knifeskills'> <button type="button" className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800">Know More</button></Link>
    </div>

    <div className="flex flex-col border border-white rounded-lg p-4  m-5">
      <h2 className="text-white">Storage Tips</h2>
      <img src={storage} className="w-50 h-auto" alt="Storage Tips" />
      <p className="text-white">Refrigerator: Store perishables at the right temperature. Freezer: Freeze food in airtight containers to maintain freshness. Pantry: Keep dry goods in a cool, dry place away from sunlight.</p>
      <Link to='/storage'> <button type="button" className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800">Know More</button></Link>
    </div>

    <div className="flex flex-col border border-white rounded-lg p-4 m-5 w-full">
      <h2 className="text-white">Kitchen Safety</h2>
      <img src={safety} className="w-fullh-auto" alt="Kitchen Safety" />
      <p className="text-white">Burns: Use pot holders and turn pot handles away from the stove edge. Cuts: Use sharp knives and curl fingers under when chopping. </p>
      <Link to='/safty'> <button type="button" className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800">Know More</button></Link>
    
    </div>

    <div className="flex flex-col border border-white rounded-lg p-4 m-5 w-full">
      <h2 className="text-white">Cleaning Tips</h2>
      <img src={clean} className=" h-auto" alt="Cleaning Tips" />
      <p className="text-white">Regular Cleaning: Clean countertops and appliances daily with warm, soapy water. Appliance Care: Follow manufacturer's instructions for cleaning and maintenance.</p>
      
      <Link to='/Cleaning'> <button type="button" className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800">Know More</button></Link>
    </div>
  </div>
  </div>
  <Footer/>
  </>
 
);

export default KitchenTips;
