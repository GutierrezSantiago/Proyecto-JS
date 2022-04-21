console.log('Meals L')


const showMeals = async (l) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${l}`)
    const {meals} = await res.json()
    console.log(meals)
    let recipesContainer = document.getElementById("recipesContainer")
    recipesContainer.innerHTML = ''
    meals.map((e)=>{
        e = `CARD STRUCTURE THAT ALLOWS ME TO INSERT EASILY MY RECIPES`
        })
}

//const btn = document.getElementById("show")
//btn.addEventListener('click', showMeals("l"))

