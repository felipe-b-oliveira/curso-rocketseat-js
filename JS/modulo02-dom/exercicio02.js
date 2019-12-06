var btnElement = document.querySelector('body div#app button');

function addSquare() {
    // Cria uma nova tag <p> para conter o quadrado na tela
    var squareElement = document.createElement("p");

    // Cria o quadrado com as dimensões e cor
    squareElement.style.width = "100px";
    squareElement.style.height = "100px";
    squareElement.style.backgroundColor = getRandomColor();

    // Referencia a div app pelo id ao elemento container
    var containerElement = document.getElementById("app");

    squareElement.addEventListener('mouseover', function (event) {
        squareElement.style.backgroundColor = getRandomColor();
    });

    // Adiciona o elemento square ao elemento container
    containerElement.appendChild(squareElement);
}

// Funcao fornecida pelo exercício
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var newColor = getRandomColor(); // #E943F0

btnElement.addEventListener('click', function (event) {
    addSquare();
});

// <div onmouseover=newColor>
