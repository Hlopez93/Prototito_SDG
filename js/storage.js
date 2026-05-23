async function cargarDatosDemo(){

    // SI YA EXISTEN DATOS NO CARGA DEMO
    if(localStorage.getItem('productos')){
        return;
    }

    try{

        const response = await fetch('data/demo.json');

        const data = await response.json();

        localStorage.setItem(
            'productos',
            JSON.stringify(data.productos)
        );

        localStorage.setItem(
            'ventas',
            JSON.stringify(data.ventas)
        );

        localStorage.setItem(
            'clientes',
            JSON.stringify(data.clientes)
        );

        localStorage.setItem(
            'tiendas',
            JSON.stringify(data.tiendas)
        );

        // RECARGAR
        location.reload();

    }
    catch(error){

        console.error(
            'Error cargando demo:',
            error
        );

    }

}

cargarDatosDemo();

// CARGA STORAGE

let productos = JSON.parse(
    localStorage.getItem('productos')
) || [];

let ventas = JSON.parse(
    localStorage.getItem('ventas')
) || [];

let clientes = JSON.parse(
    localStorage.getItem('clientes')
) || [];

let tiendas = JSON.parse(
    localStorage.getItem('tiendas')
) || [];