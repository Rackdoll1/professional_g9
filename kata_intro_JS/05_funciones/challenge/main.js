// (parametro) sacar el area de un cuadrado
    // (parametro) sacar el area de un rectangulo
    // (parametro) sacar el area de un triangulo
    // (parametro) edad, y decir si es mayor de edad o no
    // (parametro) un numero, decir si es 0, positvo o negatico
    // (parametro) que diga es es vocal o consonante

function areaCuadrado(x) {
  if(typeof(x) !== 'number') {
    return x + ' no es un número. Posiblemente sea string.'
  }else {
    return 'El área del cuadrado es ' + x*x
  }
}

function areaRectángulo(x, y) {
  if(typeof(x)!=='number' || typeof(y)!=='number') {
    return 'No se introdujeron números. Posiblemente sean string.'
  }else {
    return 'El área del rectángulo es ' + Math.abs(x*y)
  }
}

function areaTriangulo(b, h) {
  if(typeof(b)!=='number' || typeof(h)!=='number') {
    return 'No se introdujeron números. Posiblemente sean string.'
  }else {
    return 'El área del triángulo es ' + Math.abs(b*h/2)
  }
}

function esMayorDeEdad(x) {
  if(typeof(x) !== 'number') {
    return x + ' no es un número. Posiblemente sea string.'
  }else {
    if(x >= 18) {
      return 'Es mayor de edad.'
    }else {
      return 'No es mayor de edad.'
    }
  }
}

function valorNumeroEntero(x) {
  if(typeof(x) !== 'number') {
    return x + ' no es un número. Posiblemente sea string.'
  }else {
    if(x > 0) {
      return x + ' es un número positivo.'
    }else if(x < 0) {
      return x + ' es un número negativo.'
    }else {
      return 'Es cero.'
    }
  }
}

function vocalConsonante(letra) {
  if(typeof(letra) !== 'string') {
    return letra + ' no es una letra'
  }else {
    var letraF = letra.toLowerCase()
    if(letraF === 'a' || letraF === 'e' || letraF === 'i' || letraF === 'o' || letraF === 'u') {
      return 'Es vocal'
    }else {
      return 'Es consonante'
    }
  }
}


console.log(areaCuadrado(Number(prompt('Introduzca el lado del cuadrado:'))))
console.log('\n')
console.log(areaRectángulo(Number(prompt('Introduzca el primer lado del rectángulo:')), Number(prompt('Introduzca el segundo lado:'))))
console.log('\n')
console.log(areaTriangulo(Number(prompt('Introduzca la base del triángulo:')), Number(prompt('Introduzca su altura:'))))
console.log('\n')
console.log(esMayorDeEdad(Number(prompt('Introduzca una edad:'))))
console.log('\n')
console.log(valorNumeroEntero(Number(prompt('Introduzca un número para saber su valor:'))))
console.log('\n')
console.log(vocalConsonante(prompt('Introduzca una letra:')))
