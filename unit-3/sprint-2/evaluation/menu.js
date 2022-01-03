let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
let meals_div = document.getElementById("mealsList");


 async function getMeals(){
    let res = await fetch(url);

    let response = await res.json();

    appendMeals(response);
    console.log("response",response);
    // console.log(response.meals[0].strMealThumb);


}
getMeals()

function appendMeals(arr){
    console.log("arr",arr.meals[0].strMeal);
    

    arr.forEach(function (mealsList) {
        let div =document.createElement("div");

        let img = document.createElement("img");
        img.src= meals.meals.strMealThumb;

        let name = document.createElement("p");
        name.innerText = meals.strMeal;

        div.append(img,name);

        meals_div.append(div);
    });
}


