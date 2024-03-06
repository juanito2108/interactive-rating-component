let boton = document.getElementById("toggleButton");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let primeraCarta = document.getElementById("pricipalContainer");
let segundaCarta = document.getElementById("segundaCarta");
let elementos = document.querySelectorAll("#one, #two, #three, #four, #five");
let contadorElemento = document.getElementById("contador");
let contador = 0;

boton.addEventListener("click", function () {
  if (primeraCarta.classList.contains("oculto")) {
    primeraCarta.classList.remove("oculto");
    segundaCarta.style.display = "none";
  } else {
    primeraCarta.classList.add("oculto");
    segundaCarta.style.display = "flex";
  }
});

elementos.forEach(function (elemento) {
  elemento.addEventListener("click", function () {
    if (elemento.classList.contains("carta-seleccionada")) {
      elemento.style.backgroundColor = ""; // Restaurar el color de fondo predeterminado
      elemento.classList.remove("carta-seleccionada");
      contador--;
    } else {
      elemento.style.backgroundColor = "hsl(217, 12%, 63%)"; // Cambiar el color de fondo
      elemento.classList.add("carta-seleccionada"); // Si se necesita para otros estilos o fines de referencia
      contador++;
    }
    contadorElemento.textContent = contador;
  });
});
