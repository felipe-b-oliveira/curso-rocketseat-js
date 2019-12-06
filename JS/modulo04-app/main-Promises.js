// Promisses
var minhaPromise = function () {
    return new Promise(function (resolve, reject) {

        // Requisição AJAX
        var xhr = new XMLHttpRequest();

        // Requisição HTTP, neste caso tipo GET requisitando a URL da API
        xhr.open('GET', 'https://api.github.com/users/felipe-b-oliveira');
        xhr.send(null);

        // Mostra a o corpo da requisição depois de obtermos a resposta
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição')
                }
            }
        }
    });
}

minhaPromise()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    });
