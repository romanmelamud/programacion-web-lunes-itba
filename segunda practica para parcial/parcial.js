let nombre = document.getElementById("name")
let parrafo=document.getElementById("validarnombre")
function validarNombre(){
    if (nombre.value!=""){
        parrafo.textContent=""
        return
    }
    else{
        parrafo.textContent="Nombre vacio"
        parrafo.style.color="red"
        return
    }
}

let email = document.getElementById("email")
let gmail=document.getElementById("validaremail")
function validarEmail(){
    if (email.value==""){
        gmail.textContent="Escriba su email"
        parrafo.style.color="red"
        return}}

    for (let i =0;i<email.value.length;i++)

email.addEventListener("input",validarEmail)
nombre.addEventListener("input",validarNombre)

let click = document.getElementById("click")
let roman = document.getElementById("roman")
let cantidadClicks = 0

click.addEventListener("click",() =>{
    cantidadClicks+=1;
    roman.textContent=cantidadClicks
})


let colorBoton = document.
boton.addEventListener("click", )
function cambiarEstilo(){
    boton
}

function togglecolor(){
    let boton = document.getElementById("box")
    boton.style.background-color;"black"

}