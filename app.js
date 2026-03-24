let contador = 0;
const elemento = document.getElementById("contador");

const btnIncrementar = document.getElementById("incrementar");
const btnDecrementar = document.getElementById("decrementar");

btnIncrementar.addEventListener("click", function() {
    contador++;
    elemento.textContent = contador;

});

btnDecrementar.addEventListener("click", function() {
    contador--;
    elemento.textContent = contador;

});