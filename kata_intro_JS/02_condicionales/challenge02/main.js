var firstPlayer = prompt('Bienvenido a piedra, papel o tijera. Por favor escriba una de esas tres opciones: ').toLowerCase();
var secondPlayer = prompt('Segundo jugador, por favor escriba una de esas tres opciones').toLowerCase();

if (firstPlayer === secondPlayer) {
  console.log('Ambos eligieron lo mismo. Es un empate.');
}

else if ((firstPlayer === 'piedra' && secondPlayer === 'papel') || (firstPlayer === 'papel' && secondPlayer === 'tijera') || (firstPlayer === 'tijera' && secondPlayer === 'piedra')) {
  console.log('Jugador 1 eligió '+ firstPlayer + ' y jugador 2 eligió ' + secondPlayer + '. Ganó jugador 2');
}
else if ((firstPlayer === 'piedra' && secondPlayer === 'tijera') || (firstPlayer === 'papel' && secondPlayer === 'piedra') || (firstPlayer ===       'tijera' && secondPlayer === 'papel')) {
  console.log('Jugador 1 eligió '+ firstPlayer + ' y jugador 2 eligió ' + secondPlayer + '. Ganó jugador 1');
}
else {
  console.error('No eligieron bien sus opciones :´(');
}
