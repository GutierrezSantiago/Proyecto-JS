console.log("Scripts")
//Peso en lb o kg
let oneRepMax = (weight, reps) => weight*(36/(37-reps))
//Para peso(kg) y altura(m)
let imc = (weight, height) => weight/(height*height)

class Athlete {
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
    getSportsNum(){
        return this.sports.length()
    }

}

function sportSuggest(){
    let exit = 0
    while(exit == 0){
        alert("SUGERENCIA DEPORTE, EXPLICACION, LINK A OTROS DETALLES E IMAGEN")
        exit = prompt("¿Esta satisfecho con la sugerencia? (Ingrese 1 para si, 0 para no.")
    }
}

let loadSports = (array) => {
    let opt1 = 1
            while(opt1 == 1) {
                opt1 = prompt("Desea cargar un deporte? (1 para si, 0 para no).")
                if (opt1 == 1) {
                    array.push(
                        prompt("Ingrese un deporte: ")
                        ) 
                }
}}

let loadOneRepMaxs = (array) => {
    let opt2 = 1
    let oneRepM
    let compounds = ["press de banca", "sentadilla", "peso muerto"]
    opt2 = prompt("Sabes tus máximos con una repetición? (1 para si, 0 para no).")
    for (let i = 0; i < 3; i++) {
        if (opt2 == 1) {
            oneRepM = prompt("Ingrese el máximo con " + compounds[i] + " :")
                 
        } else {
            let reps = prompt("Cuantas repeticiones hace en " + compounds[i] + " ?")
            let weight = prompt("Cuanto peso hace en esas " + reps + " repeticiones de" + compounds[i] + " ?")
            let repsParsed = parseInt(reps)
            let weightParsed = parseFloat(weight)
            oneRepM = oneRepMax(weightParsed, repsParsed)
            
        }
        array.push(oneRepMax)
    }
}

let loadAthletes = (array) => {
        while(true) {
            let name = prompt("Ingrese el nombre del deportista: ")
            let sports = []
            loadSports(sports)
            let weight = prompt("Ingrese el peso del deportista: ")
            let height = prompt("Ingrese la altura del deportista: ")
            let repMaxs = []
            loadOneRepMaxs([])
            array.push(new Athlete(name, sports, weight, height, repMaxs))
            let opt3 = prompt("Desea cargar otro deportista? (1 para si, 0 para no)")
            if (opt3 == 0) {
                break
            }
        }       
    }

let GreaterThanXBW = (mult) => ((athlete) => (athlete.repMaxs).some((el) => el > mult*athlete.weight))

// SI PESO ES UN OBJETO? PODRIA TENER UNA BANDERA PARA SI ESTA EN KG O LB Y METODOS RESPECTIVOS PARA TRANSFORMAR DE UNO A OTRO.

// test Funcion orden superior y metodos array
let GreaterThan1BW = GreaterThanXBW(1)
let testAthlete1 = new Athlete("Roman", ["Futbol", "Skate", "Tenis"], 85, 1.90, [80, 80, 80])
let testAthlete2 = new Athlete("Roman", ["Futbol", "Skate", "Tenis"], 85, 1.90, [100, 80, 80])
console.log(GreaterThan1BW(testAthlete1))
console.log(GreaterThan1BW(testAthlete2))

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

        
let array = []
loadAthletes(array)
console.log(array)