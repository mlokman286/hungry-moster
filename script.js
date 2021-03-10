
function searchFood() {
    document.getElementById('random').style.display = "none"
    const searchItem = document.getElementById('search').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchItem}`)
        .then(response => response.json())
        .then(data => displayFood(data))
        .catch(() => { errorMessage() })
}
function errorMessage() {
    const allFoodItem = document.getElementById('food-item');
    allFoodItem.innerHTML = `
        <div class ="position-absolute top-50 start-50 translate-middle">
            <h4 class="text-danger">Sorry,nothing found </h4>
            <p class="fs-5 fw-light">Search by this catagories Beef, Chicken, Dessert, Lamb, Miscellaneous, Pasta, Pork, Seafood,
            Side, Starter, Vegan, Vegetarian, Breakfast, Goat.</p>
            <button class="btn btn-primary" onclick="location.reload()">Go Back</button>
        </div>
        `;
}

function displayFood(meals) {
    const allFoodItem = document.getElementById('food-item')
    const meal = meals.meals;
    meal.forEach(mealName => {
        const foodItem = document.createElement('div')
        foodItem.innerHTML = `
            <div onclick="details(${mealName.idMeal})" class="col card rounded-3 m-2" style="width:18rem">
                <img class="w-100 rounded-top" src="${mealName.strMealThumb}">
                <div class="card-body">
                    <p class="card-text">${mealName.strMeal}</p>
                </div>
            </div>
      `;
        allFoodItem.appendChild(foodItem);

    })
}
function details(id) {
    document.getElementById('food-item').style.display = 'none';
    document.getElementById('details').style.display = 'block'

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0]
            const recipeInfo = document.getElementById('details');
            const recipe = document.createElement('div');
            recipe.innerHTML = `
            <div class="card position-absolute top-50 start-50 translate-middle"" style="width: 30rem;border:none">
                <img src="${meal.strMealThumb}" height="300vh" class="card-img-top rounded-3" alt="Recipe-img">
                <div class="card-body">
                    <h1>${meal.strMeal}</h1> <br>
                    <h5> Ingredient </h5>
                    <ul class="card-text">
                        <li>${meal.strIngredient1}</li>
                        <li>${meal.strIngredient2}</li>
                        <li>${meal.strIngredient3}</li>
                        <li>${meal.strIngredient4}</li>
                        <li>${meal.strIngredient5}</li>
                        <li>${meal.strIngredient6}</li>
                        <li>${meal.strIngredient7}</li>
                        <li>${meal.strIngredient8}</li>
                        <li>${meal.strIngredient9}</li>
                    </ul>
                    <button class="btn btn-primary" onclick="location.reload()">Go Back</button>
                </div>
            </div>
            `
            recipeInfo.appendChild(recipe)
        })
}
