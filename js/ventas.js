const formVenta = document.getElementById('formVenta');
const tablaVentas = document.getElementById('tablaVentas');

formVenta.addEventListener('submit',function(e){

e.preventDefault();

const venta = {
cliente:document.getElementById('clienteVenta').value,
producto:document.getElementById('productoVenta').value,
cantidad:document.getElementById('cantidadVenta').value,
precio:document.getElementById('precioVenta').value
};

venta.total = venta.cantidad * venta.precio;

ventas.push(venta);

localStorage.setItem('ventas',JSON.stringify(ventas));

renderVentas();

formVenta.reset();

});

function renderVentas(){

tablaVentas.innerHTML='';

ventas.forEach(venta=>{

tablaVentas.innerHTML += `
<tr>
<td>${venta.cliente}</td>
<td>${venta.producto}</td>
<td>Q ${venta.total}</td>
</tr>
`;

});

}

renderVentas();
