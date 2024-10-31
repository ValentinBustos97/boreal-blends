/*
//EJERCICIO4PARCIAL
let sistema = [];

function agregarProducto (nombre, cantidad, precio) {
  let inventario = {id: sistema.length , nombre: nombre , cantidad: cantidad, precio: precio};
  sistema.push(inventario);
}
agregarProducto ("harina",1,10);
agregarProducto ("sal",2,5);
agregarProducto ("yerba",3,6);
agregarProducto ("carne",2,15);

function eliminarProductos(id) {
  sistema.splice (id,1)
} 
console.log(sistema);
eliminarProductos(1);
console.log(sistema)

function modificarProducto(id,cantidadNew,precioNew) {
  for (let i = 0 ; i < sistema.length ; i++) {
    if(sistema[i].id === id) {
      sistema[i].cantidad = cantidadNew;
      sistema[i].precio = precioNew; 
    }
  }
}

function mostrarTodos (){
  if (sistema.length === 0) {
    console.log ("No hay productos para mostrar");
  }
  else {
    for (let i=0 ; i < sistema.length ; i++) {
      console.log ( 
      "nombre = "+sistema[i].nombre,
      "precio = "+sistema[i].precio,
      "cantidad = "+sistema[i].cantidad
      );
    }
  }
}
mostrarTodos()

sisJSON = JSON.stringify(sistema);
arrayobj = JSON.parse(sisJSON);


//EJERCICIO5PARCIAL:sistema de registro de estudiantes

let registro = [];

function registrarEstudiante(nombre, edad, aprobado) {
  let estudiante = {id:registro.length, nombre: nombre, edad: edad, aprobado: aprobado};
  registro.push(estudiante);
}
registrarEstudiante("carlos", 25, true);
registrarEstudiante("valen", 27, true);
registrarEstudiante("robert", 29, false);
registrarEstudiante("tomas", 23, false);
registrarEstudiante("caco", 19, false);
registrarEstudiante("chango", 39, true);
console.log(registro);

function eliminarEstudiante(id) {
  registro.splice(id,1)
}
eliminarEstudiante(2);
console.log(registro);

function modificarEstudiante(id, nombreNuevo, edadNueva) {
  for (let i=0 ; i< registro.length ; i++) {
    if (registro[i].id === id) {
      registro[i].nombre = nombreNuevo;
      registro[i].edad = edadNueva;
    }
  }
}
modificarEstudiante(0, "pepe", 35);
console.log(registro);

function aprobarEstudiante(id) {
  for (let i=0 ; i< registro.length ; i++ ) {
    if (registro[i].id === id) {
      registro[i].aprobado=true;
    }
  }
}
aprobarEstudiante(3);
console.log(registro);

function mostrarYFiltrar(aprobados) { 
  let listaAprobados =[];
  if (aprobados == true) { //esta linea es lo mismo que poner if(aprobados)//
    for (let i=0 ; i< registro.length; i++) {
      if (registro[i].aprobado==true) {
        listaAprobados.push(registro[i]);
      } 
    } return listaAprobados;
  } 
  else {return registro;}
}
console.log(mostrarYFiltrar(true));

//EJERCICIO6PARCIAL

let tareasPersonales = [];

function agregarTareaPersonal(nombreTarea, prioridad, fechaLimite) {
  let tareaPersonal = {id: tareasPersonales.length , nombreTarea: nombreTarea , prioridad: prioridad , fechaLimite: fechaLimite}
  tareasPersonales.push(tareaPersonal);
}
agregarTareaPersonal("cortar el pasto", "baja", "2024-12-2");
agregarTareaPersonal("entrega trabajo", "alta", "2024-09-26");
agregarTareaPersonal("comprar comida", "alta", "2024-09-21");
agregarTareaPersonal("comprar TV", "media", "2024-11-14");
agregarTareaPersonal("tramite AFIP", "alta", "2024-09-29");
console.log(tareasPersonales);

function eliminarTarea(id) {
  tareasPersonales.splice(id,1);
}
eliminarTarea(3);
console.log(tareasPersonales);

function modificarTarea(id, newName, newPrioridad, newFecha) {
  for (let i=0 ; i < tareasPersonales.length ; i++) {
    if (tareasPersonales[i].id === id) {
      tareasPersonales[i].nombreTarea = newName;
      tareasPersonales[i].prioridad = newPrioridad;
      tareasPersonales[i].fechaLimite = newFecha;
    }
  }
}
modificarTarea(1, "tomar agua", "media", "2024-09-19");
console.log(tareasPersonales);

function mostrarTareasYFiltrar(prioridades) {
  let listaPrioridad = [];
  if(prioridades) {
    for (let i=0 ; i <tareasPersonales.length; i++) {
      if(tareasPersonales[i].prioridad=="alta") {
        listaPrioridad.push(tareasPersonales[i])
      }
    }
    return listaPrioridad;
  } else {return tareasPersonales;}
  
}
console.log(mostrarTareasYFiltrar(false));

//EJERCICIOCABEZA
let estudiantes =[];

function agregarEstudiante (nombre) { //calificacion es un array
  let estudiante = {nombre: nombre,  calificaciones:[]}
  estudiantes.push(estudiante);
}
agregarEstudiante ("cabeza")
agregarEstudiante ("toresa")
agregarEstudiante ("valen")
agregarEstudiante ("pedilo")
agregarEstudiante ("pediiloo")
console.log (estudiantes);

function agregarCalificacion (nombre, calificacion) {
  for (let i=0 ; i < estudiantes.length ; i++) {
    if (estudiantes[i].nombre === nombre) {
      estudiantes[i].calificaciones.push(calificacion);
      return;
    }
    else {console.log ("Estudiante no encontrado");}
  }
}
agregarCalificacion ("valen", 8);
agregarCalificacion ("toresa", 8);
agregarCalificacion ("cabeza", 8);
agregarCalificacion ("pedilo", 5);
agregarCalificacion ("pediiloo", 3);

agregarCalificacion ("valen", 9);
agregarCalificacion ("toresa", 8);
agregarCalificacion ("cabeza", 9);
agregarCalificacion ("pedilo", 1);
agregarCalificacion ("pediiloo", 8);

agregarCalificacion ("valen", 8);
agregarCalificacion ("toresa", 9);
agregarCalificacion ("cabeza", 8);
agregarCalificacion ("pedilo", 2);
agregarCalificacion ("pediiloo", 7);

console.log(estudiantes);

function calcularPromedioGeneral () {
  sumaTotal = 0
  cantidadNotas = 0
  for (let i =0; i< estudiantes.length ; i++) {
    for (let j =0; j< estudiantes[i].calificaciones.length ; j++) {
      sumaTotal = sumaTotal + estudiantes[i].calificaciones[j];
      cantidadNotas ++;
    }
  }
  let promedio = sumaTotal/cantidadNotas
  return promedio || 0;
}
console.log ("Promedio General: "+ calcularPromedioGeneral ());

//EJ7PARCIAL

let sistema = []; 

function agregarVehiculo (marca,modelo,kilometraje) {
    let vehiculo = {id:sistema.length, marca: marca, modelo: modelo, kilometraje: kilometraje};
    sistema.push(vehiculo);
}
agregarVehiculo ("ford", 2015, 3000);
agregarVehiculo ("ford", 2015, 700);
agregarVehiculo ("ford", 2015, 1500);
agregarVehiculo ("ford", 2015, 800);
//console.log(sistema);

function eliminarVehiculo(id) {
    sistema.splice (id,1);
}
eliminarVehiculo(1);
//console.log(sistema);

function modificarVehiculo(id, kilometrajeNuevo) {
    for ( let i=0 ; i < sistema.length; i++){
        if (sistema[i].id===id) {
            sistema[i].kilometraje = kilometrajeNuevo;
        }
    }
}
modificarVehiculo(3, 700);
//console.log(sistema);

function mostrarYFiltrar (filt) {
    let listFilt =[];
    if (filt===true) {
        for (let i=0 ; i<sistema.length; i++) {
            if (sistema[i].kilometraje > 1000) {
                listFilt.push(sistema[i]);

            }
        } return listFilt;

    } else {return sistema;}

}
console.log(mostrarYFiltrar (false));

sistemaJSON = JSON.stringify(sistema);

console.log(sistemaJSON);

sistemaOBJ = JSON.parse (sistemaJSON);

console.log(sistemaOBJ);
*/