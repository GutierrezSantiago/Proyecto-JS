console.log("Scripts")
//Peso en lb o kg
let oneRepMax = (weight, reps) => weight*(36/(37-reps))
//Para peso(kg) y altura(m)
let imc = (weight, height) => weight/(height*height)

class Deportista {
    constructor(name, sports, weight, height, repMaxs) {
        this.name = name
        this.sports = sports
        this.weight = weight
        this.height = height
        this.repMaxs = repMaxs
    }
    getWeight(reps, exc) {
        return (this.repMaxs[exc]*(37-reps))/36
    }
    getReps(weight, exc) {
        if (weight > this.repMaxs[exc]) {
            alert("Ingrese un peso menor o igual al peso maximo con una repetición")
        } else {
            return 37-((weight*36)/this.repMaxs[exc])
        }
    }
    updateWeight(newWeight) {
        this.weight = newWeight
    }
    updateHeight(newHeight) {
        this.height = newHeight
    }
    addSport(sport) {
        if (this.sports.includes(sport)) {
            alert(sport, " ya era practicado por ", this.name, ".")
        } else {
        this.sport.push(sport)}
    }
    rmSport(sport) {
    if ( this.sports.includes(sport) ) {
        let index = this.sports.indexOf(sport)
        this.sports.splice(index, 1)
    } else {
        alert(this.name, " no practiba ", sport, ".")}
    }

}

function sportSuggest(){
    let exit = 0
    while(exit == 0){
        alert("SUGERENCIA DEPORTE, EXPLICACION, LINK A OTROS DETALLES E IMAGEN")
        exit = prompt("¿Esta satisfecho con la sugerencia? (Ingrese 1 para si, 0 para no.")
    }
}

//test menor
let test = 0
while(test == 0){
    sportSuggest()
    test = prompt("Desea salir del prompt de sugerencias? (1 para si, 0 para no)")}

    do {
        let opt = prompt("Calculadora fitness \n\nIngrese el número asignado a la opción que quiere realizar:\n1-Indice de Masa Corporal (IMC)\n2-Peso máximo de una repetición\n3-Salir")
        var opcion = parseInt(opt)
        if (opt == 1) {
            let weightInput = prompt("Ingrese el peso en kg: ")
            let weight = parseFloat(weightInput)
            let heightInput = prompt("Ingrese su altura en metros: ")
            let height = parseFloat(heightInput)
            alert("Su indice de masa corporal es " + imc(weight, height))
        } else if (opt == 2) {
            let unit = prompt("¿En que unidad ingresara el peso? (0 para kilogramos, 1 para libras)")
            let reps = prompt("Ingrese cuantas repeticiones realiza: ")
            let weight = prompt("Ingrese cuanto peso realiza con esas repeticiones: ")
            let repMax = oneRepMax(weight, reps)
            if (unit == 0) {
                alert("Su máximo estimado con una repetición es " + repMax + "kg.")
            } else if (unit == 1) {
                alert("Su máximo estimado con una repetición es " + repMax + "lbs.")
            }

        }
    
    }
        while (opcion != 3)