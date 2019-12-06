// Inicia arrays de nomes do exercicio
var nomes = ["Diego", "Gabriel", "Lucas"]

// Uso no Event Listener 'click'
var btnElement = document.getElementById("btn");

// Uso no Event Listener 'keyup'
var inputEnterElement = document.getElementById("nome");

// Function para printar lista na tela
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

// Function para adicionar elemento no final da lista
function adicionar() {
    var inputElement = document.getElementById("nome").value;
    var containerElement = document.getElementById("list");

    /*Se o input estiver vazio, não adiciona o item da lista e retorna 
    para o início da function*/
    if (inputElement == "") {
        return adicionar();
    }
    
    var listElement = document.createElement("li");
    var text2 = document.createTextNode(inputElement);

    listElement.appendChild(text2);

    containerElement.appendChild(listElement);

}

// Function para limpar o input
function limparInput() {
    document.getElementById("nome").value = "";
}

window.addEventListener('load', function (event) {
    adicionarLista();
});

btn.addEventListener('click', function (event) {
    limparInput();
});

// Listener para adicionar item quando o Enter for pressionado
inputEnterElement.addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) {
        adicionar();
        limparInput()
    }
});