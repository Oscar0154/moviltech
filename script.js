let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let contadorCarrito = document.getElementById('cart-count');
let itemsCarrito = document.getElementById('cart-items');

function agregarAlCarrito(nombreProducto, precioProducto) {
    carrito.push({ nombre: nombreProducto, precio: precioProducto });
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function actualizarCarrito() {
    contadorCarrito.textContent = carrito.length;
    itemsCarrito.innerHTML = '';

    if (carrito.length === 0) {
        itemsCarrito.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        carrito.forEach(producto => {
            let elementoProducto = document.createElement('p');
            elementoProducto.textContent = producto.nombre;
            itemsCarrito.appendChild(elementoProducto);
        });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
}

actualizarCarrito();
