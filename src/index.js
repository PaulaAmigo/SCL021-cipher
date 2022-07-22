import cipher from "./cipher.js";
window.cipher = cipher
const botonCifrar = document.getElementById("encode");

const botonDescifrar = document.getElementById("decode");

botonCifrar.addEventListener("click", seleccionar);
function seleccionar() {
  let mensajeOriginal = document.getElementById("texto1").value.toUpperCase();
  let input = document.getElementById("offset").value;

  document.getElementById("texto2").value = cipher.encode(
    input,
    mensajeOriginal
  );
}

botonDescifrar.addEventListener("click", presionar);
function presionar() {
  let mensajeOriginal = document.getElementById("texto1").value.toUpperCase();
  let input = document.getElementById("offset").value;

  document.getElementById("texto2").value = cipher.decode(
    input,
    mensajeOriginal
  );
}
