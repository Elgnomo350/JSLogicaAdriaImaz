
function patroImparell() {
  for (let fila = 1; fila <= 5; fila++) {

    if (fila % 2 === 0) {
      continue;
    }
    let text = "";
    for (let col = 1; col <= fila; col++) {
      text += "* ";
    }
    console.log(text);
  }
}

patroImparell();

