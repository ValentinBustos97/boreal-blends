document.addEventListener('DOMContentLoaded', function() {
    initApp();
    actualizarContadorCarrito();

    // Agregar eventos a los botones del menú principal
    document.querySelector('.categories-nav .category-button[href="#blends"]').addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.getElementById('productos');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });

    document.querySelector('.categories-nav .category-button[href="#gift-box"]').addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector('.products-grid [data-nombre="Tea Box"]');
        if (targetElement) {
            const offset = -90; // Ajusta este valor según sea necesario
            const topPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    });

    document.querySelector('.categories-nav .category-button[href="#accesorios"]').addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector('.products-grid [data-nombre="Infusor de tela"]');
        if (targetElement) {
            const offset = -90; // Ajusta este valor según sea necesario
            const topPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    });
});

function initApp() {
    initMenuHamburguesa();
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

    // Navegación 
    sideMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

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
            precio: 5000,
            imagen: 'rosalindFranklin.png'
        },
        {
            id: 2,
            nombre: 'Lola Mora',
            descripcion: 'Blend premium con notas cítricas',
            precio: 5000,
            imagen: 'lolaMora.png'
        },
        {
            id: 3,
            nombre: 'Lady Di',
            descripcion: 'Blend premium con notas herbales',
            precio: 5000,
            imagen: 'ladyDi.png'
        },
        {
            id: 4,
            nombre: 'Juana Azurduy',
            descripcion: 'Blend premium con notas cítricas',
            precio: 5000,
            imagen: 'juanaAzurduy.png'
        },
        {
            id: 5,
            nombre: 'Frida Khalo',
            descripcion: 'Blend premium con notas frutales',
            precio: 5000,
            imagen: 'fridaKhalo.png'
        },
        {
            id: 6,
            nombre: 'Marie Curie',
            descripcion: 'Blend premium con notas cítricas',
            precio: 5000,
            imagen: 'marieCurie.png'
        },
        {
            id: 7,
            nombre: 'Cleopatra',
            descripcion: 'Blend premium con notas cítricas',
            precio: 5000,
            imagen: 'cleopatra.png'
        },
        {
            id: 8,
            nombre: 'Ana Frank',
            descripcion: 'Blend premium con notas tropicales',
            precio: 5000,
            imagen: 'anaFrank.png'
        },
        {
            id: 9,
            nombre: 'Cecilia Grierson',
            descripcion: 'Blend premium con notas de florales',
            precio: 5000,
            imagen: 'ceciliaGrierson.png'
        },
        {
            id: 10,
            nombre: 'Coco Chanel',
            descripcion: 'Blend premium con notas dulces',
            precio: 5000,
            imagen: 'cocoChanel.png'
        },
        {
            id: 11,
            nombre: 'Tea Box',
            descripcion: 'Caja de madera para regalo',
            precio: 48000,
            imagen: 'borealCaja2.png'
        },
        {
            id: 12,
            nombre: 'Infusor de tela',
            descripcion: 'Infusor de lienzo',
            precio: 2500,
            imagen: 'borealAccesorios.png'
        }
    ];

    productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('product-card');
        productoElement.setAttribute('data-nombre', producto.nombre);
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

    // Desplazamiento a productos específicos
    document.querySelector('.gift-box-button').addEventListener('click', () => {
        const targetElement = productosGrid.querySelector('[data-nombre="Tea Box"]');
        if (targetElement) {
            const offset = -90; 
            const topPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    });

    document.querySelector('.accesorios-button').addEventListener('click', () => {
        const targetElement = productosGrid.querySelector('[data-nombre="Infusor de tela"]');
        if (targetElement) {
            const offset = -90; 
            const topPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
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
            ingredientes: 'Saquito de té hecho en lienzo 100% reutilizabile.',
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

// Carrito
function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
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
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
    mostrarNotificacion('Producto agregado al carrito');
}

function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
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

function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.classList.add('notificacion');
    notificacion.textContent = mensaje;
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.remove();
    }, 2000);
}

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        actualizarContadorCarrito();
    }
});

















