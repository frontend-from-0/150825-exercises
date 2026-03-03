/*
===========================================================
  RECIPE BOOK APPLICATION
===========================================================
In this mini-project, you will create a simple Recipe Book 
to store and manage recipes.

You'll practice:
1. Arrays and objects
2. Loops (for, for-of, findIndex)
3. Conditionals (if-else)
4. CRUD operations (Create, Read, Update, Delete)
5. Extra challenge: Filter by ingredient or cooking time

Run this file in Node.js or the browser console to test.
*/

/*
-----------------------------------------------------------
  STEP 1: Setup and Initial Recipes
-----------------------------------------------------------
1. Create a variable 'recipes' with a suitable data type with a few starter recipes.
2. Each recipe  should have:
   - name (string)
   - ingredients (array of strings)
   - cookingTime (number, in minutes)
*/
const recipes = [
  {
    name: 'Pasta',
    ingredients: ['pasta', 'tomato', 'garlic'],
    cookingTime: 20,
  },
  {
    name: 'Omelette',
    ingredients: ['egg', 'milk', 'cheese'],
    cookingTime: 10,
  },
];


/*
-----------------------------------------------------------
  STEP 2: Display All Recipes
-----------------------------------------------------------
Function: displayAllRecipes()
- Logs each recipe from recipes in a nice format:
  Name: Pasta
  Ingredients: pasta, tomato, garlic
  Cooking Time: 20 minutes
*/
function displayAllRecipes() {
  console.log('---Recipes----');

  for (let recipe of recipes) {
    console.log(`Name: ${recipe.name}`);
    console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
    console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
    console.log('------------------');
  }
    
}

/*
-----------------------------------------------------------
  STEP 3: Add a New Recipe
-----------------------------------------------------------
Function: addRecipe(name, ingredients, cookingTime)
- Checks if a recipe with the same name exists.
- If yes, log a warning and return.
- If not, add the new recipe and log success.
- ingredients should be an array like ['egg', 'milk', 'flour']
*/
function addRecipe(name, ingredients, cookingTime) {
  console.log('------------------');
  console.log(`Adding a recipe with name ${name}...`);
  const newRecipe = {
    name,
    ingredients,
    cookingTime,
  };

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      console.warn(`Recipe with name ${name} already exists.`);
      return;
    }
  }
  recipes.push(newRecipe);
  console.log('Recipe added successfully.');
  console.log('------------------');
}

/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/

function viewRecipe(name) {
  console.log('------------------');
  console.log(`Viewing a recipe with name ${name}...`);

  for (let recipe of recipes) {
    if (recipe.name === name) {
      console.log(`Name: ${recipe.name}`);
      console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
      console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
      console.log('------------------');
      return;
    }
  }
  console.log(`No recipe found with the name: ${name}`);
  console.log('------------------');
}


/*
-----------------------------------------------------------
  STEP 5: Update a Recipe
-----------------------------------------------------------
Function: updateRecipe(name, newIngredients, newCookingTime)
- Finds the recipe by name.
- Updates ingredients and cookingTime.
- Logs success or error message.
*/
function updateRecipe(name, newIngredients, newCookingTime) {
  console.log('------------------');
  console.log(`Updating a recipe with name ${name}...`);

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      recipes[i].ingredients = newIngredients;
      recipes[i].cookingTime = newCookingTime;
      console.log('Recipe updated successfully.');
      return;
    }
  }
  console.log(`No recipe found with the name: ${name}`);
  console.log('------------------');
}


  

/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/
function deleteRecipe(name) {
  console.log('------------------');
  console.log(`Deleting a recipe with name ${name}...`);
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      recipes.splice(i, 1);
      console.log('Recipe deleted successfully.');
      return;
    }
  }
  console.log(`No recipe found with the name: ${name}`);
  console.log('------------------');
}

/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.

Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/
function filterByIngredient(ingredient) {
  console.log('------------------');
  console.log(`Filtering recipes by ingredient: ${ingredient}...`);
  const filteredRecipes = recipes.filter(recipe => recipe.ingredients.includes(ingredient));

  if (filteredRecipes.length === 0) { 
    console.log(`No recipes found with the ingredient: ${ingredient}`);
  } else {
    for (let recipe of filteredRecipes) {
      console.log(`Name: ${recipe.name}`);
      console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
      console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
      console.log('------------------');
    } 
  }
}

displayAllRecipes();

addRecipe('Menemen', ['Yumurta', 'Domates', 'Biber'], 15);

displayAllRecipes();  

filterByIngredient('Yumurta');
console.log("KOD ÇALIŞIYOR!");