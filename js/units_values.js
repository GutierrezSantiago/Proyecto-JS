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
        Swal.fire({
            title:  `Invalid input and unit`,
            text: 'Remember to enter a valid input and select a unit of measurement.',
            icon: 'error',
            confirmButtonText: 'Ok'
          })

    } else if (unit_empty){
        Swal.fire({
            title:  `Invalid unit`,
            text: 'Remember to select a unit of measurement.',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    } else {
        Swal.fire({
            title:  `Invalid input`,
            text: 'Remember to enter a valid input.',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }
    
}

const splice_render = (i) => {
    Swal.fire({
        title:  `Are you sure you want to remove this entry?`,
        text: 'This action is irreversible',
        icon: 'warning',
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        showDenyButton: 'true',
        allowOutsideClick: 'false',
        allowEnterKey: 'false'
      }).then((result) => {
          if (result.isConfirmed) {
                let filter = document.getElementById('logbook_filter')
                filter.addEventListener('change', render)
                let render_type = filter.value
                if (render_type==0) {
                    bmis.splice(i, 1)
                    localStorage.setItem('bmis', JSON.stringify(bmis))
                    render_bmi()
                } else {
                    oneRepMaxs[render_type-1].splice(i, 1)
                    localStorage.setItem('oneRepMaxs', JSON.stringify(oneRepMaxs))
                    render_oneRepMaxs(render_type-1)
                } 
          }
      })
    }

  
    