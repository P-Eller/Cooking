import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {
        recipes.map((recipe, i) => {
          return (
            <Recipe
              key={i}
              name={recipe.name}
              author={recipe.author}
              />
          );
        })
      }
    </div>
  );
}

export default RecipeList;