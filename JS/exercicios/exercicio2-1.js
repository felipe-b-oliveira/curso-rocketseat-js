var divBotao = document.querySelector('#buttonDiv');

var botao = document.createElement('button');
botao.setAttribute('id', 'idBotao');
botao.style.marginBottom = '10px';

var textoBotao = document.createTextNode('Criar quadrado');
botao.appendChild(textoBotao);
divBotao.appendChild(botao);

botao.onclick = function () {

    var divCaixa = document.createElement('div');

    divCaixa.style.width = '100px';
    divCaixa.style.height = '100px';
    divCaixa.style.backgroundColor = '#F00';
    divCaixa.style.marginBottom = '2px';
    divCaixa.style.marginTop = '2px';


    divCaixa.onmouseover = function () {
        divCaixa.style.backgroundColor = gerarCor();
    }

    divBotao.appendChild(divCaixa);
}