const storedBmis = localStorage.getItem('bmis')
let bmis = []

if (storedBmis) {
    bmis = JSON.parse(storedBmis)
}


let bmi = (weight, height) => weight.value/(height.value*height.value)

class bmi_detailed {
    constructor(weight, height, bmi, date) {
        this.weight = weight
        this.height = height
        this.bmi = bmi
        this.date = date
    }
}

// LATER UPDATED FOR CHANGIN BETWEEN UNITS OF MEASUREMENT
let render_bmi = () => {
    const spreadsheet = document.getElementById('spreadsheet')
    spreadsheet.innerHTML = '<div class="container">'
    let titles = document.createElement('div')
    titles.className = 'row border'
    titles.innerHTML = `<div class="col-3">Weight(Kg)</div>
                        <div class="col-3">Height(M)</div>
                        <div class="col-3">BMI</div>
                        <div class="col-3">Date</div>`
    spreadsheet.appendChild(titles)
    let div = document.createElement('div')
    div.className = "main__formDiv container bg-secondary"
    div.innerHTML = '<h2>BMI Logbook</h2>'
    for (const bmi of bmis) {
        const row = document.createElement('div')
        row.className = 'row border'
        row.innerHTML = `<div class="col-3">${bmi.weight.value}</div>
        <div class="col-3">${bmi.height.value}</div>
        <div class="col-3">${bmi.bmi}</div>
        <div class="col-3">${bmi.date}</div>`
        spreadsheet.appendChild(row)
    }
    div.appendChild(ul)
    spreadsheet.appendChild(div)

}

function push_bmi(detailed_bmi){
    bmis.push(detailed_bmi)
    render_bmi() // HACERLO EN OTRA SECCION - QUE TENGA OPCION VER EN DISTINTAS UNIDADES, AGREGAR UNA ENTRADA
    localStorage.setItem('bmis', JSON.stringify(bmis))
}



function calculate_bmi(){
    const weight = getWeight("weight", "w_unit")
    const height = getHeight("height", "h_unit")
    //Validation
    const unit_empty = weight.unit == "Unit" || height.unit == "Unit"
    const value_invalid = weight.value <= 0 || height.value <= 0 || Number.isNaN(weight.value) || Number.isNaN(height.value)

    
    // USAR SWAL LUEGO -- FUNCTION IN  UNITS.JS
    if (unit_empty || value_invalid) {
        return alertIncorrectInput(unit_empty, value_invalid)
    }
    //Weight Transform
    
    weight.toKg()
    console.log(weight) // check
    height.toMetre()
    console.log(height) //check
    

    let bmi_result = bmi(weight, height)
    bmi_result = bmi_result.toFixed(2)
    

    //CHALLENGE CODE -> LATER IMPROVE ON FUNCTIONALITY

    Swal.fire({
        title:  `Your IMC is ${bmi_result}.`,
        text: 'Would you like to record this entry in yout IMC logbook?',
        icon: 'info',
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        showDenyButton: 'true',
        allowOutsideClick: 'false',
        allowEnterKey: 'false'
      }).then((result) => {
          if (result.isConfirmed) {
            // READ BELOW -> OBSOLETE CODE THAT WILL BE UPDATED CLOSER TO THE FINAL PROYECT DEADLINE
            
            // LATER -> DIFFERENT PAGE FOR LOGBOOKS, THEY CAN BECOME TOO LARGE FOR MAIN PAGE
            //          SPREADSHEET STYLE UI WITH FILTERS

            let dateObj = new Date() // FINAL PROYECT => DAYJS LIBRARY
            
            let date = dayjs().format("DD/MM/YYYY")
            let detailed_bmi = new bmi_detailed(weight, height, bmi_result, date)
            push_bmi(detailed_bmi)
          }
      })
    }

     //BELOW THIS IS ANOTHER FUNCTION :: REMEMBER MODULARITY -> FUNCTION RESPONSABILITY ABOVE => GIVE IMC
    /* SEPARATE FUNCTION AND CORRECT ERRORS
    
    let dateObj = new Date() // FINAL PROYECT => DAYJS LIBRARY
    let date = `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`
    console.log(date)
    let detailed_bmi = new bmi_detailed(weight, height, bmi_result, date)
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
    
}*/

