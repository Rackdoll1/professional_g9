// -------> Estructura de una función

// --> función sin parámetros
// function nombreFuncion() {
//   ---> instrucciones de la función
//   console.log('Función sin parámetros xd')
// }

//  --> función con parámetros
// function nombreFuncion2(x,y) {
//   ---> instrucciones de la función
//   console.log('Función con parámetros: ' + x + ' y ' + y)
// }

var nombreG = 'Ricardo'

function saludo(nombre) {
  console.log('Hola ' + nombre + ', saludirijillos')
}

saludo(nombreG)
saludo()

function suma(x = 0, y = 0, z = 0) {
  if(x !== undefined && y !== undefined) {
    console.log(x + y)
  }else if(typeof(x)=== 'number') {
    console.log(x + y, 'Es un valor numérico')
  }else if(typeof(x)=== 'string') {
    console.log(x, 'Es una cadena')
  }
  console.log(x + y +z)
}

console.log('\n')

suma(nombreG)

// ----------> objetos literales <----------
let objeto1 = {
  banda: 'Saint Pepsi',
  genero: 'lofi'
}

// ------> objeto por método <---------+
let objeto2 = new Object()
  objeto2.banda = 'Daft Punk'
  objeto2.genero = 'electro dance'
