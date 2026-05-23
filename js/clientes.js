const formCliente = document.getElementById('formCliente');
const tablaClientes = document.getElementById('tablaClientes');

formCliente.addEventListener('submit',function(e){

e.preventDefault();

const cliente = {
nombre:document.getElementById('nombreCliente').value,
telefono:document.getElementById('telefonoCliente').value,
correo:document.getElementById('correoCliente').value
};

clientes.push(cliente);

localStorage.setItem('clientes',JSON.stringify(clientes));

renderClientes();

formCliente.reset();

});

function renderClientes(){

tablaClientes.innerHTML='';

clientes.forEach(cliente=>{

tablaClientes.innerHTML += `
<tr>
<td>${cliente.nombre}</td>
<td>${cliente.telefono}</td>
<td>${cliente.correo}</td>
</tr>
`;

});

}

renderClientes();
