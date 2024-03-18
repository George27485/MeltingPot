import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu({ selectedRecipeId, setSelectedRecipeId }) {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true); // State to track loading status
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const allMeals = [];

        for (const letter of alphabet) {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch meals for letter ${letter}`);
          }
          const data = await response.json();
          if (data.meals) {
            allMeals.push(...data.meals);
          }
        }

        setMeals(allMeals);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMeals();
  }, []);

  const handleDetailClick = (recipeId) => {
    setSelectedRecipeId(recipeId);
    navigate('/selectedView');
  };

  const filteredRecipes = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className='flex items-center text-center '>Loading...</div>; 
  }

  return (
    <div className="flex flex-col items-center justify-center overflow-auto h-auto w-screen mt-20">
      <div>
        <h1 className="text-white text-3xl font-bold mb-8">Explore Recipes</h1>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 mb-4 bg-gray-800 text-white rounded-md focus:outline-none flex text-center"
        />
      </div>
      <div className="flex flex-wrap justify-center max-w-screen-lg">
        {filteredRecipes.map((meal) => (
          <div key={meal.idMeal} className="bg-gray p-6 rounded-lg shadow-2xl flex flex-col items-center justify-center mx-4 my-8">
            <h2 className="text-xl font-semibold mb-2 text-center">{meal.strMeal}</h2>
            <img src={`${meal.strMealThumb}/preview`} alt={meal.strMeal} className="w-64 h-auto rounded-md" />
            <button
              onClick={() => handleDetailClick(meal.idMeal)}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
            >
              View Recipe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
