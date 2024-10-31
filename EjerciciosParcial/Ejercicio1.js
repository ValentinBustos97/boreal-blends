let tareas = [];
function agregarTarea(nombre, estado) {
    let tarea = { id: tareas.length, nombre: nombre, completado: estado };
    tareas.push(tarea)
}

function eliminarTarea(id) {
    tareas.splice(id, 1)
}

function modificarTarea(id, nombreNuevo) {
    for (let i; i < tareas.length; i++) {
        if (tareas[i].id === id) {
            tareas[i].nombre = nombreNuevo;
        }
    }
}

function mostrarTareasYFiltrar(completadas) {
    let tareasFiltradas = [];
    if (completadas == true) {
        for (let i = 0; i < tareas.length; i++) {
            if (tareas[i].completado == true) {
                tareasFiltradas.push(tareas[i]);
            }
        }
        return tareasFiltradas
    } else { return tareas }
}


function verificarTarea(id) {
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id === id) {
            console.log("La tarea existe y su estado es" + (tareas[i].completado ? "Completada" : "Incompleta"));
            return;
        }
        console.log("La tarea no existe")
    }
}