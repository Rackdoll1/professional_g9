// IIFE ---> Immediately Invoke Function Expressions
// Protege mis variables desde la consola del navegador

// (function () {
//   statements
// })();

// var nombre = document.getElementById('nombre');
// esto es altamente inseguro en navegador porque variable tiene alcance global
// incluir IIFE SIEMPRE

(function () {
  // buscar inputs
  var nombre = document.getElementById('nombre')
  // console.log(nombre)
  var email = document.getElementById('email')
  // console.log(email)
  var tel = document.getElementById('tel')
  // console.log(tel)
  var edad = document.getElementById('edad')
  // console.log(edad)

  var btnGuardar = document.getElementById('guardar')
  // console.log(btnGuardar)

  // la funcion valida que los campos que se pasaron como parametros no estén vacíos
  function formularioValido(name, mail, phone, age) {
    if(name === '' || mail === '' || phone === '' || age === '') {
      return false
    }
    return true
  }

  // describir lo que hará mi boton cuando se clickeé
  // function clickEnGuardar() {
  //   alert('Le dieron click al btn de guardar')
  // }

  // Escuchar cuando alguien le de click (evento de click)
  // btnGuardar.addEventListener('click', clickEnGuardar)

  // otra manera de escuchar el evento click:
  btnGuardar.addEventListener('click', function(){ // esto es una función ANONIMA
    // console.log(nombre.value)
    // console.log(email.value)
    // console.log(tel.value)
    // console.log(edad.value)

    // validar que los datos esten completos

    if (formularioValido(nombre.value, email.value, tel.value, edad.value)) {
      // Formulario completo
      // Agregar a la tabla los datos recolectados del formulario
      var tabla = document.querySelector('.table') // busca un tag que tenga la clase table
      // se puede buscar clase, id

      // crear una etiqueta <tr>
      var row = document.createElement('tr')
      row.classList.add('row')

      // dentro de la etiqueta <tr> aqui mero </tr>
      row.innerHTML = '<td class="column">' + nombre.value + '</td>'
      + '<td class="column">' + email.value + '</td>'
      + '<td class="column">' + tel.value + '</td>'
      + '<td class="column">' + edad.value + '</td>'

      // despues de preparar el elemento, agregarlo a la tabla "en el html"
      tabla.appendChild(row);

    } else {
      alert('Completa el formulario perro')
    }

  })

  // create JSON Object Mockup
  var arregloUsuariosFake = [
    usuario1 = {
      nombre: 'Nombre1',email: 'email1@gmail.com', tel: '1234561', edad: 21
    },
    usuario2 = {
      nombre: 'Nombre2', email: 'email2@gmail.com', tel: '1234562', edad: 38
    },
    usuario3 = {
      nombre: 'Nombre3', email: 'email3@gmail.com', tel: '1234563', edad: 45
    },
    usuario4 = {
      nombre: 'Nombre4', email: 'email4@gmail.com', tel: '1234564', edad: 67
    },
    usuario5 = {
      nombre: 'Nombre5', email: 'email5@gmail.com', tel: '1234565', edad: 32
    }
  ]

  for(i = 0; i < arregloUsuariosFake.length; i++) {
    var tabla = document.querySelector('.table')

    var row = document.createElement('tr')
    row.classList.add('row')

    // dentro de la etiqueta <tr> aqui mero </tr>
    row.innerHTML = '<td class="column">' + arregloUsuariosFake[i].nombre + '</td>'
    + '<td class="column">' + arregloUsuariosFake[i].email + '</td>'
    + '<td class="column">' + arregloUsuariosFake[i].tel + '</td>'
    + '<td class="column">' + arregloUsuariosFake[i].edad + '</td>'

    // despues de preparar el elemento, agregarlo a la tabla "en el html"
    tabla.appendChild(row);
  }


})();
