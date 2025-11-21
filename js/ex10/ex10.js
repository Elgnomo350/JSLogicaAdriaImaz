
function sumarMultiples() {
  let suma = 0;
  let i = 1;

  do {
    if (i % 3 === 0 || i % 5 === 0) {
      suma += i;
    }
    i++;
  } while (i <= 1000);
  return suma;
}

console.log(sumarMultiples());

function sumarMultiples1() {
  let suma = 0;
  let i = 1;

  do {
    if (i % 3 === 0 || i % 5 === 0) {
      suma += i;
    }
    i++;
  } while (i <= 5);
  return suma;
}

console.log(sumarMultiples1());
