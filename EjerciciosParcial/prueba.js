document.addEventListener('DOMContentLoaded', function() {
  initApp();
  actualizarContadorCarrito();
  initCarrito();

  const btnComprar = document.getElementById('btnComprar');

  if (btnComprar) {
      btnComprar.addEventListener('click', function() {
          mostrarModalCompra();
      });
  } else {
      console.error('Botón "Comprar" no encontrado');
  }
});

function initApp() {
  initMenuHamburguesa();
  initCarrito();
  initCategorias();
  cargarProductos();
}

// Menú hamburguesa
function initMenuHamburguesa() {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const sideMenu = document.getElementById('sideMenu');
  
  hamburgerMenu.addEventListener('click', function(e) {
      e.stopPropagation();
      hamburgerMenu.classList.toggle('active');
      sideMenu.classList.toggle('active');
  });

  document.addEventListener('click', function(e) {
      if (!sideMenu.contains(e.target) && !hamburgerMenu.contains(e.target)) {
          hamburgerMenu.classList.remove('active');
          sideMenu.classList.remove('active');
      }
  });

  // Navegación suave
  sideMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
              hamburgerMenu.classList.remove('active');
              sideMenu.classList.remove('active');
          }
      });
  });
}

// Productos
function cargarProductos() {
  const productosGrid = document.querySelector('.products-grid');
  const productos = [
      {
          id: 1,
          nombre: 'Rosalind Franklin',
          descripcion: 'Blend premium con notas florales',
          precio: 1500,
          imagen: 'rosalindFranklin.png'
      },
      {
          id: 2,
          nombre: 'Lola Mora',
          descripcion: 'Blend premium con notas cítricas',
          precio: 1500,
          imagen: 'lolaMora.png'
      },
      {
          id: 3,
          nombre: 'Lady Di',
          descripcion: 'Blend premium con notas herbales',
          precio: 1500,
          imagen: 'ladyDi.png'
      },
      {
          id: 4,
          nombre: 'Juana Azurduy',
          descripcion: 'Blend premium con notas cítricas',
          precio: 1500,
          imagen: 'juanaAzurduy.png'
      },
      {
          id: 5,
          nombre: 'Frida Khalo',
          descripcion: 'Blend premium con notas frutales',
          precio: 1500,
          imagen: 'fridaKhalo.png'
      },
      {
          id: 6,
          nombre: 'Marie Curie',
          descripcion: 'Blend premium con notas cítricas',
          precio: 1500,
          imagen: 'marieCurie.png'
      },
      {
          id: 7,
          nombre: 'Cleopatra',
          descripcion: 'Blend premium con notas cítricas',
          precio: 1500,
          imagen: 'cleopatra.png'
      },
      {
          id: 8,
          nombre: 'Ana Frank',
          descripcion: 'Blend premium con notas tropicales',
          precio: 1500,
          imagen: 'anaFrank.png'
      },
      {
          id: 9,
          nombre: 'Cecilia Grierson',
          descripcion: 'Blend premium con notas de florales',
          precio: 1500,
          imagen: 'ceciliaGrierson.png'
      },
      {
          id: 10,
          nombre: 'Coco Chanel',
          descripcion: 'Blend premium con notas dulces',
          precio: 1500,
          imagen: 'cocoChanel.png'
      },
      {
          id: 11,
          nombre: 'Tea Box',
          descripcion: 'Caja de madera para regalo',
          precio: 1500,
          imagen: 'borealCaja2.png'
      },
      {
          id: 12,
          nombre: 'Infusor de tela',
          descripcion: 'Infusor de lienzo',
          precio: 1500,
          imagen: 'borealAccesorios.png'
      }
  ];

  productos.forEach(producto => {
      const productoElement = document.createElement('div');
      productoElement.classList.add('product-card');
      productoElement.innerHTML = `
          <img src="./imagenes/${producto.imagen}" alt="${producto.nombre}">
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <p class="precio">$${producto.precio}</p>
          <div class="button-container">
              <button class="ver-caracteristicas" onclick="mostrarCaracteristicas('${producto.nombre}')">
                  Ver características
              </button>
              <button class="agregar-carrito" onclick="agregarAlCarrito({
                  id: ${producto.id},
                  nombre: '${producto.nombre}',
                  precio: ${producto.precio}
              })">
                  Agregar al carrito
              </button>
          </div>
      `;
      productosGrid.appendChild(productoElement);
  });

  // Desplazamiento a la tercera fila
  document.querySelectorAll('.gift-box-button, .accesorios-button').forEach(button => {
      button.addEventListener('click', () => {
          const thirdRow = productosGrid.children[10]; // Ajusta el índice según sea necesario
          const offset = 100; // Ajusta este valor según sea necesario
          const topPosition = thirdRow.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: topPosition, behavior: 'smooth' });
      });
  });
}

