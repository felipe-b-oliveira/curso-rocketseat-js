function experiencia(anos) {

  var exp = 'Erro';

  switch (anos) {
      case 0:
      case 1: exp = 'Iniciante';
          break;
      case 2:
      case 3: exp = 'Intermediário';
          break;
      case 4:
      case 5:
      case 6: exp = 'Avançado';
          break;
  }

  if (anos >= 7) {
    exp = 'Jedi Master';
  }
  console.log(exp);
}

var anosEstudo = -10;
experiencia(anosEstudo);