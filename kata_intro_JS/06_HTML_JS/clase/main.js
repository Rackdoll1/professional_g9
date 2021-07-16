// estructura
// var nombre = document.getElementById('el_id_etiqueta')
// returns the element that has the ID attribute with the specified value.
// para manipular u obtener información de un elemento en un documento


var titulo = document.getElementById('titulo')
var parrafo = document.getElementById('parrafo')
var input = document.getElementById('input')
var boton = document.getElementById('boton')
var respuesta = document.getElementById('respuesta')

var card = document.getElementById('card')
var pizzaImg = document.getElementById('pizza')

console.log(titulo)
console.log(titulo.innerHTML)
console.log(parrafo)
console.log(boton)
console.log(respuesta)

// innerHTML -> pinta en el navegador; cambia o regresa el contenido de un elemento

// Con esta sintaxis cambias contenido de elemento
// titulo.innerHTML = 'Soy el titulo cambiado desde JS'

// Con esta sintaxis regresas el contenido del elemento
// titulo.innerHTML

function cambio() {
  titulo.innerHTML = 'Soy el titulo cambiado desde JS'
  parrafo.innerHTML = 'Soy el parrafo cambiado desde JS'
  respuesta.innerHTML = input.value

  card.classList.remove('none')
  pizzaImg.src = "https://cdn.queapetito.com/wp-content/uploads/2019/12/pizza-hawaiana-1.jpg"
  pizzaImg.classList.remove('none')
}

// para agregar manejador de eventos. Primer argumento es la accion a esperar que suceda
// en el elemento, segundo argumento es lo que se realizará con esa acción
// normalmente una función

boton.addEventListener('click', cambio)


// .classList -> enseña las clases que tienen mi etiqueta

//  .classList.remove('nombre_de_clase')
//  .classList.add('nombre_de_clase')
