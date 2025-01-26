// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo"); // Captura el input del usuario
  const nombre = input.value.trim(); // Elimina espacios en blanco al inicio y final

  if (nombre === "") {
    alert("Por favor, inserte un nombre válido."); // Validar entrada vacía
    return;
  }

  amigos.push(nombre); // Agregar el nombre al array
  input.value = ""; // Limpiar el campo de entrada
  actualizarLista(); // Actualizar la lista visual
}

// Función para actualizar la lista en el DOM
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpia la lista actual

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li"); // Crea un nuevo elemento <li>
    li.textContent = `${index + 1}. ${amigo}`; // Agrega el nombre con su posición
    lista.appendChild(li); // Añade el elemento a la lista
  });
}

// Función para realizar el sorteo de un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("La lista de amigos está vacía. Por favor, agregue al menos un nombre.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Índice aleatorio
  const amigoSorteado = amigos[indiceAleatorio]; // Nombre del amigo sorteado

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`; // Mostrar el resultado
}
