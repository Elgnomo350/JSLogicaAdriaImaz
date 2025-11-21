
//cambiar de dos en dos???
function canviarN(num) {
  let text = String(num);
  let resultat = "";

  for (let i = 0; i < text.length; i += 2) {
    resultat += text[i + 1] + text[i];
  }
  return resultat;
}

console.log(canviarN(123456));
