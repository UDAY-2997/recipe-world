import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Routes, Route } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

const Menu = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
          params: {
            apiKey: 'ac55e8855e874c66acd0419ea78c3b2c',
            instructions: true,
            analyzedInstructions: true
          }
        });
        setRecipes(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className='container' id='explore-menu'>
      <section className=''>
      <div className='head-main'><h1>Menu</h1></div> 
      <div className='button-sort'>
      <Link to="/add-new">
      <button type="submit" className="sort">
        Sort by taste
      </button>
    </Link>
      </div>
      <div className='grid'>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h2>{recipe.title}</h2>
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
