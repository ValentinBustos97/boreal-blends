carrito = [
    {id: 20, nombre: "loco", precio:20, cantidad:3}
]

function agregarProducto(nombre, precio, cantidad, array) {
    let ultimo = array.length
    let carro = { id: ultimo, nombre: nombre, precio: precio, cantidad: cantidad }
    array.push(carro)
}


agregarProducto("Nico", 2, 4, carrito)
agregarProducto("Valen", 3, 2, carrito)
agregarProducto("Tuvi", 4, 1, carrito)
agregarProducto("Debaja", 5, 2, carrito)
agregarProducto("Vaginas", 6, 2, carrito)
agregarProducto("Sueeee", 7, 9, carrito)

console.log(carrito)

function removerProducto(id, array) {
    array.splice(id, 1)
}
removerProducto(20, carrito)
console.log(carrito)


function totalCarrito(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total = array[i].precio*array[i].cantidad + total
    }
    return total
}

console.log(totalCarrito(carrito))

function listarProductos (array){
    return array
}
console.log(listarProductos(carrito))

function chequeoCarrito(array){
    if (array.length === 0){
        console.log("Carrito vacio ")
    } else {console.log("Carrito tiene productos")}
}
basura=[]
chequeoCarrito(carrito)