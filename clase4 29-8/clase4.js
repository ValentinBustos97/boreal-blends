//(variable de iteracion, la condicion, variacion de la variable)
//ctrlñ para abrir la terminal
for(let i = 0; i < 10; i++){
    console.log(i)
}

//condicion y variacion se pueden cambiar

for(let i = 10; i > 10; i--){
console.log(i)
}
//i-- hace que cada vez reste -1
/*for(let i = 0; i < 10, i++){
    console.log(i)
} */
//esto hace que falle el hardware, se tilda, tiraria el servidor abajo en una app
//ddos, ataque masivo. 
//bsod. te obliga a reiniciar la compu, se satura algun dispositivo. 

//python tiene la estrcutrua metodo objeto, o metodo dato. metodo y adentro algo
let estudiantes = ["Juani", "Catamarca",]

//recorro el indice a traves de la variable i que va iterando
for(let i = 0; estudiantes.length; i++){
    console.log(estudiantes[i])
}

    //.length es una propiedad de estudiantes

    //funcion que me cuente la cantidad de numeros pares, necesita recibir el parametro array
    //arra es un parametro, un comodin, despues sera reemplazado
    let numero = [1,2,3,4,5,6,7,8,9,10]

    function cantidadPares(array){
        let contadorPares = 0
        for(let i=0; i< array.length; i++){
            if (array[i] % 2 ===0){
                contadorPares++ //contadorPares = contadorPares+1
            }
        }
        return contadorPares
    }

    console.log(cantidadPares(numero))
    //calcular el promedio de un array

    function calcularPromedio(array){
        let suma = 0
        for (let i = 0; i < array.length; i++){
            suma = suma + array[i]
            let promedio = suma /array.length
            return promedio
        }
    }

    console.log(calcularPromedio(numero))

let arrayReducido = numero.reduce(
    (accumulator, currentValue) => accumulator + currentValue
)
//reverse, invierte el array

function encontrarValor (array,valorABuscar){
    for(let i = 0; i< array.length; i++){
        if(array[i]===valorABuscar){

            return i
        }
    }
    return -1
}
console.log(encontrar(estudiantes,"Catamarca"))
console.log(estudiantes.indexOf("Catamarca"))

/*// array.map()retorna un array nuevo, hay otros que cambian el array original y perdes esos datos
me devuelve el ultimo InputDeviceInfo, sin usar lastindexof  mostrame cual es el ultimo indice de un valor pasado por parametro
lastindexOfsi hay 2 elementos iguales, te tira el indice mas alto donde esta, la ultima aparicion del elemento
como encontrar el ultimo indice de un elemento, usar un for buscando por atras
si es el elemento en la lista, le dice buscame esto en el array, esto se usa cuando tengo
un array de obejtos en vez de un array de elementos*/


/*sume una propiedad de un objeto dentro de un array. regla sobre cada uno de los objetos del array
pero de una de sus propiedades*/
/*let estudiantesItba = [
    {nombre: "Dana",
        anio: 4
        },
        { nombre: "Tomas",
            anio: 2
        }
]*/

/*****************************/
//API y JSON
//API: conecto 2 aplicaciones sin una interfaz grafica, 
/*las aplicaciones no necesitan una interfaz graficas
lo hacen a partir de las graficas
APIS: array de objetos que me manda un proveedor externo
dollarapi
lo que recibimos es un JSON,
objeto liteal lo puedo convertir en un JSON
let objetoConvertido =JSON.stringify(objetoLiteral)
stringify lo convierte a string porq de esta manera es q lo puede interpretar
una base de datos
JSON es una forma de convertir info a algo que sea legible por una base de datos
si solo lee strings, me va a mandar strings
si recibe un objeto string, lo tengo que volver a cambiar
let objetoConvertidoDeVuelta=JSON.parse(objetoConvertido)
lo que me manda API es un objeto hecho string
*/