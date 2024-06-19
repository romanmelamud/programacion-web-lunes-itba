function validarFormulario() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var errorMessage = '';

    if (!name || !email || !subject || !message) {
        errorMessage += 'Por favor complete todos los campos.\n';
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        errorMessage += 'El correo electrónico ingresado no es válido.\n';
    }

    if (errorMessage) {
        document.getElementById('error-message').innerText = errorMessage;
        document.getElementById('error-message').style.display = 'block';
        return false;
    } else {
        document.getElementById('error-message').style.display = 'none';
        return true;
    }
}
