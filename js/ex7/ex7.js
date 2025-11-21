
function ordenar(a, b, c) {
  let primer, segon, tercer;

  if (a >= b && a >= c) {
    primer = a;
    if (b >= c) {
      segon = b;
      tercer = c;
    } else { segon = c; tercer = b; }

  } else if (b >= a && b >= c) {
    primer = b;
    if (a >= c) { segon = a; tercer = c;
    } else { segon = c; tercer = a; }

  } else {
    primer = c;
    if (a >= b) {
      segon = a;
      tercer = b;
    } else {
      segon = b;
      tercer = a;
    }
  }
  return [primer, segon, tercer];
}

console.log(ordenar(4, 9, 1)); // [9, 4, 1]
