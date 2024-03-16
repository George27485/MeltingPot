import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar';
import Home from './components/Home';
import Contact from './components/contact';
import Faq from './components/faq';
import KitchenTips from './components/kitchenTips';
import Menu from './components/menu';
import SelectedRecipe from './components/selectedReciipeView';
import AboutMain from './components/aboutMain';
import KnifeSkills from './components/knifeSkills';
import KitchenCleaningTips from './components/cleanliness';
import KitchenSafetyRules from './components/safety';
import KitchenStorageTips from './components/storage';

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path='FAQ' element={<Faq/>}/>
        <Route path='kitchenTips' element={<KitchenTips/>}/>
        <Route path="about" element={<AboutMain/>} />
        <Route path='KnifeSkills' element={<KnifeSkills/>} />
<Route path='Cleaning' element={<KitchenCleaningTips/>}/>
<Route path='safty' element={<KitchenSafetyRules/>} />
<Route path='storage' element={<KitchenStorageTips/>} />
        <Route path='menu' element={<Menu selectedRecipeId={selectedRecipeId} setSelectedRecipeId={setSelectedRecipeId} />} />
        {selectedRecipeId && <Route path='selectedView' element={<SelectedRecipe selectedRecipeId={selectedRecipeId} setSelectedRecipeId={setSelectedRecipeId} />} />}
      </Routes>
    </Router>
  );
}

export default App;
