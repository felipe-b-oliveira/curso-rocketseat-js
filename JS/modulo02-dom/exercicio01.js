
var btnElement = document.querySelector('body div#app button');

btnElement.onclick = function () {
    // Cria uma nova tag <p> para conter o quadrado na tela
    var squareElement = document.createElement("p");

    // Cria o quadrado com as dimensões e cor
    squareElement.style.width = "100px";
    squareElement.style.height = "100px";
    squareElement.style.backgroundColor = "coral";

    // Referencia a div app pelo id ao elemento container
    var containerElement = document.getElementById("app");

    // Adiciona o elemento square ao elemento container
    containerElement.appendChild(squareElement);
}