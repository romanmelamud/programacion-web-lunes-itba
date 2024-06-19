function calcularImpuesto() {
    const categoria = document.getElementById('categoria').value;
    const monto = parseFloat(document.getElementById('monto').value);
    let porcentaje = 0;

    switch (categoria) {
        case 'a':
            porcentaje = 0.05;
            break;
        case 'b':
            porcentaje = 0.10;
            break;
        case 'c':
            porcentaje = 0.15;
            break;
        case 'd':
            porcentaje = 0.20;
            break;
        default:
            porcentaje = 0;
    }

    if (!isNaN(monto) && monto > 0) {
        const impuesto = monto * porcentaje;
        document.getElementById('resultado').innerText = `El impuesto a pagar es: $${impuesto.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, ingrese un monto válido.';
    }
}