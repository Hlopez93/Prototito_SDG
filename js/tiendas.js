const formTienda = document.getElementById('formTienda');
const listaTiendas = document.getElementById('listaTiendas');

formTienda.addEventListener('submit',function(e){

e.preventDefault();

const tienda = {
nombre:document.getElementById('nombreTienda').value,
direccion:document.getElementById('direccionTienda').value,
telefono:document.getElementById('telefonoTienda').value
};

tiendas.push(tienda);

localStorage.setItem('tiendas',JSON.stringify(tiendas));

renderTiendas();

formTienda.reset();

});

function renderTiendas(){

listaTiendas.innerHTML='';

tiendas.forEach(tienda=>{

listaTiendas.innerHTML += `
<div class="product-card">
<h3>${tienda.nombre}</h3>
<p>${tienda.direccion}</p>
<p>${tienda.telefono}</p>
</div>
`;

});

}

renderTiendas();
