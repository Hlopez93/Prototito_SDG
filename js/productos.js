const formProducto = document.getElementById('formProducto');
const productosGrid = document.getElementById('productosGrid');

formProducto.addEventListener('submit',function(e){

e.preventDefault();

const producto = {
nombre:document.getElementById('nombreProducto').value,
categoria:document.getElementById('categoriaProducto').value,
marca:document.getElementById('marcaProducto').value,
color:document.getElementById('colorProducto').value,
talla:document.getElementById('tallaProducto').value,
precio:document.getElementById('precioProducto').value,
stock:parseInt(document.getElementById('stockProducto').value),
stockMinimo:parseInt(document.getElementById('stockMinimo').value),
imagen:'img/productos/default.jpg'
};

productos.push(producto);

localStorage.setItem('productos',JSON.stringify(productos));

renderProductos();

formProducto.reset();

});

function renderProductos(){

productosGrid.innerHTML = '';

productos.forEach(producto=>{

productosGrid.innerHTML += `
<div class="product-card">
<h3>${producto.nombre}</h3>
<p>${producto.categoria}</p>
<p>${producto.color} - ${producto.talla}</p>
<p>Q ${producto.precio}</p>
<p>Stock: ${producto.stock}</p>
</div>
`;

});

actualizarDashboard();

}

renderProductos();
