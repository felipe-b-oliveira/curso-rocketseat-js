function listarRepos() {
  var buscarRepos = function() {
  return new Promise(function(resolve, reject) {
    var user = document.getElementById("user").value;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${user}/repos`);
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
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
    console.warn(error);
  });
}