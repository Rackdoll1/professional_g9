var computerOptions = ['piedra', 'papel', 'tijera'];

var firstPlayer = prompt('Juega piedra, papel o tijera contra la computadora! Por favor escriba una de esas tres opciones: ').toLowerCase();

var computerPlayer = computerOptions[Math.floor(Math.random() * computerOptions.length)];


if (firstPlayer === computerPlayer) {
  console.log('Ambos eligieron lo mismo. Es un empate.');
}

else if ((firstPlayer === 'piedra' && computerPlayer === 'papel') || (firstPlayer === 'papel' && computerPlayer === 'tijera') || (firstPlayer === 'tijera' && computerPlayer === 'piedra')) {
  console.log('Elegiste '+ firstPlayer + ' y la computadora eligió ' + computerPlayer + '. Ganó la computadora. Sorry :(');
}
else if ((firstPlayer === 'piedra' && computerPlayer === 'tijera') || (firstPlayer === 'papel' && computerPlayer === 'piedra') || (firstPlayer ===       'tijera' && computerPlayer === 'papel')) {
  console.log('Elegiste '+ firstPlayer + ' y la computadora eligió ' + computerPlayer + '. Ganaste! :D');
}
else {
  console.error('No escribiste bien tu opción :´(');
}
