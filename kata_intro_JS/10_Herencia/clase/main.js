// superclase o clase padre
class Mascota {
  constructor(nombre, patas) {
    this.nombre = nombre
    this.patas = patas
  }

  comer() {
    return `${this.nombre}, esta comiendo`
  }
}


//  clase hija o subclase
class Michi extends Mascota {
  constructor(nombre, patas, raza) {
    // super ---> llama al método de la clase padre, en este caso, su constructor
    super(nombre, patas)
    this.raza = raza
  }

  ronronear() {
    return 'prrrr'
  }
}

class LomitoSuabe extends Mascota {
  constructor(nombre, patas, raza) {
    super(nombre, patas)
    this.raza = raza
  }

  ammsiedad() {
    return 'tengo ammsiedad y me hice pipí'
  }
}

const lomitoAmmsioso = new LomitoSuabe('Chems', 4, 'todo chiqito, todo panzón')
console.log(lomitoAmmsioso)
console.log(lomitoAmmsioso.nombre)
console.log(lomitoAmmsioso.raza)
console.log(lomitoAmmsioso.ammsiedad())
