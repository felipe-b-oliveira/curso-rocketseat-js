function mostrarCarregamento() {
  var elementoDeCarregamento = document.createElement('li');
  elementoDeCarregamento.setAttribute("id", "listaCarregamento");
  var carregamento = document.createTextNode('Carregando...');
  elementoDeCarregamento.appendChild(carregamento);
  document.body.appendChild(elementoDeCarregamento);
}

function removerCarregamento() {
  var listaCarregamento = document.querySelector("#listaCarregamento");
  listaCarregamento.remove();  
  // console.log('fim');
}

function listarRepos() {
  var buscarRepos = function() {
  return new Promise(function(resolve, reject) {
    var user = document.getElementById("user").value;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${user}/repos?page=1&per_page=10000`);

    xhr.onloadstart = function() {
      mostrarCarregamento();
      // console.log('inicio');
    }

    xhr.onloadend = function() {
      removerCarregamento();
    }

    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else if (xhr.status === 404) {
          reject('Usuario inexistente');
        } else {
          reject('Erro na requisição');
        }
      }
    }
  });
}

buscarRepos()
  .then(function(response) {
    for (i = 0; i < response.length; i++) {

      var elementoLista = document.createElement("li"); 
      var conteudoLista = document.createTextNode(response[i].name);
      elementoLista.appendChild(conteudoLista);
      document.body.appendChild(elementoLista);

      //console.log(response[i].name);
    }
  })
  .catch(function(error) {
    alert(error);
    //console.warn(error);
  });
}