// Inicia arrays de nomes do exercicio
var nomes = ["Diego", "Gabriel", "Lucas"]

// TODO: Verificar utilidade
var divElement = document.querySelector('body div#divList ul');

// Function para adicionar o elemento na lista
function addList() {
    var containerElement = document.getElementById("list");

    // Percorre o array de nomes
    for (var i = 0; i < nomes.length; i++) {

        // Cria um novo item de lista <li> com o vetor de nomes dentro
        var listElement = document.createElement("li");    
        var text = document.createTextNode(nomes[i]);

        // Adiciona o texto aos elementos da lista
        listElement.appendChild(text);

        // Adiciona o elemnto de lista <li> a lista <ul>
        containerElement.appendChild(listElement);
    }

}

window.addEventListener('load', function (event) {
    addList();
});