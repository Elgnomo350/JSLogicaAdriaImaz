
function calcul(x) {
  let suma = 0;
  let n = 0;

  while (suma + (n + 1) <= x) {
    n++;
    suma += n;
  }
  return n;
}

console.log(calcul(15));
