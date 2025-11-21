
function sumarNumeros(text) {
  let suma = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] >= '0' && text[i] <= '9') {
      suma += Number(text[i]);
    }
  }
  return suma;
}

console.log(sumarNumeros("a1b2c3"));
