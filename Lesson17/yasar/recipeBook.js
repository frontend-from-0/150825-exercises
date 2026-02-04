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
  { name: 'salad',
    ingredients : ["cucumbers", "tomatoes", "olives"],
    cookingTime : 0,
  },

  { name: 'hotDog',
    ingredients : ["ketchup", "sausage" , "mayonnaise"],
    cookingTime :  8,
  },

  { name: 'mushRoomsoup',
    ingredients : ["mushroom", "cream", "flour", "milk"],
    cookingTime : 13,
  },
];

console.log(recipes)

/*
-----------------------------------------------------------
  STEP 2: Display All Recipes
-----------------------------------------------------------
Function: displayAllRecipes()
- Logs each recipe from recipes in a nice format:
  Name: , tomato, garlic
  Cooking Time: 20 minutesPasta
  Ingredients: pasta
*/
function displayAllRecipes(){
  console.log('----------------------');
  console.log('display all recipes..');
  for (let recipe of recipes) {
    console.log(`Name: ${recipe.name}`);
    console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
    console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
    console.log('-------------------');
  }
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
function addRecipe(name, ingredients, cookingTime) { 
console.log('--------------------');
const existingRecipe = recipes.some( 
    (recipe) => recipe.name.toLowerCase() === name.toLowerCase()
  );

if (existingRecipe) {
  
    console.log(`A recipe with the name "${name}" already exists!`);
    return; 
   }

const newRecipe = {
  name,
  ingredients,
  cookingTime,
};
recipes.push(newRecipe);
  console.log(`✅ Success: "${name}" has been added to the recipe book.`);
}

addRecipe('Pasta', ['pasta', 'tomato sauce', 'cheese','salt'], 12);
displayAllRecipes();
/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/
function viewRecipe(name) {
console.log('------------------')
console.log(`Searching for recipe: "${name}"...`);

const foundRecipe = recipes.find(
    (recipe) => recipe.name.toLowerCase() === name.toLowerCase()
  );

if (foundRecipe) {
    console.log(`Recipe Found!`);
    console.log(`Name: ${foundRecipe.name}`);
    console.log(`Ingredients: ${foundRecipe.ingredients.join(', ')}`);
    console.log(`Cooking Time: ${foundRecipe.cookingTime} minutes`);
  }
  else {
    console.log(`Sorry, we couldn't find a recipe for "${name}".`);
    }
    console.log('-----------');
}
viewRecipe('Barbeque beef')
viewRecipe('hotDog')
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
console.log('-------------------');
const recipeToUpdate = recipes.find(
    (recipe) => recipe.name.toLowerCase() === name.toLowerCase()
  );
  if (recipeToUpdate) {
    if (newIngredients) recipeToUpdate.ingredients = newIngredients;
    if (newCookingTime !== undefined) recipeToUpdate.cookingTime = newCookingTime;

    console.log(`Success: "${recipeToUpdate.name}" has been updated.`);
  } else {
    console.log(`Error: Recipe "${name}" not found. Update failed.`);
  }
  console.log('-----------');
}


updateRecipe('salad', ['lettuce', 'lemon', 'tomatoes', 'olives', 'olive oil'], 7);
updateRecipe('Pizza', ['cheese', 'flour', 'olives'], 20);
viewRecipe('salad');
/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/
function deleteRecipe(name) {
  console.log('--------------')
  const index = recipes.findIndex(
    (recipe) => recipe.name.toLowerCase() === name.toLowerCase()
  );
  if (index !== -1) {
    const deletedRecipe = recipes.splice(index, 1);
    
    console.log(`Success: "${deletedRecipe[0].name}" has been removed from the recipe book.`);
  } 
  // 3. Eğer tarif listede yoksa hata mesajı verelim
  else {
    console.log(`Error: Recipe "${name}" not found. Nothing was deleted.`);
  }
console.log('-----------');
}
deleteRecipe('salad');
deleteRecipe('hamburger');
displayAllRecipes();

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
  console.log('-------------')
  console.log(`--- Recipes containing "${ingredient}" ---`);
  const filtered = recipes.filter((recipe) =>
    recipe.ingredients.some((ing) => ing.toLowerCase().includes(ingredient.toLowerCase()))
  );

  if (filtered.length > 0) {
    filtered.forEach((recipe) => {
      console.log(`- ${recipe.name} (Ingredients: ${recipe.ingredients.join(', ')})`);
    });
  } else {
    console.log(`No recipes found containing "${ingredient}".`);
  }
    console.log('-------------')
}
function filterByMaxTime(maxMinutes) {
  console.log('-------------')
  console.log(`--- Recipes ready in ${maxMinutes} minutes or less ---`);
  const recipesUnderMaxTime = recipes.filter((recipe) => recipe.cookingTime <= maxMinutes);
  if (recipesUnderMaxTime.length > 0) {
    recipesUnderMaxTime.forEach((recipe) => {
      console.log(`- ${recipe.name} (${recipe.cookingTime} min)`);
    });
  } else {
    console.log(`No recipes found that can be cooked in ${maxMinutes} minutes.`);
  }
  console.log('-------------')
}

filterByIngredient('salt');
filterByMaxTime(8);
