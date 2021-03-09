
function searchFood() {
    document.getElementById('random').style.display = "none"
    const searchItem = document.getElementById('search').value;
    console.log(searchItem);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchItem}`)
        .then(response => response.json())
        .then(data => displayFood(data))

    function displayFood(meals) {
        const allFoodItem = document.getElementById('food-item')
        console.log(meals.meals);
        for (let i = 0; i < meals.meals.length; i++) {
            const itemName = meals.meals[i];
            // console.log(itemName.strMeal);
            const foodItem = document.createElement('div')
            foodItem.innerHTML = `
        <div onclick="details()" class="col card rounded-3 m-2" style="width:18rem">
            <img class="w-100 rounded-top" src="${itemName.strMealThumb}">
            <div class="card-body">
                <p class="card-text">${itemName.strMeal}</p>
            </div>
        </div>
        `;
            allFoodItem.appendChild(foodItem)
        }
    }
}
function details() {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
        .then(res => res.json())
        .then(data => console.log(data))
    document.getElementById('food-item').style.display = 'none'
    const foodInfo = document.getElementById('details');
    foodInfo.style.display = "block";
    foodInfo.innerHTML = `
        <div class="card position-absolute top-50 start-50 translate-middle"" style="width: 30rem;border:none">
            <img src="https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg" height="300vh" class="card-img-top rounded-3">
            <div class="card-body">
                <h1> Recipe </h1>
                <h5> Ingredient </h5>
                <p class="card-text">Some.</p>

            </div>
        </div>
    `
}