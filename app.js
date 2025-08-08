// Crear un array para almacenar los nombres
let amigos = [];

// Implementa una función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let amigo = document.getElementById("amigo").value;

    // Validar la entrada
    if (amigo.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
    } else {
        // Actualizar el array de amigos
        amigos.push(amigo);

        // Limpiar el campo de entrada
        document.getElementById("amigo").value = "";
        actualizarLista();
    }
}

// Implementa una función para actualizar la lista de amigos
function actualizarLista() {
    // Obtener el elemento de la lista  
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


//Implementar una fucnión para sortear los amigos
function sortearAmigo() {
    // Verificar si hay amigos para sortear
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    // Seleccionar un amigo al azar
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrara el resultado
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}