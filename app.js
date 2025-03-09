// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const agregarAmigo = () => {
  let nombre = document.getElementById("amigo");
  if (nombre.value === "") {
    nombre.focus();
    snackbar("Debe ingresar un nombre");
    return;
  }
  amigos.push(nombre.value);
  mostrarAmigos();
  document.getElementById("amigo").value = "";
  nombre.focus();
  console.log(nombre.value);
};

const mostrarAmigos = () => {
  let amigosList = document.getElementById("listaAmigos");
  amigosList.innerHTML = "";
  amigos.forEach((amigo) => {
    amigosList.innerHTML += `<li>${amigo}</li>`;
  });
};

const sortearAmigo = () => {
    if (amigos.length < 2) {
        snackbar("Debe ingresar al menos dos amigos");
        return;
    }
  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById("resultado").innerHTML = amigoSorteado;
};

const snackbar = (mensaje) => {
  let snackbarElement = document.getElementById("snackbar");
  snackbarElement.className = "show";
  snackbarElement.innerHTML = mensaje;
  setTimeout(function () {
    snackbarElement.className = snackbarElement.className.replace("show", "");
  }, 3000);
};