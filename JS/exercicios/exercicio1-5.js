var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function exibirHabilidades(usuarios) {

  for (usuario of usuarios) {
      console.log(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(", ")}`);
  }
}

exibirHabilidades(usuarios);