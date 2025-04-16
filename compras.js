let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let carritoResumen = document.getElementById('carrito-resumen');
let totalResumen = document.getElementById('total-resumen');

function mostrarCarrito() {
    carritoResumen.innerHTML = '';
    let total = 0;

    if (carrito.length === 0) {
        carritoResumen.innerHTML = '<p>El carrito está vacío.</p>';
        totalResumen.textContent = '';
    } else {
        carrito.forEach(producto => {
            let elementoProducto = document.createElement('p');
            elementoProducto.textContent = producto.nombre + ' - RD$' + producto.precio;
            carritoResumen.appendChild(elementoProducto);
            total += producto.precio;
        });

        totalResumen.textContent = 'Total: RD$' + total;
    }
}

mostrarCarrito();
