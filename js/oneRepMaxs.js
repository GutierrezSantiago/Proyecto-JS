let oneRepMax = (weight, reps) => weight*(36/(37-reps))

class oneRepMax_detailed {
    constructor(lift, weight, reps, date) {
        this.lift = lift
        this.weight = weight
        this.reps = reps
        this.date = date
    }
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

    
    // USAR SWAL LUEGO -- FUNCTION IN  UNITS.JS
    if (unit_empty || value_invalid) {
        return alertIncorrectInput(unit_empty, value_invalid)
    }
    //Weight Transform
    
    weight.toKg()
    console.log(weight)

    let oneRepMaxValue = oneRepMax(weight.value, reps)
    oneRepMaxValue = oneRepMaxValue.toFixed(2)
    console.log(oneRepMaxValue)

    //CHALLENGE CODE -> LATER IMPROVE ON FUNCTIONALITY

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
            // READ BELOW -> OBSOLETE CODE THAT WILL BE UPDATED CLOSER TO THE FINAL PROYECT DEADLINE
            
            // LATER -> DIFFERENT PAGE FOR LOGBOOKS, THEY CAN BECOME TOO LARGE FOR MAIN PAGE
            //          SPREADSHEET STYLE UI WITH FILTERS
            // FINAL PROYECT => DAYJS LIBRARY
            let date = dayjs().format("DD/MM/YYYY")


          }
      })
    }
/*class Logbook {
    constructor(name, imcs, deadlifts, squats, other) {
        this.imcs = imcs
        this.deadlifts = deadlifts
        this.squats = squats
        this.other = other
    }

}*/