function temHabilidade(skills) {
  var possui = false;

  for (var i = 0; i <= skills.length - 1; i++) {
    if (skills.indexOf("Javascript") !== -1) {
      possui = true;
    }
    else {
      possui = false;
    }
  }

  return possui;
}
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));
 