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

// BUILT FOR LATER IMPLEMENTATION OF CHANGE BETWEEN UNITS
let render_bmi = () => {
    const spreadsheet = document.getElementById('spreadsheet')
    spreadsheet.innerHTML = '<div class="container"></div>'
    let titles = document.createElement('div')
    titles.className = 'row border'
    titles.innerHTML = `<div class="col-2">Weight(Kg)</div>
                        <div class="col-2">Height(M)</div>
                        <div class="col-2">BMI</div>
                        <div class="col-3">Date</div>`
    spreadsheet.appendChild(titles)
    let i = 0
    for (const bmi_detailed of bmis) {
        const row = document.createElement('div')
        row.className = 'row border'
        row.innerHTML = `<div class="col-2">${(bmi_detailed.weight).value}</div>
        <div class="col-2">${(bmi_detailed.height).value}</div>
        <div class="col-2">${bmi_detailed.bmi}</div>
        <div class="col-2">${bmi_detailed.date}</div>
        <div class="col-3"><button class="btn btn-danger justify-self-center w-90" id="${i}" onclick="splice_render(${i})">X</button></div>`
        spreadsheet.appendChild(row)
        
        
        i++

    }

}

function push_bmi(detailed_bmi){
    bmis.push(detailed_bmi)
    localStorage.setItem('bmis', JSON.stringify(bmis))
}



function calculate_bmi(){
    const weight = getWeight("weight", "w_unit")
    const height = getHeight("height", "h_unit")
    //Validation
    const unit_empty = weight.unit == "Unit" || height.unit == "Unit"
    const value_invalid = weight.value <= 0 || height.value <= 0 || Number.isNaN(weight.value) || Number.isNaN(height.value)

    
    if (unit_empty || value_invalid) {
        return alertIncorrectInput(unit_empty, value_invalid)
    }
    //Weight Transform
    
    weight.toKg()
    height.toMetre()
    

    let bmi_result = bmi(weight, height)
    bmi_result = bmi_result.toFixed(2)
    


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
            
            let date = dayjs().format("DD/MM/YYYY")
            let detailed_bmi = new bmi_detailed(weight, height, bmi_result, date)
            push_bmi(detailed_bmi)
          }
      })
    }