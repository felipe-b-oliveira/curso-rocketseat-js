axios.get('https://api.github.com/users/felipe-b-oliveira')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    });
