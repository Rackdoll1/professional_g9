// clase
class Animal {
  // constructor y atributos
  constructor(especie, numPatas, sonido) {
    this.especie = especie
    this.numPatas = numPatas
    this.sonido = sonido
  }

  // métodos
  comer(alimentacion) {
    return `Los animales de la especie ${this.especie} se alimentan de ${alimentacion}`
  }
}

const gato = new Animal('gato', 4, 'miau')
const tarantula = new Animal('tarántula', 8, 'kumo desu ga')
const pez = new Animal('pez', 0, 'blu blu blu')

console.log(gato)
console.log(tarantula.comer("bichos"))

// pilares del POO:
//  1) Abstraccion -- usar los atributos mínimamente necesarios para modelar cada objeto
//  2) Encapsulamiento -- Se previene acceso a cada clase por cualquiera, se proporcionan metodos para eso. Proteger estado interno del objeto
//  3) Herencia -- compartir atributos y metodos de otra clase mas general para poder dar funcionalidad mas especifica a otra clase
//  4) Polimorfismo -- Sobreescritura de métodos
