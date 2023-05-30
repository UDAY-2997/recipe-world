import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

const Menu = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedSort, setSelectedSort] = useState('popularity');
  const location = useLocation();
  const recipeRefs = useRef({}); // Declare recipeRefs as a useRef

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
        params: {
          apiKey: 'ac55e8855e874c66acd0419ea78c3b2c',
          instructions: true,
          analyzedInstructions: true,
          number: 20,
          sort: selectedSort
        }
      });
      setRecipes(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRecipes();

    // Scroll to the recipe element if the URL has a hash
    if (location.hash && Object.keys(recipeRefs.current).length > 0) {
      const recipeId = location.hash.substring(1);
      const targetRecipe = recipeRefs.current[recipeId];
      if (targetRecipe && targetRecipe.ref) {
        targetRecipe.ref.scrollIntoView({ behavior: 'smooth' });
        targetRecipe.ref.classList.add('highlight');
      }
    }

    return () => {
      // Remove the highlight class when leaving the menu page
      Object.values(recipeRefs.current).forEach(recipe => {
        if (recipe.ref) {
          recipe.ref.classList.remove('highlight');
        }
      });
    };
  }, [selectedSort, location]);

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRecipes();
  };

  const handleRecipeRef = (id, ref) => {
    recipeRefs.current[id] = { id, ref };
  };

  return (
    <div className='container' id='explore-menu'>
      <section className=''>
        <div className='head-main'>
          <h1>Menu</h1>
        </div>
        <div className='button-sort'>
          <form onSubmit={handleSubmit}>
            <select className='button' value={selectedSort} onChange={handleSortChange}>
              <option value="healthiness">Healthiness</option>
              <option value="popularity">Popularity</option>
              <option value="time">Time</option>
              <option value="alcohol">Alcohol</option>
            </select>
          </form>
        </div>
        <div>
          <ul className='grid-main'>
            {recipes.map(recipe => (
              <li key={recipe.id} ref={ref => handleRecipeRef(recipe.id, ref)}>
                <Link to={`/recipe/${recipe.id}`}>
                  <h2 className='elipsis'>{recipe.title}</h2>
                  <img src={recipe.image} alt={recipe.title} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </section>
    </div>
  );
};

export default Menu;
