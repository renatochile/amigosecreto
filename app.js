// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const nombreAmigoInput = document.getElementById('amigo');
const listaAmigosUL = document.getElementById('listaAmigos');
const resultadoSorteoUL = document.getElementById('resultado');
const amigos = [];

// Event listener para la tecla "Enter"
nombreAmigoInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    agregarAmigo();
  }
});

function agregarAmigo() {
  const nombre = nombreAmigoInput.value.trim();
  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }
  amigos.push(nombre);
  const nuevoLi = document.createElement('li');
  nuevoLi.textContent = nombre;
  listaAmigosUL.appendChild(nuevoLi);
  nombreAmigoInput.value = ''; // Limpiar el input después de agregar
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos en la lista para el sorteo.');
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];
  resultadoSorteoUL.innerHTML = ''; // Limpiar resultados anteriores
  const resultadoLi = document.createElement('li');
  resultadoLi.textContent = `Amigo secreto: ${amigoSecreto}`;
  resultadoSorteoUL.appendChild(resultadoLi);
}