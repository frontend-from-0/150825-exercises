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
    name: "Menemen",
    ingredients: ["2 Egg", "3 Tomato", "2 Pepper", "1 Onion", "2 tbsp Butter"],
    cookingTime: 10,
  },
  {
    name: "Garlic Butter Parmesan Pasta",
    ingredients: [
      "200g Pasta",
      "3 tbsp Butter",
      "2 cloves Garlic (minced)",
      "1/2 cup Grated Parmesan",
      "Salt",
    ],
    cookingTime: 20,
  },
  {
    name: "Peanut Butter Cookies",
    ingredients: ["1 cup Peanut Butter", "1/2 cup Sugar", "1 Egg"],
    cookingTime: 15,
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
  console.log("Displaying all recipes...");
  for (let i = 0; i < recipes.length; i++) {
    console.log(
      `Name: ${recipes[i].name}  Ingredients: ${recipes[i].ingredients.join(
        ", "
      )}, Cooking Time: ${recipes[i].cookingTime}`
    );
  }
  console.log("End of recipe list.");
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
  console.log("Adding a new recipe...");
  const newRecipe = {
    name,
    ingredients,
    cookingTime,
  };
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
      console.warn(
        `The recipe with name ${name} already exists.
      `
      );
      return;
    }
  }
  recipes.push(newRecipe);
  console.log(
    `The recipe added succesfully.\n 
    New recipe is: Name: ${name},
    Ingredients: ${ingredients}, 
    CookingTime: ${cookingTime}`
  );
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
  console.log("Viewing a recipe by name...");
  let count = 0;

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
      console.log(
        `Name: ${recipes[i].name},
        Ingredients: ${recipes[i].ingredients}, 
        Cooking Time: ${recipes[i].cookingTime}`
      );
      count++;
    }
  }

  if (count === 0) {
    console.warn(`No recipe found with the name ${name}`);
  }
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
  console.log("Update a recipe by name...");
  for (const recipe of recipes) {
    if (recipe.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
      recipe.ingredients = newIngredients;
      recipe.cookingTime = newCookingTime;

      console.log(`The recipe updated succesfully!\n
        The new recipe is: Name: ${name}, Ingredients: ${recipe.ingredients}, Cooking Time: ${recipe.cookingTime}.`);
      return;
    }
  }

  console.warn(`No recipe found with name ${name} in list!`);
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
  console.log("Delete a recipe by name...");
  for (let i = 0; i < recipes.length; i++) {
    if (name.toLocaleLowerCase() === recipes[i].name.toLocaleLowerCase()) {
      recipes.splice(i, 1);
      console.log(`The recipe with name ${name} deleted succesfully!`);

      return;
    }
  }

  console.warn(`No recipe found with name ${name}!`);
}

/*
-----------------------------------------------------------
  TESTING OUR FUNCTIONS
-----------------------------------------------------------
*/
console.log("------------------");
console.log(`Testing Our Functions`);
console.log("------------------");
console.log("Step 2: Displaying all recipes...");
displayAllRecipes();
console.log("------------------");

console.log("Step 3: Adding new recipe...");
addRecipe("Menemen");
addRecipe("menemen");
addRecipe(
  "Honey Garlic Salmon",
  [
    "2 Salmon fillets",
    "2 tbsp Honey",
    "1 tbsp Soy sauce",
    "1 tbsp Lemon juice",
    "2 cloves Garlic (minced)",
  ],
  15
);
console.log("------------------");
console.log("Displaying updated list...");
displayAllRecipes();

console.log("------------------");
console.log("Step 4: Viewing the recipe with name...");
viewRecipe("Menemen");
viewRecipe("menemen");
viewRecipe("Honey Garlic Salmon");
viewRecipe("honey garlic");
console.log("------------------");

console.log("Step 5: Updating the recipe with name...");
updateRecipe(
  "Menemen",
  [
    "2 tbsp Olive oil",
    "2 Green peppers",
    "3 medium Tomatoes",
    "3 Eggs",
    "Salt and red pepper",
    "Optional: 1/2 Onion",
  ],
  15
);
console.log("------------------");
updateRecipe(
  "Fry Egg",
  ["2 tbsp Olive oil", "3 Eggs", "Salt and red pepper"],
  15
);
console.log("------------------");

console.log("Step 6: Deleting the recipe with name...");
deleteRecipe("Honey Garlic Salmon");
deleteRecipe("Fry Egg");
console.log("------------------");
console.log("Displaying updated list...");
displayAllRecipes();

console.log("------------------");
/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.

Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/
console.log("------------------");
console.log("Step 7: Filtering recipes by ingredient...");

function filterByIngredient(ingredient) {
  let count = 0;
  const filteredRecipes = [];
  for (let i = 0; i < recipes.length; i++) {
    const ingredientOfRecipe = recipes[i].ingredients;

    if (
      ingredientOfRecipe.some((ing) =>
        ing.toLocaleLowerCase().includes(ingredient.toLocaleLowerCase())
      )
    ) {
      filteredRecipes.push(recipes[i]);
      count++;
      console.log(
        `The recipe with ingredient '${ingredient}' found where recipe named ${recipes[i].name}.`
      );
    }
  }
  if (count === 0) {
    console.warn(`No recipe found with ingredient ${ingredient}!`);
  }
}

filterByIngredient("oil");
filterByIngredient("salt");
filterByIngredient("butter");
filterByIngredient("fish");
console.log("------------------");
console.log("Displaying updated list...");
displayAllRecipes();
console.log("------------------");
