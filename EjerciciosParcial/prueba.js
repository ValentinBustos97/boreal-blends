let sistema = [];

function agregarProducto (nombre, cantidad, precio) {
  let inventario = {id: sistema.length , nombre: nombre , cantidad: cantidad, precio: precio};
  sistema.push(inventario);
}
agregarProducto ("harina",1,10);
agregarProducto ("sal",2,5);
agregarProducto ("yerba",3,6);
agregarProducto ("carne",2,15);

/*
function filtrado () {
sistema.filter (cantidad => cantidad ==1);
}
console.log(filtrado ()); 

function findeando() {
    sistema.find (cantidad => cantidad ==2);
}
console.log(findeando()); */

/*
function filtrado() {
    return sistema.filter(item => item.cantidad === 1);  // 
}
console.log(filtrado());

*/

let estudiantes = [];

// Función para agregar un nuevo estudiante
function agregarEstudiante(nombre) {
  let estudiante = { id: estudiantes.length, nombre: nombre, calificaciones: [] };
  estudiantes.push(estudiante);
}

agregarEstudiante("cabeza");
agregarEstudiante("toresa");
agregarEstudiante("valen");
agregarEstudiante("pedilo");
agregarEstudiante("pediiloo");

console.log(estudiantes);

// Función para agregar una calificación a un estudiante
function agregarCalificacion(nombre, calificacion) {
  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nombre === nombre) {
      estudiantes[i].calificaciones.push(calificacion);
      return;
    }
  }
  console.log("Estudiante no encontrado");
}

// Función para calcular el promedio general de todos los estudiantes sin usar concat
function calcularPromedioGeneral() {
  let sumaTotal = 0;
  let cantidadNotas = 0;
  
  for (let i = 0; i < estudiantes.length; i++) {
    let calificaciones = estudiantes[i].calificaciones;
    
    for (let j = 0; j < calificaciones.length; j++) {
      sumaTotal += calificaciones[j];
      cantidadNotas++;
    }
  }
  
  let promedio = sumaTotal / cantidadNotas;
  return promedio || 0; // Si no hay calificaciones, retorna 0
}

agregarCalificacion("valen", 8);
agregarCalificacion("toresa", 9);
agregarCalificacion("cabeza", 7);
agregarCalificacion("pedilo", 6);
agregarCalificacion("pediiloo", 10);

console.log(estudiantes);
console.log('Promedio general:', calcularPromedioGeneral());
