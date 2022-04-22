console.log('Meals')

const getIngredients = (values) => {
    const ingredients = values.slice(9,29)
    const measures = values.slice(29,49)
    let listDom = ``
    ingredients.forEach((value, index) => {
            if (value) {
                
                listDom = listDom + `<li class="list-group-item">${value} - ${measures[index]}</li>`
            }
        })
    return listDom

}

const getLinks = (e) => {
    let links = ``
    if (e.strYoutube) {
        links = links + `<a href="${e.strYoutube}" class="card-link">Go to the video</a>`
    }
    if (e.strSource) {
        links = links + `<a href="${e.strSource}" class="card-link">Go to the instructions</a>`
    }
    if (links) {
    return `<div class="card-body">
                ${links}
            </div>`
    } else {
        return links
    }

}
const showMeals = async (l, flag=1) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${l}`)
    const {meals} = await res.json()
    let recipesContainer = document.getElementById("recipesContainer")
    if (flag) {
        recipesContainer.innerHTML = ''
    }
    if (meals) {
        mealsDom = meals.map((e)=>{
            const values = Object.values(e)
            listDom = getIngredients(values)
            links = getLinks(e)
            
            return `<div class="card m-4" style="width: 18rem;">
            <img src="${e.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${e.strMeal}</h5>
            <p class="card-text">${e.strCategory}</p>
            </div>
            <ul class="list-group list-group-flush">
            ${listDom}
            </ul>
            ${links}
        </div>`
            })

        const recipes = mealsDom.reduce((acc, card)=>{
            return acc = acc + card
        }, ``)

        if (flag) {
            recipesContainer.innerHTML = recipes
        } else {
            recipesContainer.innerHTML = recipesContainer.innerHTML + recipes
        }}
}

const showAllMeals = () => {
    let abc = ["a", "b", "c", "d" ,"e", "f", "g", "h", "i" ,"j", "k", "l", "m","n", "o","p","q","r","s","t","u","v","w","x","y","z"]
    let recipesContainer = document.getElementById("recipesContainer")
    recipesContainer.innerHTML = ''
    abc.forEach((letter) => {
        showMeals(letter, 0)
    })
}

showAllMeals()