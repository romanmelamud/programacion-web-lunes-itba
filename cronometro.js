window.onload = function () {
    function iniciarCronometroEmpleado(idEmpleado, fechaInicio) {
        if (!fechaInicio) {
            return; // Salir de la función si no hay fecha de inicio
        }

        function actualizarCronometroEmpleado() {
            var ahora = new Date();
            var diferenciaTiempo = ahora.getTime() - fechaInicio;

            var dias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
            var anios = Math.floor(dias / 365);

            var tiempoTranscurrido = anios + (anios === 1 ? " año" : " años");

            var cronometro = document.getElementById('cronometro-' + idEmpleado);
            if (cronometro) {
                cronometro.innerHTML = "En la empresa hace " + tiempoTranscurrido;
            }
        }

        setInterval(actualizarCronometroEmpleado, 1000);
        actualizarCronometroEmpleado();
    }

    iniciarCronometroEmpleado("empleado1", new Date("2005-11-29T00:00:00Z").getTime());
    iniciarCronometroEmpleado("empleado2", new Date("2015-01-29T00:00:00Z").getTime());
    iniciarCronometroEmpleado("empleado3", new Date("1999-08-29T00:00:00Z").getTime());
    iniciarCronometroEmpleado("empleado4", new Date("2002-01-05T14:14:00Z").getTime());
    // En el caso de empleado2, no se especifica fecha de inicio, por lo que no se mostrará el cronómetro
};
