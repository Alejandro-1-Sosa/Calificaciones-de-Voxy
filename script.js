// Fecha de inicio (77 días a partir de hoy)
const fechaInicio = new Date();
fechaInicio.setDate(fechaInicio.getDate() + 77);

function actualizarContador() {
    const ahora = new Date();
    const tiempoRestante = fechaInicio - ahora;

    const segundos = Math.floor((tiempoRestante / 1000) % 60);
    const minutos = Math.floor((tiempoRestante / 1000 / 60) % 60);
    const horas = Math.floor((tiempoRestante / 1000 / 60 / 60) % 24);
    const dias = Math.floor(tiempoRestante / 1000 / 60 / 60 / 24);

    document.getElementById("contador").innerHTML = `Faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos.`;

    if (tiempoRestante < 0) {
        document.getElementById("contador").innerHTML = "¡Tiempo expirado!";
        clearInterval(intervalo);
    }
}

actualizarContador();
const intervalo = setInterval(actualizarContador, 1000);

// Obtener elementos por sus IDs
const unidadesTitulo = document.getElementById("Unidades").querySelector("h2");
const unidadesTabla = document.getElementById("Unidades").querySelector("table");

const clasesTitulo = document.getElementById("Clases").querySelector("h2");
const clasesTabla = document.getElementById("Clases").querySelector("table");

// Agregar eventos de clic a los títulos
unidadesTitulo.addEventListener("click", () => {
  toggleTabla(unidadesTabla);
});

clasesTitulo.addEventListener("click", () => {
  toggleTabla(clasesTabla);
});

// Función para alternar la visibilidad de la tabla
function toggleTabla(tabla) {
  tabla.classList.toggle("oculto");
}

// Ocultar los Datos Personales 
const datosDiv = document.getElementById("datos-esquina");
datosDiv.addEventListener("click", () => {
   if(datosDiv.style.display === "none"){
    datosDiv.style.display = "block";
   } else {
    datosDiv.style.display = "none";
   }

});

function toggleDatos() {
  const datosDiv = document.getElementById("datos-personales");
  if (datosDiv.style.display === "none") {
      datosDiv.style.display = "block";
  } else {
      datosDiv.style.display = "none";
  }
}
