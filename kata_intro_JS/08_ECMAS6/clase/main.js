(function () {

  // -------> ECMA 6 <-----------

  // let, es flexible
  let numero = 100
  console.log(numero)
  numero = 10000
  console.log(numero)

//  const, constante, no cambia
  const gatito = 'Lindo uwu'
  console.log(gatito)
  // si se intenta asignar un nuevo valor a gatito, marcará error la consola
  // gatito = 'xd'
  // console.log(gatito)

  // spread operator
  const numbers = [10,20,30]
  console.log(numbers)
  console.log(...numbers)
  // te muestra cada uno de los elementos de la estructura(en este caso arreglo)
   // como elementos individuales

  // String Template
  const name = 'Ricardo'
  const saludo = 'Hola'

  console.log(`${saludo} ${name}, como estás? Estas bien?`)
  // Es como un printf en java, dar formato a un string introduciendo las variables
  // OJO -> se debe usar comillas frances, las inclinadas ``

  // Mejora de soporte de unicode, emojis

  // arrow function
  const sumar = (x,y) => {
    // console.log(x + y) ---> solo muestra valor
    // normalmente hay que usar return para poder reutilizarla adecuadamente
    return x + y

  }

  console.log(sumar(10, 5))
  // al guardar un arrow function en una variable, se considera como una named function
  console.log(sumar(10, sumar(5, 5)))

})();
