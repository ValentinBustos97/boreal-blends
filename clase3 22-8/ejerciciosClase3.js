//Ejercicio1
function sumar(a, b) {
    return a + b;
}
console.log(sumar(2, 2));
console.log(sumar(3, 5));
console.log(sumar(1, 4));

//Ejercicio2

//Ejercicio3

//Ejercicio4
function clasificarPorEdad(edad) {
    if (edad < 13) {
        return "es un niño";
    } else if (edad < 18) {
        return "es un adolescente";
    } else if (edad < 60) {
        return "es un adulto";
    } else {
        return "es un anciano";
    }

}

console.log(clasificarPorEdad(10));
console.log(clasificarPorEdad(15));
console.log(clasificarPorEdad(34));
console.log(clasificarPorEdad(65));

//Ejercicio5
function verSiEsMayor(age) {
    resultado = age > 18 ? "es mayor" : "es menor"
    return resultado;
}

console.log(verSiEsMayor(17));
console.log(verSiEsMayor(22));

//Ejercicio6
function alMenosUnoVerdadero(a, b, c) {
    return a || b || c ; 
}
console.log(alMenosUnoVerdadero(true,true,false));
console.log(alMenosUnoVerdadero(false,true,false));
console.log(alMenosUnoVerdadero(false,false,false));