// Función para mostrar características
function mostrarCaracteristicas(nombreProducto) {
  // Objeto con las características de cada blend
  const caracteristicas = {
      'Lady Di': {
          ingredientes: 'Melisa, cedrón, manzanilla y caléndula',
          categoria: 'Relax'
      },
      'Frida Khalo': {
          ingredientes: 'Té rojo, cubos de manzana y canela en rama',
          categoria: 'Placeres'
      },
      'Juana Azurduy': {
          ingredientes: 'Té verde, limón y jengibre',
          categoria: 'Detox'
      },
      'Coco Chanel': {
          ingredientes: 'Té negro, cedrón, coco y naranja',
          categoria: 'Placeres'
      },
      'Cecilia Grierson': {
          ingredientes: 'Té verde, melisa y lavanda',
          categoria: 'Relax'
      },
      'Ana Frank': {
          ingredientes: 'Té rojo, hibiscus, cranberrys, pasas de uva y mandarina',
          categoria: 'Placeres'
      },
      'Rosalind Franklin': {
          ingredientes: 'Té rojo, pétalos de rosa, rosa mosqueta e hibiscus',
          categoria: 'Placeres'
      },
      'Cleopatra': {
          ingredientes: 'Té verde, flores de manzanilla y naranja',
          categoria: 'Placeres'
      },
      'Lola Mora': {
          ingredientes: 'Té negro, naranja, cascarillas de cacao y chips de chocolate',
          categoria: 'Placeres'
      },
      'Marie Curie': {
          ingredientes: 'Té verde, boldo y limón',
          categoria: 'Detox'
      },
      'Tea Box': {
          ingredientes: 'Caja de madera con 6 blends a elección, 2 infusores de tela reutilizables, posa infusor de cerámica y guía para preparar la infusión.',
          categoria: 'Gifts'
      },
      'Infusor de tela': {
          ingredientes: 'Saquito de té hecho en lienzo 100% reutilizable.',
          categoria: 'Accesorios'
      }
  };

  const modal = document.createElement('div');
  modal.classList.add('modal-caracteristicas');
  modal.innerHTML = `
      <div class="modal-caracteristicas-content">
          <div class="caracteristicas-header">
              <h3>${nombreProducto}</h3>
              <button onclick="this.closest('.modal-caracteristicas').remove()">&times;</button>
          </div>
          <div class="caracteristicas-body">
              <p><strong>Ingredientes:</strong> ${caracteristicas[nombreProducto].ingredientes}</p>
              <p><strong>Categoría:</strong> ${caracteristicas[nombreProducto].categoria}</p>
          </div>
      </div>
  `;
  document.body.appendChild(modal);
  modal.style.display = 'flex';

  modal.addEventListener('click', function(e) {
      if (e.target === modal) {
          modal.remove();
      }
  });
}

// Carrito
let carrito = [];

function initCarrito() {
  const btnAbrirCarrito = document.getElementById('btnAbrirCarrito');
  const btnCerrarCarrito = document.getElementById('btnCerrarCarrito');
  const modalCarrito = document.getElementById('modalCarrito');
  const btnComprar = document.getElementById('btnComprar');

  if (btnAbrirCarrito) {
      btnAbrirCarrito.addEventListener('click', () => {
          modalCarrito.style.display = 'flex';
          actualizarCarrito();
      });
  }

  if (btnCerrarCarrito) {
      btnCerrarCarrito.addEventListener('click', () => {
          modalCarrito.style.display = 'none';
      });
  }

  if (modalCarrito) {
      modalCarrito.addEventListener('click', (e) => {
          if (e.target === modalCarrito) {
              modalCarrito.style.display = 'none';
          }
      });
  }

  if (btnComprar) {
      btnComprar.addEventListener('click', realizarCompra);
  } else {
      console.error('Botón "Comprar" no encontrado');
  }
}

function agregarAlCarrito(producto) {
  const itemExistente = carrito.find(item => item.id === producto.id);
  
  if (itemExistente) {
      itemExistente.cantidad++;
  } else {
      carrito.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          cantidad: 1
      });
  }
  
  actualizarContadorCarrito();
  mostrarNotificacion('Producto agregado al carrito');
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
  actualizarContadorCarrito();
}

