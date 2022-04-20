class Weight {
    constructor(value, unit) {
        this.value = value
        this.unit = unit
    }
    toKg(){
        if (this.unit != 2){
            this.value = this.value * 0.453592
            console.log(this.value)
            this.unit = 2
        }
    }
    toPounds(){
        if (unit != 1){
            this.value = this.value * 2.20462
            this.unit = 1
            }

    }
}

class Height {
    constructor(value, unit){
        this.value = value
        this.unit = unit
    }
    toMetre(){
        if (this.unit != 0){
            if (this.unit==1){
                this.value = this.value/100
            } else if (this.unit==2) {
                this.value = this.value*0.3048
            }
            this.unit = 0
        }
    }
}

const getWeight = (id_value, id_unit) => {
    let w_value = document.getElementById(id_value).value
    w_value = parseFloat(w_value)
    let w_unit_el = document.getElementById(id_unit)
    let w_unit = w_unit_el.options[w_unit_el.selectedIndex].value
    const weight = new Weight(w_value, w_unit)
    return weight
}

const getWeightUnit = (id_unit) => {
    let w_unit_el = document.getElementById(id_unit)
    let w_unit = w_unit_el.options[w_unit_el.selectedIndex].innerText
    return w_unit
    
}

const getHeight = (id_value, id_unit) => {
    let h_value = document.getElementById(id_value).value
    h_value = parseFloat(h_value)
    let h_unit_el = document.getElementById(id_unit)
    let h_unit = h_unit_el.options[h_unit_el.selectedIndex].value
    const height = new Height(h_value, h_unit)
    return height
}

const getLift = (id_lift) => {
    let lift_el = document.getElementById(id_lift)
    let lift = lift_el.options[lift_el.selectedIndex].value
    return lift

}

const getLiftName = (id_lift) => {
    let lift_el = document.getElementById(id_lift)
    let lift_name = lift_el.options[lift_el.selectedIndex].innerText
    return lift_name

}

// RENAME FILE TO UNITS_VALUES
const getReps = (id_reps) => {
    let reps = document.getElementById(id_reps).value
    reps = parseInt(reps)
    return reps
}
//IMPORTANTE MODIFICAR LUEGO PARA INCLUIR SWAL

const alertIncorrectInput = (unit_empty, value_invalid) => {
    if (unit_empty && value_invalid) {
        return (alert("Remember to enter a valid input and select a unit of measurement."))
    } else if (unit_empty){
        return (alert("Remember to select a unit of measurement."))
    } else {
        return (alert("Remember to enter a valid input."))
    }
    
}