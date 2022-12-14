import cipher from "./cipher.js";
window.cipher = cipher;
const botonCifrar = document.getElementById("encode");
const botonDescifrar = document.getElementById("decode");

//popup que es
const popup1 = document.querySelector("#popup1");
const queEs = document.querySelector(".queEs");
const cerrar1 = document.querySelector(".entendido");

queEs.addEventListener("click", () => {
  popup1.show();
});
cerrar1.addEventListener("click", () => {
  popup1.close();
});

//popup como funciona
const popup2 = document.querySelector("#popup2");
const comoFunciona = document.querySelector(".comoFunciona");
const cerrar2 = document.querySelector(".vamos");

comoFunciona.addEventListener("click", () => {
  popup2.show();
});
cerrar2.addEventListener("click", () => {
  popup2.close();
});

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
