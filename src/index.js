import cipher from './cipher.js';

//console.log(cipher);

//let mensajeFinal = document.getElementById("texto2")

const botonCifrar = document.getElementById("encode")

const botonDescifrar = document.getElementById("decode")

botonCifrar.addEventListener("click", seleccionar)
function seleccionar(){ 
    let mensajeOriginal = document.getElementById("texto1").value.toUpperCase();
    let input = document.getElementById("offset").value;
    
    document.getElementById("texto2").value = cipher.encode(input, mensajeOriginal);
    }

botonDescifrar.addEventListener("click", presionar)
function presionar (){
    let mensajeOriginal = document.getElementById("texto1").value.toUpperCase();
    let input = document.getElementById("offset").value;

    document.getElementById("texto2").value = cipher.decode(input, mensajeOriginal);
}