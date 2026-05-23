function actualizarDashboard(){

document.getElementById('totalProductos').innerHTML = productos.length;
document.getElementById('totalVentas').innerHTML = ventas.length;

let stockBajo = 0;
let agotados = 0;

productos.forEach(producto=>{

if(producto.stock <= 0){
agotados++;
}
else if(producto.stock <= producto.stockMinimo){
stockBajo++;
}

});

document.getElementById('stockBajo').innerHTML = stockBajo;
document.getElementById('agotados').innerHTML = agotados;

}
