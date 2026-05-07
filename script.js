const mealsContainer = document.getElementById("meals-container");

async function fetchMeals() {
  try {
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/meals"
    );

    const result = await response.json();

    const meals = result.data.data;

    displayMeals(meals);
  } catch (error) {
    mealsContainer.innerHTML = "<h2>Failed to load meals.</h2>";
    console.error(error);
  }
}

function displayMeals(meals) {
  mealsContainer.innerHTML = "";

  meals.forEach((meal) => {
    const mealCard = document.createElement("div");

    mealCard.classList.add("meal-card");

    mealCard.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />

      <div class="meal-content">
        <h2>${meal.strMeal}</h2>

        <p><strong>Category:</strong> ${meal.strCategory}</p>

        <p><strong>Area:</strong> ${meal.strArea}</p>

        <div class="tag">${meal.strTags || "Recipe"}</div>
      </div>
    `;

    mealsContainer.appendChild(mealCard);
  });
}

fetchMeals();