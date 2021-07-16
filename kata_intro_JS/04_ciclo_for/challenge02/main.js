for (i = 0; i <= 100; i++) {
  if (i%2 === 0) {
    console.log(i + ": par")
  } else {
    console.log(i + ": impar")
  }
}

console.log('\n')

for (j = 1; j <= 100; j++) {
  var stringRespuesta = ''
  if (j%3 === 0) {
    stringRespuesta += 'fizz'
  } if (j%5 === 0) {
    stringRespuesta += 'buzz'
  }
  console.log(j + ' ' + stringRespuesta)
}
