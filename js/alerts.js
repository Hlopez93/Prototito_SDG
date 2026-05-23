function renderAlertas(){

const alertas = document.getElementById('alertas');

alertas.innerHTML='';

productos.forEach(producto=>{

    if(producto.stock == 0){
        alertas.innerHTML += `
        <div class="product-card">
        ${producto.nombre} tiene agotado
        </div>
        `;
    }else if(producto.stock <= producto.stockMinimo){

        alertas.innerHTML += `
        <div class="product-card">
        ${producto.nombre} tiene stock bajo
        </div>
        `;
    }

});

}

renderAlertas();
