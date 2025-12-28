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
    name: "Classic Pancakes",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Butter", "Baking Powder"],
    cookingTime: 20
  },
  {
    name: "Spaghetti Bolognese",
    ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce", "Onion", "Garlic", "Olive Oil"],
    cookingTime: 45
  },
  {
    name: "Caesar Salad",
    ingredients: ["Romaine Lettuce", "Croutons", "Parmesan Cheese", "Caesar Dressing", "Chicken Breast"],
    cookingTime: 15
  }
];

console.log(recipes);


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
  console.log('------------------');
  console.log('Displaying all recipes...');

  for (let i = 0; i < recipes.length; i++) {
    const currentRecipe = recipes[i];
    
    console.log(`Name: ${currentRecipe.name}`);
    console.log(`Ingredients: ${currentRecipe.ingredients.join(', ')}`);
    console.log(`Cooking Time: ${currentRecipe.cookingTime} minutes`);

    console.log('');
  }

  console.log('End of the recipe list.');
  console.log('------------------');
}

displayAllRecipes();

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

function addRecipe(name, ingredients, cookingTime){
  console.log('------------------');
  console.log(`Adding a recipe with name ${name}...`);

  const newRecipe = {
    name,
    ingredients,
    cookingTime,
  };

  for (let i = 0; i < recipes.length; i++){
    if (recipes[i].name === name) {
      console.warn(
        `Recipe with name ${name} already exists. \nRecipe in the list: Name: ${recipes[i].name}, ingredients: ${recipes[i].ingredients}, cookingTime: ${recipes[i].cookingTime}`,
      );
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

function viewRecipe(name){
  console.log('------------------');
  console.log(`Viewing a recipe with name ${name}...`);

  let count = 0;

  for (let i = 0; i < recipes.length; i++){
    if (recipes[i].name === name){
      console.log(`Name: ${recipes[i].name}, Ingredients: ${recipes[i].ingredients}, Cooking Time: ${recipes[i].cookingTime}`);
      count++;
    }
  }

    if (count === 0 ){
      console.log(`No recipe found with the name: ${name}`);
    }

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

function updateRecipe(name, newIngredients, newCookingTime){
  console.log('------------------');
  console.log(`Updating a recipe with name ${name}...`);

  for (const recipe of recipes){
    if (recipe.name === name){
      recipe.ingredients = newIngredients;
      recipe.cookingTime = newCookingTime;

      console.log('Recipe updated successfully.');
      return;
    }
  }

  console.log('No recipe found with the name: ${name}');
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

function deleteRecipe(name){
  console.log('------------------');
  console.log(`Deleting a recipe with name ${name}...`);

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      recipes.splice(i, 1);
      console.log('Recipe deleted successfully.')
      console.log('------------------');
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

function filterByIngredient(ingredient){
  console.log('------------------');
  console.log(`Searching for recipes with ingredient: "${ingredient}"...`);

  let found = 0;

  for (let i = 0; i < recipes.length; i++){
    if (recipes[i].ingredients.join(' ').toLocaleLowerCase().includes(ingredient.toLocaleLowerCase())){
      console.log(
        `Name: ${recipes[i].name}, Ingredients: ${recipes[i].ingredients.join(' ')}, Cooking Time: ${recipes[i].cookingTime}`
      );
      found++;
    }
  }

    if (found === 0){
      console.log(`No recipe found with this ingredients: ${ingredient}`);
    }

  console.log('------------------');
}



function filterByMaxTime(maxMinutes){
  console.log('------------------');
  console.log(`Searching for recipes that take ${maxMinutes} minutes or less...`);

  let found = 0;

  for (let i = 0; i < recipes.length; i++){
    if (recipes[i].cookingTime <= maxMinutes){
      console.log(
        `Name: ${recipes[i].name}, Ingredients: ${recipes[i].ingredients},Cooking Time: ${recipes[i].cookingTime}`
      );
      found++;
    }
  }

    if (found === 0){
      console.log(`No recipe found within this time: ${cookingTime}`);
    }

  console.log('------------------');
}


//---------------------------------//

displayAllRecipes();

addRecipe("Homemade Pizza", ["Dough", "Tomato Sauce", "Mozzarella Cheese", "Pepperoni"], 30);
addRecipe("Chocolate Cake", ["Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk", "Butter"], 60);

displayAllRecipes();

viewRecipe('Caesar Salad');
viewRecipe('Homemade Pizza');
viewRecipe('Pastel de Nata');

updateRecipe("Classic Pancakes", ["Oat Flour", "Almond Milk", "Banana", "Eggs"], 15);

viewRecipe('Classic Pancakes');
displayAllRecipes();

deleteRecipe('Caesar Salad');
deleteRecipe('Pastel de Nata');
displayAllRecipes();

filterByIngredient("Eggs");
filterByMaxTime(15);