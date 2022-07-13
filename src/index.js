import cipher from './cipher.js';

console.log(cipher);

let mensajeFinal = document.getElementById("texto2")

const botonCifrar = document.getElementById("encode")

const botonDescifrar = document.getElementById("decode")

botonCifrar.addEventListener("click", seleccionar)
function seleccionar(){ 
    let mensajeOriginal = document.getElementById("texto1").value.toUpperCase();
    let input = document.getElementById("shiftInput").value;
    
    document.getElementById("texto2").value = cipher.encode(mensajeOriginal, input);
    }

botonDescifrar.addEventListener("click", presionar)
function presionar (){
    let mensajeOriginal = document.getElementById("texto1").value.toUpperCase();
    let input = document.getElementById("shiftInput").value;

    document.getElementById("texto2").value = cipher.decode(mensajeOriginal, input);
}



const descrifrar = document.getElementById("descrifrar")
//Que muestre el mensaje descrifrado en el recuadro de resultado