const storedBmis = localStorage.getItem('bmis')
let bmis = []

if (storedBmis) {
    bmis = JSON.parse(storedBmis)
}


let bmi = (weight, height) => weight/(height*height)

let poundToKg = (weightInPounds) => {return weightInPounds*0,453592}

let toMetre = (height, unit) => {
    let inMetre = 0
    if (unit == 1){
        inMetre = height/100
    } else {
        inMetre = height*0,3048
    }
    return inMetre
}

class bmi_detailed {
    constructor(weight, height, bmi, date) {
        this.weight = weight
        this.height = height
        this.bmi = bmi
        this.date = date
    }
}

let render_bmi = () => {
    const spreadsheet = document.getElementById('displayBmi')
    spreadsheet.innerHTML = ''
    let ul = document.createElement('ul')
    let titles = document.createElement('li')
    titles.innerText = 'Weight(Kg) - Height(m) - BMI - Date'
    ul.appendChild(titles)
    let div = document.createElement('div')
    div.className = "main__formDiv container bg-secondary"
    div.innerHTML = '<h2>BMI Logbook</h2>'
    for (const bmi of bmis) {
        const row = document.createElement('li')
        row.textContent = `   ${bmi.weight}   - ${bmi.height}  - ${bmi.bmi} - ${bmi.date}`
        ul.appendChild(row)
    }
    div.appendChild(ul)
    spreadsheet.appendChild(div)

}

function push_bmi(detailed_bmi){
    bmis.push(detailed_bmi)
    render_bmi()
    localStorage.setItem('bmis', JSON.stringify(bmis))
}

let bmiCalculate_btn = document.getElementById('bmi_calculate')
bmiCalculate_btn.addEventListener("click", calculate_bmi)
let bmisDisplay_btn = document.getElementById('bmi_displays')
bmisDisplay_btn.addEventListener('click', render_bmi)



function calculate_bmi(){
    let weight = document.getElementById('weight').value
    weight = parseFloat(weight)
    let w_unit_el = document.getElementById('w_unit')
    let w_unit = w_unit_el.options[w_unit_el.selectedIndex].value
    if (w_unit == 1) {
        weight = poundToKg(weight)
    } else if (w_unit != 2) {
        alert("Remember to select a unit of measurement.")
    }
    let height = document.getElementById('height').value
    height = parseFloat(height)
    let h_unit_el = document.getElementById('h_unit')
    let h_unit = h_unit_el.options[h_unit_el.selectedIndex].value
    if (h_unit == "Unit") {
        alert("Remember to select a unit of measurement.")
    } else {
        height = toMetre(height, h_unit)
    }
    let bmi_result = bmi(weight, height)
    bmi_result = bmi_result.toFixed(2)
    let dateObj = new Date()
    let date = `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`
    console.log(date)
    let detailed_bmi = new bmi_detailed(weight, height, bmi_result, date)
    bmis.push(detailed_bmi)
    let container = document.getElementById('displayBmi')
    container.innerHTML = `<div class="main__formDiv container bg-secondary">
    <h2 class="mb-3 text-center">BMI Result</h2>
    <p>Your BMI is ${bmi_result} with a weight of ${weight} kilograms and a height of ${height} metres.</p>
    <p>Would you like to record this data into your BMI logbook?</p>
    <div class="d-flex container justify-content-around">
    <button type="button" class="btn btn-primary me-2" id="noLogbook">No</button>
    <button type="button" class="btn btn-primary" id="logbook">Yes</button>
    </div>                    
    </div>`
    let noLogbook = document.getElementById('noLogbook')
    noLogbook.addEventListener('click', () => container.innerHTML = '')
    let logbook = document.getElementById('logbook')
    logbook.addEventListener('click', push_bmi(detailed_bmi))
    
}

