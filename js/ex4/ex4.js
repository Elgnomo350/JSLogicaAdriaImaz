let n1 = 6
switch (n1 % 3 === 0 || n1 % 7 === 0) {
  case true:
    switch (n1 % 3 === 0) {
      case true:
        console.log("el numero " + n1 + " Es divisible entre tres")
        break
      case false:
        console.log("el numero " + n1 + " NOO es div")
        break
    }
    switch (n1 % 7 === 0) {
      case true:
        console.log("el numero " + n1 + " Es divisible entre siete")
        break
      case false:
        console.log("el numero " + n1 + " NOO es div")
        break
    }
  break

  default:
    console.log("Valor no valido")
    break
}
