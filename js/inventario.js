const tablaInventario = document.getElementById('tablaInventario');

function renderInventario(){

tablaInventario.innerHTML='';

productos.forEach(producto=>{

tablaInventario.innerHTML += `
<tr>
<td>${producto.nombre}</td>
<td>${producto.color}</td>
<td>${producto.talla}</td>
<td>${producto.stock}</td>
</tr>
`;

});

}

renderInventario();

$(document).ready(function(){

    $('#tablaInventarioCompleta').DataTable();

});