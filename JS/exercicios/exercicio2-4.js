var inputNome = document.createElement('input');
inputNome.setAttribute('type', 'text');
inputNome.setAttribute('id', 'idNome');
inputNome.setAttribute('name', 'nome');
inputNome.setAttribute('size', '20');
inputNome.setAttribute('placeholder', 'Digite um nome');
inputDiv.appendChild(inputNome);

var divInput = document.querySelector('#inputDiv');
var botaoNome = document.createElement('button');
var textoNomeBotao = document.createTextNode('Adicionar');
botaoNome.appendChild(textoNomeBotao);
botaoNome.style.marginLeft = '3px';
inputDiv.appendChild(botaoNome);

botaoNome.onclick = function () {
    var valorInput = document.querySelector('#idNome');
    valorInput = valorInput.value;
    var textoNome = document.createTextNode(valorInput);
    var itemNome = document.createElement('li');
    itemNome.appendChild(textoNome);
    listaNomes.appendChild(itemNome);
    divLista.appendChild(listaNomes);
    inputNome.value = "";
}