function actualizarCarrito() {
  const carritoModal = document.querySelector('.modal-content');
  if (!carritoModal) return;

  let contenido = `
      <h2>Tu Carrito</h2>
      <div class="carrito-header">
          <span>Producto</span>
          <span>Cantidad</span>
          <span>Precio</span>
          <span>Total</span>
          <span></span>
      </div>
  `;
  
  let total = 0;

  carrito.forEach((item, index) => {
      const subtotal = item.precio * item.cantidad;
      total += subtotal;
      contenido += `
          <div class="carrito-item">
              <span class="producto-nombre">${item.nombre}</span>
              <div class="cantidad-controls">
                  <button class="btn-cantidad" onclick="cambiarCantidad(${index}, -1)">-</button>
                  <span class="cantidad-display">${item.cantidad}</span>
                  <button class="btn-cantidad" onclick="cambiarCantidad(${index}, 1)">+</button>
              </div>
              <span class="precio-unitario">$${item.precio}</span>
              <span class="precio-total">$${subtotal}</span>
              <button onclick="eliminarDelCarrito(${index})" class="btn-eliminar">
                  <i class="fas fa-trash-alt"></i>
              </button>
          </div>
      `;
  });

  contenido += `
      <div class="carrito-footer">
          <div id="totalPrice">Total: $${total}</div>
          <div class="informacion-cliente">
              <h3>Información del Cliente</h3>
              <input type="text" placeholder="Nombre" id="nombreCliente" required>
              <input type="email" placeholder="Email" id="emailCliente" required>
              <input type="tel" placeholder="Teléfono" id="telefonoCliente" required>
              <input type="text" placeholder="Dirección" id="direccionCliente" required>
          </div>
          <div class="metodo-pago">
              <h3>Medios de Pago</h3>
              <label>
                  <input type="radio" name="metodoPago" value="tarjeta" onclick="toggleTarjetaInfo(true)">
                  Tarjeta de crédito o débito
              </label>
              <div class="tarjeta-info">
                  <input type="text" placeholder="Número de tarjeta" id="numeroTarjeta" required>
                  <input type="text" placeholder="Titular de tarjeta" id="titularTarjeta" required>
                  <input type="text" placeholder="Vencimiento (MM/AA)" id="vencimientoTarjeta" required>
                  <input type="text" placeholder="CVV" id="cvvTarjeta" required>
                  <input type="text" placeholder="DNI del titular" id="dniTitular" required>
              </div>
          </div>
          <button id="btnComprar">Comprar</button>
      </div>
  `;

  carritoModal.innerHTML = contenido;
}

function toggleTarjetaInfo(show) {
  const tarjetaInfo = document.querySelector('.tarjeta-info');
  tarjetaInfo.style.display = show ? 'block' : 'none';
}

function cambiarCantidad(index, cambio) {
  if (carrito[index].cantidad + cambio > 0) {
      carrito[index].cantidad += cambio;
      actualizarCarrito();
      actualizarContadorCarrito();
  }
}

function actualizarContadorCarrito() {
  const contador = document.querySelector('.cart-count');
  if (contador) {
      const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
      contador.textContent = totalItems;
      
      if (totalItems > 0) {
          contador.style.display = 'block';
      } else {
          contador.style.display = 'none';
      }
  }
}

function mostrarModalCompra() {
  const modalCompra = document.getElementById('modalCompra');
  if (modalCompra) {
      modalCompra.style.display = 'block';
  } else {
      console.error('Modal de compra no encontrado');
  }
}

function volverPaginaPrincipal() {
  const modal = document.getElementById('modalCompra');
  modal.style.display = 'none';
  // Aquí puedes redirigir a la página principal si es necesario
  // window.location.href = 'pagina_principal.html';
}

function mostrarNotificacion(mensaje, esError = false) {
  const notificacion = document.createElement('div');
  notificacion.classList.add('notificacion');
  notificacion.style.color = esError ? 'red' : 'green';
  notificacion.style.position = 'fixed';
  notificacion.style.top = '20px';
  notificacion.style.left = '50%';
  notificacion.style.transform = 'translateX(-50%)';
  notificacion.style.backgroundColor = 'white';
  notificacion.style.padding = '10px';
  notificacion.style.border = '1px solid';
  notificacion.style.borderColor = esError ? 'red' : 'green';
  notificacion.textContent = mensaje;
  document.body.appendChild(notificacion);
  
  setTimeout(() => {
      notificacion.remove();
  }, 3000);
}

// Categorías
function initCategorias() {
  document.querySelectorAll('.category-button').forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });
}

// Notificaciones
function mostrarNotificacion(mensaje) {
  const notificacion = document.createElement('div');
  notificacion.classList.add('notificacion');
  notificacion.textContent = mensaje;
  document.body.appendChild(notificacion);
  
  setTimeout(() => {
      notificacion.remove();
  }, 2000);
}

function realizarCompra() {
  console.log('Botón "Comprar" presionado');
  const metodoPagoSeleccionado = document.querySelector('input[name="metodoPago"]:checked');
  const camposCliente = ['nombreCliente', 'emailCliente', 'telefonoCliente', 'direccionCliente'];
  const camposTarjeta = ['numeroTarjeta', 'titularTarjeta', 'vencimientoTarjeta', 'cvvTarjeta', 'dniTitular'];

  if (!metodoPagoSeleccionado) {
      alert('Debe seleccionar su medio de pago');
      return;
  }

  let campos = metodoPagoSeleccionado.value === 'tarjeta' ? [...camposCliente, ...camposTarjeta] : camposCliente;
  let camposValidos = true;

  campos.forEach(id => {
      const campo = document.getElementById(id);
      if (!campo.value.trim()) {
          campo.setCustomValidity('Este campo es obligatorio');
          camposValidos = false;
      } else {
          campo.setCustomValidity('');
      }
      campo.reportValidity();
  });

  if (!camposValidos) {
      alert('Todos los campos deben ser completados');
      return;
  }

  mostrarModalCompra();
  carrito = [];
  actualizarCarrito();
  document.getElementById('modalCarrito').style.display = 'none';
}
