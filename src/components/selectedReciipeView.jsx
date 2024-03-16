import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SelectedRecipe({ selectedRecipeId, setSelectedRecipeId }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSelectedRecipe() {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedRecipeId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        console.log(data);
        setSelectedRecipe(data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    }

    if (selectedRecipeId) {
      fetchSelectedRecipe();
    }
  }, [selectedRecipeId]);

  const handleGoBack = () => {
    console.log("Go back button clicked"); 
    setSelectedRecipeId(null);
    navigate('/menu');
  };

  console.log("Selected recipe ID:", selectedRecipeId);

  return (
    <div>
      {selectedRecipe && (
        <div className='flex h-screen w-auto flex-col mt-20 items-center bg-gradient-to-b from-transparent to-black overflow-auto '>
          <h2>{selectedRecipe.strMeal}</h2>
          <img src={`${selectedRecipe.strMealThumb}/preview`} alt={selectedRecipe.strMeal} className='h-40 w-40 flex justify-center'/>
          <a href={selectedRecipe.strYoutube} target="_blank" >Watch Video</a>
          <h3>Ingredients:</h3>
          <ul>
            {Object.entries(selectedRecipe)
              .filter(([key, value]) => key.startsWith('strIngredient') && value !== '' && value !== null)
              .map(([key, value], index) => (
                <li key={index}>
                  {value} - {selectedRecipe[`strMeasure${key.slice(13)}`]}
                </li>
              ))}
          </ul>
          <h3 className=''>Instructions:</h3>
          <p className='m-10 mt-0'>{selectedRecipe.strInstructions}</p>
          <button className='border border-white' onClick={handleGoBack}>Go Back</button>
        </div>
      )}
    </div>
  );
}
