const botonContacto = document.querySelector("#botonContacto");
const mensajeContacto = document.querySelector("#mensajeContacto");
const anio = document.querySelector("#anio");

anio.textContent = new Date().getFullYear();

botonContacto.addEventListener("click", () => {
  mensajeContacto.textContent = "Correo: contacto@electroservicio.com";
});
