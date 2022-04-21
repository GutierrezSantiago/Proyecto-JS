const storedOneRepMaxs = localStorage.getItem('oneRepMaxs')
let oneRepMaxs = [[],[],[],[]]

if (storedOneRepMaxs) {
    oneRepMaxs = JSON.parse(storedOneRepMaxs)
}

let oneRepMax = (weight, reps) => weight*(36/(37-reps))

class oneRepMax_detailed {
    constructor(lift, oneRepMaxValue, weight, reps, date) {
        this.lift = lift
        this.oneRepMaxValue = oneRepMaxValue
        this.weight = weight
        this.reps = reps
        this.date = date
    }
}

let render_oneRepMaxs = (lift) => {
    const spreadsheet = document.getElementById('spreadsheet')
    spreadsheet.innerHTML = '<div class="container"></div>'
    let titles = document.createElement('div')
    titles.className = 'row border'
    titles.innerHTML = `<div class="col-2">One Rep Max(Kg)</div>
                        <div class="col-2">Weight(Kg)</div>
                        <div class="col-2">Repetitions</div>
                        <div class="col-2">Date</div>
                        <div class="col-2"></div>`
    spreadsheet.appendChild(titles)
    let i = 0
    for (const detailed_oneRepMax of oneRepMaxs[lift]) {
        const row = document.createElement('div')
        row.className = 'row border'
        row.innerHTML = `<div class="col-3">${detailed_oneRepMax.oneRepMaxValue}</div>
        <div class="col-2">${(detailed_oneRepMax.weight).value}</div>
        <div class="col-2">${detailed_oneRepMax.reps}</div>
        <div class="col-3">${detailed_oneRepMax.date}</div>
        <div class="col-2"><button class="btn btn-danger justify-self-center w-90" id="${i}" onclick="splice_render(${i})">X</button></div>`
        spreadsheet.appendChild(row)
        
        
        i++

    }

}

function push_oneRepMax(oneRepMax_detailed, lift){
    (oneRepMaxs[lift]).push(oneRepMax_detailed)
    localStorage.setItem('oneRepMaxs', JSON.stringify(oneRepMaxs))
}

function calculate_oneRepMax(){
    const lift = getLift("lift")
    const reps = getReps("reps_lift")
    const weight = getWeight("weight_lift", "w_lift_unit")
    const lift_name = getLiftName("lift")
    const weight_unit = getWeightUnit("w_lift_unit")

    //Validation
    const unit_empty = weight.unit == "Unit"
    const value_invalid = weight.value <= 0 || reps <= 0 || Number.isNaN(weight.value) || Number.isNaN(reps)

    if (unit_empty || value_invalid) {
        return alertIncorrectInput(unit_empty, value_invalid)
    }
    //Weight Transform
    
    weight.toKg()
    console.log(weight)

    let oneRepMaxValue = oneRepMax(weight.value, reps)
    oneRepMaxValue = oneRepMaxValue.toFixed(2)


    Swal.fire({
        title:  `Your one rep max for is ${lift_name} is ${oneRepMaxValue} ${weight_unit}.`,
        text: 'Would you like to record this entry in yout Logbook?',
        icon: 'info',
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        showDenyButton: 'true',
        allowOutsideClick: 'false',
        allowEnterKey: 'false'
      }).then((result) => {
          if (result.isConfirmed) {

            let date = dayjs().format("DD/MM/YYYY")
            let detailed_oneRepMax = new oneRepMax_detailed(lift_name, oneRepMaxValue, weight, reps, date)
            push_oneRepMax(detailed_oneRepMax, lift)

          }
      })
    }