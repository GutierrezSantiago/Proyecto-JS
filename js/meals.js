console.log('Meals L')


const showMealsL = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=l')
    const {meals} = await res.json()
    meals.forEach((e)=>{
        const li = document.createElement('li')
        li.innerText = e.strMeal
        document.body.appendChild(li)
        })
}

const btn = document.getElementById("show")
btn.addEventListener('click', showMealsL)
