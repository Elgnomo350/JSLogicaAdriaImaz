
function patro() {

  /*como en java con un doble for aun que es complicado lo tenemos mas fresco
  y asi se como se hace para luego las arrays */
  for (let fila = 1; fila <= 5; fila++) {
    let text = "";
    for (let col = 1; col <= fila; col++) {
      text += "* ";
    }
    console.log(text);
  }
}

patro();
