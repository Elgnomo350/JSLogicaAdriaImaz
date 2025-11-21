
function parellSenar(x) {
  for (let i = 0; i <= x; i++) {
    if (i % 2 === 0) {
      console.log(i + " parell");
    } else {
      console.log(i + " senar/inpars");
    }
  }
}

parellSenar(10);
