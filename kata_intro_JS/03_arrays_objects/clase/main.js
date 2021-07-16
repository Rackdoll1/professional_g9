// -----> Array o arreglo <-------
var arreglo = [];  // literal notation
var arreglo2 = new Array();

let fruta = ['manzana', 'guayaba', 'pera', 'piña'];
fruta[4] = 'guayaba';

// -----> Métodos <-------

// .push() ---> agrega un elemento al final del array

fruta.push('mango');
fruta.push('uva');

// .pop() --- elimina el último elemento del array
fruta.pop();

let animales = [
  ['hipopotamo', 'jirafa', 'leon'],
  ['perro', 'gato']
];

console.log(animales[1][0]);

// -----> Objetos u Objects <-------

// object initializer
// -----> esto es un objeto literal
var myCar = {
  make: 'ford',
  wheel: 'yes',
  color: 'red',
  year: 1992
};

let persona = {
  nombre: 'Ricardo',
  edad: 23,
  cel: '+52 0102030405',
  musica: {
    regaeton: ['BB', 'Plan b', 'NJ'],
    trap: {
      mexicano: ['aleman', 'santa klan'],
      usa: ['drake', 'lil peep'],
      argentino: ['duki','ecko']
    }
  }
}
