document.addEventListener('DOMContentLoaded', function() {
    mostrarCarrito();
    document.getElementById('btnComprar').addEventListener('click', realizarCompra);
    document.getElementById('toggleTarjeta').addEventListener('change', toggleCamposTarjeta);
});

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoItems = document.getElementById('carritoItems');
    let total = 0;

    if (carrito.length === 0) {
        carritoItems.innerHTML = '<tr><td colspan="5" class="text-center">Tu carrito está vacío.</td></tr>';
        document.getElementById('totalPrice').textContent = total.toFixed(2);
        return;
    }

    let contenido = '';
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        contenido += `
            <tr>
                <td>${item.nombre}</td>
                <td>
                    <button class="btn-cantidad" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                    <span class="cantidad-display">${item.cantidad}</span>
                    <button class="btn-cantidad" onclick="cambiarCantidad(${item.id}, 1)">+</button>
                </td>
                <td>$${Math.round(item.precio)}</td>
                <td>$${Math.round(subtotal)}</td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarProducto(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });

    carritoItems.innerHTML = contenido;
    document.getElementById('totalPrice').textContent = Math.round(total);
}

function realizarCompra() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    limpiarMensajesError();
    const camposCompletos = validarCampos();

    if (carrito.length === 0) {
        document.getElementById('modalCarritoVacio').style.display = 'block';
        return;
    }

    if (!camposCompletos) {
        mostrarMensajeError("Todos los campos deben ser completados para realizar la compra");
        return;
    }

    ocultarMensajeError();

    document.getElementById('modalCompra').style.display = 'block';
    localStorage.removeItem('carrito');
    mostrarCarrito();
}

function ocultarMensajeError() {
    const mensajeError = document.getElementById('mensajeError');
    mensajeError.style.display = 'none';
}

function validarCampos() {
    const nombre = document.querySelector('input[placeholder="Nombre"]').value.trim();
    const email = document.querySelector('input[placeholder="Email"]').value.trim();
    const telefono = document.querySelector('input[placeholder="Teléfono"]').value.trim();
    const direccion = document.querySelector('input[placeholder="Dirección"]').value.trim();
    const numeroTarjeta = document.querySelector('input[placeholder="Número de Tarjeta"]').value.trim();
    const titularTarjeta = document.querySelector('input[placeholder="Titular de Tarjeta"]').value.trim();
    const cvv = document.querySelector('input[placeholder="CVV"]').value.trim();
    const dni = document.querySelector('input[placeholder="DNI del Titular"]').value.trim();

    let camposValidos = true;

    if (!nombre) {
        mostrarErrorCampo('input[placeholder="Nombre"]', "Este campo debe estar completo");
        camposValidos = false;
    }
    if (!email) {
        mostrarErrorCampo('input[placeholder="Email"]', "Este campo debe estar completo");
        camposValidos = false;
    }
    if (!telefono) {
        mostrarErrorCampo('input[placeholder="Teléfono"]', "Este campo debe estar completo");
        camposValidos = false;
    }
    if (!direccion) {
        mostrarErrorCampo('input[placeholder="Dirección"]', "Este campo debe estar completo");
        camposValidos = false;
    }
    if (!numeroTarjeta) {
        mostrarErrorCampo('input[placeholder="Número de Tarjeta"]', "Este campo debe estar completo");
        camposValidos = false;
    }
    if (!titularTarjeta) {
        mostrarErrorCampo('input[placeholder="Titular de Tarjeta"]', "Este campo debe estar completo");
        camposValidos = false;
    }
    if (!cvv) {
        mostrarErrorCampo('input[placeholder="CVV"]', "Este campo debe estar completo");
        camposValidos = false;
    }
    if (!dni) {
        mostrarErrorCampo('input[placeholder="DNI del Titular"]', "Este campo debe estar completo");
        camposValidos = false;
    }

    return camposValidos;
}

function mostrarErrorCampo(selector, mensaje) {
    const campo = document.querySelector(selector);
    campo.style.borderColor = 'red';
    if (!campo.nextElementSibling || !campo.nextElementSibling.classList.contains('error-message')) {
        const error = document.createElement('div');
        error.textContent = mensaje;
        error.style.color = 'red';
        error.classList.add('error-message');
        campo.parentNode.insertBefore(error, campo.nextElementSibling);
    }
}

function limpiarMensajesError() {
    const mensajesError = document.querySelectorAll('.error-message');
    mensajesError.forEach(mensaje => mensaje.remove());
    const campos = document.querySelectorAll('input');
    campos.forEach(campo => campo.style.borderColor = '');
}

function mostrarMensajeError(mensaje) {
    const mensajeError = document.getElementById('mensajeError');
    mensajeError.textContent = mensaje;
    mensajeError.style.color = 'red';
    mensajeError.style.display = 'block';
}

function volverPaginaPrincipal() {
    window.location.href = 'index.html';
}

function eliminarProducto(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(item => item.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

function togglePaymentForm() {
    const paymentForm = document.getElementById('paymentForm');
    paymentForm.classList.toggle('active');
}

function toggleCamposTarjeta() {
    const camposTarjeta = document.getElementById('camposTarjeta');
    camposTarjeta.style.display = camposTarjeta.style.display === 'none' ? 'block' : 'none';
}

function cambiarCantidad(id, delta) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = carrito.find(item => item.id === id);

    if (producto) {
        producto.cantidad += delta;
        if (producto.cantidad < 1) {
            producto.cantidad = 1; // Evita que la cantidad sea menor que 1
        }
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito(); // Actualiza la vista del carrito
}