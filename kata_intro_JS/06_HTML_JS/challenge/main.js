// usar bootstrap
//  pregutnar nombre
// preguntar direccion
// preguntar telefono
// preguntar si quieren pizza con o sin
//  respuestas: si || no -> caso de error
// mostrar las resputas en una card

var nombreUsuario = document.getElementById('InputName')
var direccionUsuario = document.getElementById('InputAddress')
var telefonoUsuario = document.getElementById('InputTelephone')
var conPina = document.getElementById('Radios1')
var sinPina = document.getElementById('Radios2')

var cardUsuario = document.getElementById('cardUsuario')
var pizza = document.getElementById('pina')

var order = document.getElementById('sendOrder')
var fotoPizza = document.getElementById('fotoPizza')

function showOrder() {
  document.getElementById('nombre').innerHTML = 'Nombre: ' + nombreUsuario.value
  document.getElementById('direccion').innerHTML = 'Entregar en: ' + direccionUsuario.value
  document.getElementById('telefono').innerHTML = 'Contacto: ' + telefonoUsuario.value

  if(conPina.checked) {
    pizza.innerHTML = 'Pediste pizza con piña. Campeón :D'
    fotoPizza.src = 'https://cdn.queapetito.com/wp-content/uploads/2019/12/pizza-hawaiana-1.jpg'
  }else if (sinPina.checked){
    pizza.innerHTML = 'Pediste pizza sin piña.\nSe vale tener mal gusto :/'
    fotoPizza.src = 'https://www.pedidosya.com.ar/blog/wp-content/uploads/sites/5/2018/05/pizza-calabresa.jpg'
  }

  fotoPizza.classList.remove('d-none')
  cardUsuario.classList.remove('d-none')
}

order.addEventListener('click', showOrder)
