function limpiar(){
    document.getElementById('formulario').reset();
}


function calcularTotalPagar() {
    // Obtener los valores del formulario
    var cantidad = parseInt(document.getElementById('cantidad').value);
    var categoria = document.getElementById('categoria').value;

    // Definir el precio por ticket
    var precioPorTicket = 200;

    // Calcular el descuento según la categoría del solicitante
    var descuento = 0;
    switch (categoria) {
        case 'estudiante':
            descuento = 0.8; // 80%
            break;
        case 'trainee':
            descuento = 0.5; // 50%
            break;
        case 'junior':
            descuento = 0.15; // 15%
            break;
        default:
            descuento = 0; // Sin descuento por defecto
            break;
    }

    // Calcular el total a pagar con descuento
    var totalPagar = cantidad * precioPorTicket * (1 - descuento);

    // Mostrar el resultado en el campo correspondiente
    document.getElementById('totalPagar').value = totalPagar.toFixed(2);
}
