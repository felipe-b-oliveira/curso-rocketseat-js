function gerarCor() {
  var caracteres = "0123456789ABCDEF";
  var cor = "#";
  for (let i = 0; i < 6; i++) {
      cor = cor + caracteres[Math.floor(Math.random() * 16)];
  }
  return cor;
}