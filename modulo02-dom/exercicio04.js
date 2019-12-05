// Inicia arrays de nomes do exercicio
var nomes = ["Diego", "Gabriel", "Lucas"]

// TODO: Verificar utilidade
var btnElement = document.getElementById("btn");

// Function para adicionar o elemento na lista
function adicionarLista() {
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

function adicionar() {
    var inputElement = document.getElementById("nome").value;
    var containerElement = document.getElementById("list");

    if (inputElement == "") {
        return adicionar();
    }
    
    var listElement = document.createElement("li");
    var text2 = document.createTextNode(inputElement);

    listElement.appendChild(text2);

    containerElement.appendChild(listElement);

}

function limparInput() {
    document.getElementById("nome").value = "";
}

window.addEventListener('load', function (event) {
    adicionarLista();
});

btn.addEventListener('click', function (event) {
    limparInput();
});