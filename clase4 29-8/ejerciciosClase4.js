/******Ejercicio1******/
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

/******Ejercicio2******/
let frutas = ["manzana", "naranja", "banana", "pera", "uva"];
for (i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

/*****Ejercicio 3******/
let nombres = ["juan", "valentin", "tomas"];
let longitud = nombres.map(nombre => nombre.length);
console.log(longitud);

let numeros2 = [4, 6, 8, 14, 17, 22];
let mayoresDiez = numeros2.filter(numero => numero > 10);
console.log(mayoresDiez);

let numerosASumar = [1, 2, 3];
let suma = numerosASumar.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma);

/*reduce
let numeros = [1, 2, 3, 4, 5];
let sumaTotal = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(sumaTotal);  // Salida: 15
Primera iteración:

Acumulador: 0 (valor inicial).
ValorActual: 1 (primer elemento del array).
Resultado de la operación: 0 + 1 = 1.
Segunda iteración:

Acumulador: 1 (resultado de la iteración anterior).
ValorActual: 2 (segundo elemento del array).
Resultado de la operación: 1 + 2 = 3.*/

/*map
El método map() se utiliza para transformar los elementos de un array. Devuelve un nuevo array con los elementos modificados de acuerdo con la función que le pases.

¿Cómo funciona?
Entrada: Un array y una función que define cómo transformar cada elemento.
Salida: Un nuevo array con los elementos transformados.
La función que le pasas a map() recibe como argumento cada elemento del array, y lo que devuelva esa función será lo que se coloque en el nuevo array.*/

/*filter
El método filter() se usa para filtrar los elementos de un array basado en una condición. Devuelve un nuevo array con solo aquellos elementos que cumplen con la condición especificada en la función.

¿Cómo funciona?
Entrada: Un array y una función que devuelve true o false para cada elemento.
Salida: Un nuevo array con solo los elementos para los que la función devolvió true.
La función que le pasas a filter() se ejecuta para cada elemento del array. Si la función devuelve true, el elemento se incluye en el nuevo array; si devuelve false, se descarta.*/

