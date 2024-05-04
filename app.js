const API_KEY = "60acd899b407467e99d504329e1529cb";
const recipebox = document.querySelector(".recipebox");
const recipeimg = document.querySelector("#image");
const recipetitle = document.querySelector("#recipeheader");
const recipecontent = document.querySelector("#recipecontent");
const main = document.querySelector("#main")
const recipeHead = document.querySelector(".recipeHead");
async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

    const data = response.json()

    return data;
    
}
async function init(){
    const recipes = await getRecipes()
    displayRecipes(recipes.recipes);
    console.log(recipes)
}
function displayRecipes(recipes){
    
    recipes.forEach((recipe)=>{
        
        const recipeElement = document.createElement("div");
        recipeElement.classList.add("recipebox");
        const recipeImage = document.createElement("img");
        recipeImage.src = recipe.image;
        recipeImage.alt = "Image";
        const recipeTitle = document.createElement("h2");
        recipeTitle.textContent = recipe.title;
        recipeTitle.classList.add("recipeheader")
        const recipeContent = document.createElement("p");
        recipeContent.classList.add("recipecontent")
        recipeContent.innerHTML = `
        <strong>Ingradients: </strong>${recipe.extendedIngredients
        .map((ingredient) => ingredient.original)
        .join(", ")}
        `

        
        recipeElement.appendChild(recipeImage);
        recipeElement.appendChild(recipeTitle);
        recipeElement.appendChild(recipeContent);
        main.appendChild(recipeElement);
    })
    
    
}
init();

