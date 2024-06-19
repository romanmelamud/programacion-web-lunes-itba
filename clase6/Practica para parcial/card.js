function cambiarColor(miboton){
    var miboton = document.getElementById("miBoton");
    var colorBoton = miboton.style.backgroundColor
    if (colorBoton ==='blue'){
    miboton.style.backgroundColor='grey';}
    else{
        miboton.style.backgroundColor='blue';}
    }
miboton.addEventListener('click',cambiarColor(miboton));
