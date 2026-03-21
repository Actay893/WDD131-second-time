// Grab the container and search elements
const container = document.getElementById('recipe-container');
const searchInput = document.getElementById('search');

// This function builds and displays recipes on the page
function displayRecipes(recipeList) {
  container.innerHTML = '';

  recipeList.forEach(function(recipe) {

    // Build stars
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= recipe.rating) {
        stars += '<span aria-hidden="true">⭐</span>';
      } else {
        stars += '<span aria-hidden="true">☆</span>';
      }
    }

    // Build ingredients
    let ingredientItems = '';
    recipe.recipeIngredient.forEach(function(item) {
      ingredientItems += '<li>' + item + '</li>';
    });

    // Build instructions
    let instructionItems = '';
    recipe.recipeInstructions.forEach(function(step) {
      instructionItems += '<li>' + step + '</li>';
    });

    const card = `
      <div class="recipe-info">
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
        <span class="category">${recipe.tags[0]}</span>
        <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
          ${stars}
        </span>
        <h2>${recipe.name}</h2>
        <p class="description">${recipe.description}</p>
        <p><strong>Prep:</strong> ${recipe.prepTime} &nbsp; <strong>Cook:</strong> ${recipe.cookTime}</p>
        <h3>Ingredients</h3>
        <ul>${ingredientItems}</ul>
        <h3>Instructions</h3>
        <ol>${instructionItems}</ol>
      </div>
    `;

    container.innerHTML += card;
  });
}

// This function handles the search
function handleSearch() {
  const searchWord = searchInput.value.toLowerCase();

  // Filter recipes where the name, tags, or description match what was typed
  const filtered = recipes.filter(function(recipe) {
    const nameMatch = recipe.name.toLowerCase().includes(searchWord);
    const tagMatch = recipe.tags.some(function(tag) {
      return tag.toLowerCase().includes(searchWord);
    });
    const descriptionMatch = recipe.description.toLowerCase().includes(searchWord);

    return nameMatch || tagMatch || descriptionMatch;
  });

  displayRecipes(filtered);
}

// Listen for typing in the search box
searchInput.addEventListener('input', handleSearch);

// Show all recipes when the page first loads
displayRecipes(recipes);


const container = document.getElementById('recipe-container');
const searchInput = document.getElementById('search');