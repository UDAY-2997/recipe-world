import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
          params: {
            apiKey: 'ac55e8855e874c66acd0419ea78c3b2c'
          }
        });
        setRecipeDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipeDetails) {
    return <div>Loading recipe details...</div>;
  }

  return (
    <div className='grid-details'>
    <div className='grid-details-child'>
      <div className='center'>
        <h2>{recipeDetails.title}</h2>
      <img src={recipeDetails.image} alt={recipeDetails.title} />
      </div>
      <div>
        <h3>Ingredients:</h3>
      <ul>
        {recipeDetails.extendedIngredients.map(ingredient => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>

      <h3>Instructions:</h3>
      <ol>
        {recipeDetails.analyzedInstructions[0].steps.map(step => (
          <li key={step.number}>{step.step}</li>
        ))}
      </ol>
      </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
