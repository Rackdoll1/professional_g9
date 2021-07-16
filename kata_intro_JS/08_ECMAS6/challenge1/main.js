(function(){

  // ----> palindromo <----
  const palindrome = () => {
    let oracion = prompt("Escribe una frase para saber si es palíndromo: ")
    let oracionSinEspacios = oracion.toLowerCase().split(" ").join("")
    let oracionReversa = oracionSinEspacios.split('').reverse().join("")
    console.log(`Ingresaste \"${oracion}\"\n como ejemplo. Es palindromo?`)

    return (oracionSinEspacios === oracionReversa ? true : false)
  }

  console.log(palindrome())

  console.log("\n")


// ---> pais mas largo <-----
  const longestCountry = (listaPaises) => {
    let paisMasLargo = listaPaises[0]

    for(const pais of listaPaises) {
      let espaciosARestar = 0
      let numeroPalabrasPais = pais.split(" ").length

      if(numeroPalabrasPais > 1) {
        espaciosARestar = numeroPalabrasPais - 1
      }
      if(pais.length - espaciosARestar > paisMasLargo.length) {
        paisMasLargo = pais
      }
    }
    return paisMasLargo
  }

  const paises = ["México","Panamá", "Guatemala", "El Salvador"]
  console.log(`Tu lista de paises es:\n ${[...paises]}`)
  console.log(`EL país más largo es: ${longestCountry(paises)}`)

  console.log("\n")

  // ---> pais mas largo2 <-----
  // TODO

  const longestCountry2 = (listaPaises) => {
    let countryLength = listaPaises.map(country => country.length)
    console.log(countryLength);
    let maxLength = Math.max(...countryLength)
    console.log(maxLength);
    let countryLargest = listaPaises.filter(country => country.length === maxLength)

    return countryLargest[0]
  }

  console.log(longestCountry2(paises))


  // ----> farenheit a celsius <-----
  const farenheitToCelsius = (grados) => {
    return ((grados - 32) / 1.8).toFixed(2)
  }

  let pruebaFar1 = 30
  let pruebaFar2 = 100
  let resultadoFar1 = farenheitToCelsius(pruebaFar1)
  let resultadoFar2 = farenheitToCelsius(pruebaFar2)

  console.log(`${pruebaFar1} grados Farenheit equivale a ${resultadoFar1} grados centígrados`)
  console.log(`${pruebaFar2} grados Farenheit equivale a ${resultadoFar2} grados centígrados`)

  console.log("\n")


  // ---> piedra, papel o tijera
  const juego = (_) => {
    // _ significa que no tiene argumentos, por convencion

    let firstPlayer = prompt('Bienvenido a piedra, papel o tijera. Por favor escriba una de esas tres opciones: ').toLowerCase();
    let secondPlayer = prompt('Segundo jugador, por favor escriba una de esas tres opciones').toLowerCase();

    if (firstPlayer === secondPlayer) {
      console.log('Ambos eligieron lo mismo. Es un empate.');
    }

    else if ((firstPlayer === 'piedra' && secondPlayer === 'papel') || (firstPlayer === 'papel' && secondPlayer === 'tijera') || (firstPlayer === 'tijera' && secondPlayer === 'piedra')) {
      console.log(`Jugador 1 eligió ${firstPlayer} y jugador 2 eligió ${secondPlayer}. Ganó jugador 2`);
    }
    else if ((firstPlayer === 'piedra' && secondPlayer === 'tijera') || (firstPlayer === 'papel' && secondPlayer === 'piedra') || (firstPlayer ===       'tijera' && secondPlayer === 'papel')) {
      console.log(`Jugador 1 eligió ${firstPlayer} y jugador 2 eligió ${secondPlayer}. Ganó jugador 1`);
    }
    else {
      console.error('No eligieron bien sus opciones :´(');
    }
  }

  // juego()

  console.log("\n")


  // ----->numero parametros enviados<------
  // rest parameters: permite a funcion aceptar numero indefinido de argumentos como un array
  const numeroParametros = (...args) => {
    // como finalmente el argumento en conjunto es un array , puedo sólo llamarlo
    return `El número de argumentos que recibí es ${args.length}\n`
  }

  console.log(numeroParametros(10, 30, 20, 45, 57))
  console.log(numeroParametros(2,5))
  console.log(numeroParametros(1, 45, 600, 1))


})()
