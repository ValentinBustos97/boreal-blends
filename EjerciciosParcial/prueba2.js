let productosDisponibles = [
    { id: 0, nombre: "Manzana", precio: 10 },
    { id: 1, nombre: "Banana", precio: 5 },
    { id: 2, nombre: "Naranja", precio: 7 }
];

let carrito = [];

function agregarProducto(id, cantidad) {
    // Asumimos que el producto siempre está disponible
    let producto = productosDisponibles[id];

    let productoEnCarrito = {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad
    };

    carrito.push(productoEnCarrito);
}
/*agregarProducto(0, 3);
agregarProducto(1, 5);
agregarProducto(2, 6);
//console.log(carrito); */

function removerProducto(nombre) {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre === nombre) {
            carrito.splice(i, 1);

        }
    }
}
removerProducto("Naranja");
//console.log(carrito);

function totalCarrito() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total = total + carrito[i].precio * carrito[i].cantidad;
    }
    return total;
}
//console.log(totalCarrito());

function mostrarTodos() {
    if (carrito.length === 0) {
        console.log("El carrito esta vacio");
    } else {

        for (let i = 0; i < carrito.length; i++) {
            console.log(
                "Producto: " + carrito[i].nombre,
                "Precio: " + carrito[i].precio,
                "Cantidad: " + carrito[i].cantidad
            )
        }
    }
}
//mostrarTodos();

function verificarCarr () {
    if (carrito.length===0) {
        console.log("El carrito esta vacio");
    } else {console.log("El carrito tiene productos")};
}
verificarCarr();




/*
function totalCarrito() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio * carrito[i].cantidad;
    }
    return total;
}

function listarProductos() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío");
    } else {
        for (let i = 0; i < carrito.length; i++) {
            console.log(
                "Producto:", carrito[i].nombre,
                "- Precio:", carrito[i].precio,
                "- Cantidad:", carrito[i].cantidad
            );
        }
    }
}

function verificarCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío");
    } else {
        console.log("El carrito tiene productos");
    }
}

// Ejemplo de uso:

// Agregar productos al carrito
agregarProducto(0, 3);  // Añadir 3 unidades de Manzana
agregarProducto(1, 2);  // Añadir 2 unidades de Banana

// Listar productos del carrito
listarProductos();

// Calcular el total del carrito
console.log("Total del carrito:", totalCarrito());

// Verificar si el carrito tiene productos
verificarCarrito();

// Eliminar un producto
removerProducto(0);

// Listar productos después de eliminar uno
listarProductos();*/
