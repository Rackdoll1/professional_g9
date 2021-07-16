
// Ejercicio 1 maestros
const calificacionesFisica = [1,10,9,8,3,4,2,5,4,6,10,5,6]
const calificacionesMusica = [8, 9, 7, 8, 9, 9, 6, 1]

// --------> Clase Maestro <-------
class Maestro {
  constructor(nombre, materia) {
    this.nombre = nombre
    this.materia = materia
  }

  promedioGrupo(listaCalificaciones) {
    let promedio = 0
    for(const calificacion of listaCalificaciones) {
      promedio += calificacion
    }
     return promedio / listaCalificaciones.length
  }
}

class MaestroDeFisica extends Maestro {
  constructor(nombre, materia, antiguedad) {
    super(nombre, materia)
    this.antiguedad = Number(antiguedad)
  }
}

class MaestroDeMusica extends Maestro {
  constructor(nombre, materia, edad) {
    super(nombre, materia)
    this.edad = Number(edad)
  }
}

const maestroFisica = new MaestroDeFisica('El teacher F', 'Física', '8')
const maestroMusica = new MaestroDeMusica('Beethoven', 'Música', '42')

console.log(maestroFisica)
console.log(maestroFisica.antiguedad)
console.log(maestroFisica.promedioGrupo(calificacionesFisica))
console.log('\n')
console.log(maestroMusica)
console.log(maestroMusica.edad)
console.log(maestroMusica.promedioGrupo(calificacionesMusica))


// --------> Clase Construccion <-------

class Construccion {
  constructor(numPuertas, numVentanas, numPisos, direccion, altura, largoTerreno, anchoTerreno) {
    this.numPuertas = Number(numPuertas)
    this.numVentanas = Number(numVentanas)
    this.numPisos = Number(numPisos)
    this.direccion = direccion
    this.altura = Number(altura.replace(/[A-Za-z]/g,''))
    this.largoTerreno = Number(largoTerreno.replace(/[A-Za-z]/g,''))
    this.anchoTerreno = Number(anchoTerreno.replace(/[A-Za-z]/g,''))
  }

  metrosCuadrados() {
    console.log(`\nLargo de terreno: ${this.largoTerreno}\nAncho de terreno: ${this.anchoTerreno}`)
    console.log(`Metros cuadrados:`)
    return this.largoTerreno * this.anchoTerreno
  }

  getDireccion() {
    console.log('\nLa direccion del predio es:\n')
    return this.direccion
  }

  setDireccion(nuevaDireccion) {
    if(typeof nuevaDireccion === 'number') {
      nuevaDireccion = parseInt(nuevaDireccion)
    }else if(nuevaDireccion.charAt(0) === ' ' || nuevaDireccion.charAt(0) === '') {
      console.log('\nNo se ingresó una direccion válida')
      return
    }
    this.direccion = nuevaDireccion
    console.log('\nDireccion actualizada')
  }
}

class Casa extends Construccion {
  constructor(numPuertas, numVentanas, numPisos, direccion, altura, largoTerreno, anchoTerreno){
    super(numPuertas, numVentanas, numPisos, direccion, altura, largoTerreno, anchoTerreno)
    console.log('\nSe construyó una casa')
  }
}

class Edificio extends Construccion {
  constructor(numPuertas, numVentanas, numPisos, direccion, altura, largoTerreno, anchoTerreno){
    super(numPuertas, numVentanas, numPisos, direccion, altura, largoTerreno, anchoTerreno)
    console.log('\nSe construyó un edificio')
  }
}

const casita = new Casa('1', '4', '1', 'La cerrada de la perdición No.65', '4 m', '8m', '6 m')
const edificio1 = new Edificio('4', '20', '5', 'En la esquina de la calle No.24', '15m', '13 m', '10m')

console.log(casita)
console.log(casita.metrosCuadrados())
console.log(casita.getDireccion())
casita.setDireccion(1234)
console.log(casita.getDireccion())
casita.setDireccion("   ")
console.log(casita.getDireccion())
console.log(edificio1)
console.log(edificio1.metrosCuadrados())
console.log(edificio1.getDireccion())
edificio1.setDireccion('La otra esquina de la calle')
console.log(edificio1.getDireccion())


// -------> Clase Bebida <-------
class Bebida {
  constructor(tipo, cantidad) {
    this.tipo = tipo
    this.cantidad = `${cantidad} ml`
  }

  show() {
    return `Soy ${this.tipo}`
  }
}

class Cerveza extends Bebida {
  constructor(tipo, cantidad, porcentajeAlcohol) {
    super(tipo, cantidad)
    this.porcentajeAlcohol = `${porcentajeAlcohol}%`
  }
}

class Refresco extends Bebida {
  constructor(tipo, cantidad, azucar) {
    super(tipo, cantidad)
    this.azucar = `${azucar}g`
  }
}

const cheve = new Cerveza('cerveza', 350, 2.5)
const refresquito = new Refresco('refresco', 600, 20)
console.log(cheve)
console.log(cheve.show())
console.log(refresquito)
console.log(refresquito.show())
console.log('\n')

// ------> CLase Electrodomestico <--------
// 4.- Crea una superclase llamada Electrodoméstico con las
//     siguientes características:
//     a. Sus atributos son precio, color, consumoEnergetico
//        y capacidad (peso máximo)
//     b. El constructor solo debe pedir precio, color
//        y capacidad.
//     c. consumoEnergetico debe iniciar con valor de 100
//  Crea una subclase de Electrodomestico llamada Lavadora
//     con las siguientes características:
//     a. Su atributo es carga(kg de ropa), además de los
//        atributos heredados.
//     b. Crea el método precioFinal(). Este se calcula
//        multiplicando el consumoEnergetico por la carga.
class Electrodomestico {
  constructor(precio, color, capacidad) {
    this.precio = Number(precio)
    this.color = color
    this.consumoEnergetico = 100
    this.capacidad = capacidad
  }
}

class Lavadora extends Electrodomestico {
  constructor(precio, color, capacidad, carga) {
    super(precio, color, capacidad)
    this.carga = Number(carga)
    console.log('Se construyó una lavadora!')
  }

  precioFinal() {
    return this.consumoEnergetico * this.carga
  }
}

const washer = new Lavadora(8000, 'blanco', 15, 9)
console.log(washer)
console.log(`Precio final: ${washer.precioFinal()}`)
