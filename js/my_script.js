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
    test = prompt("Desea salir del prompt? (1 para si, 0 para no)")}