function searchFood() {
    const searchItem = document.getElementById('search').value;
    console.log(searchItem);

}
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
.then(response => response.json())
.then(data => displayFood(data))

function displayFood(meals) {
    const allFoodItem = document.getElementById('food-item')
    console.log(meals.meals);
    for (let i = 0; i < meals.meals.length; i++) {
        const itemName = meals.meals[i];
        // console.log(itemName.strMeal);
        const foodItem = document.createElement('div')
        foodItem.innerHTML =`
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
function details() {
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
    .then(res => res.json())
    .then(data => console.log(data))
    document.getElementById('food-item').style.display = 'none'
    const foodInfo=document.getElementById('details');
    foodInfo.style.display = "block";
    foodInfo.innerHTML= `
    <div class="mt-5">
        <h1>Hi</h1>
    </div>
    `

}