// var noEsNumero = false;
//
// while (!noEsNumero) {
//   var num = parseInt(prompt('Por favor ingrese un número: '), 0);
//
//   if (isNaN(num)) {
//     console.log('Eso no es un número.');
//   }
//   else {
//     if (num%2 === 0) {
//       console.log('Es par.');
//     } else {
//       console.log('Es impar.');
//     }
//     noEsNumero = true;
//   }
// }

// --------> version sin bucle y menos código <-------

var num = parseInt(prompt('Por favor ingrese un número: '), 10);

// var num2 = Number(num) ----> se puede usar para convertir string a numero

if (isNaN(num)) {
  console.log('Eso no es un número.');
}
else if (num%2 === 0) {
  console.log('Es par.');
}
else {
  console.log('Es impar.');
}
