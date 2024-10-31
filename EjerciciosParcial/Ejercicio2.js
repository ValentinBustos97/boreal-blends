carrito = [];
let productosDisponibles = [
    { id: 0, nombre: "Manzana", precio: 10 },
    { id: 1, nombre: "Banana", precio: 5 },
    { id: 2, nombre: "Naranja", precio: 7 },
    { id: 3, nombre: "Pera", precio: 8 },
    { id: 4, nombre: "Uva", precio: 12 }
];

function agregarProducto(id, cantidad) {
    let producto = productosDisponibles[id];

    let productoEnCarrito = {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: producto.cantidad,
    };
    carrito.push(productoEnCarrito);
} 

function removerProducto(id) {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === id) {
            carrito.splice(i, 1);
            return;
        }
    }
}

function totalCarrito() {
    let total = 0
    for (let i = 0; i < carrito.length; i++) {
        total = total + carrito[i].precio * carrito[i].cantidad;
    }
    return total;
}

function listarProductos () {
    if (carrito.length == 0) {
        console.log ( "El carrito esta vacio"); }
        else {
            for ( let i = 0 ; i< carrito.length ; i++) { 
            console.log ( 
                "Nombre: "+ carrito[i].nombre +
                "Precio: "+ carrito[i].precio +
                "Cantidad: "+ carrito[i].cantidad 
            );
        }
    }
}

function verificarCarrito() { 
    if (carrito.length == 0 ) {
        console.log ( "El carrito esta vacio"); }
        else { console.log ("El carrito tiene productos");

        }
    }

