// =====================
// script.js - MODA JOVEN MIRAFLORES
// =====================

// Mensaje de bienvenida
alert("👋 ¡Bienvenida a Moda Joven Miraflores! Disfruta nuestra página web.");

function validarFormulario() {
  const nombre = document.querySelector('input[name="nombre"]').value.trim();
  const correo = document.querySelector('input[name="correo"]').value.trim();


  if (nombre === "" || correo === "") {
    alert("⚠️ Por favor, completa todos los campos antes de enviar.");
    return false;
  } else {
    alert("✅ ¡Gracias por suscribirte, " + nombre + "!");
    return true;
  }
}


const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validarFormulario();
  });
}

// Mostrar hora de visita
function mostrarHoraVisita() {
  const fecha = new Date();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  alert("🕒 Hora de tu visita: " + hora + ":" + (minutos < 10 ? "0" + minutos : minutos));
}

mostrarHoraVisita();



// Botón cambiar color
const botonColor = document.getElementById("botonColor");

if (botonColor) {
  botonColor.addEventListener("click", () => {
    const colores = ["#1b1726", "#2a223a", "#3b2f5a", "#44355b", "#1f2937", "#222831"];
    document.body.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    alert("🌈 ¡El color del fondo ha cambiado!");
  });
}

// Botón ofertas
document.addEventListener("DOMContentLoaded", () => {
const botonOferta = document.getElementById("botonOferta");
const mensaje = document.getElementById("mensajeOferta");

if (botonOferta && mensaje) {
  botonOferta.addEventListener("click", () => {
    const ofertas = [
      "👕 ¡Lleva 2 camisetas y paga solo 1!",
      "👗 20% de descuento en ropa femenina hoy.",
      "🧢 Accesorios con el 30% de descuento.",
      "👟 Tenis deportivos a solo $49.900.",
      "🎒 Mochilas y bolsos con envío gratis."
    ];

    const ofertaSeleccionada = ofertas[Math.floor(Math.random() * ofertas.length)];
    mensaje.textContent = "🎉 " + ofertaSeleccionada;

    mensaje.style.transition = "all 0.3s";
    mensaje.style.transform = "scale(1.2)";
    setTimeout(() => { mensaje.style.transform = "scale(1)"; }, 300);
  });
}
});




// Mostrar más vestidos
function mostrarVestidos() {
  const contenedor = document.getElementById("masVestidos");
  contenedor.style.display = contenedor.style.display === "none" ? "flex" : "none";
}

function mostrarSandalias() {
  const contenedor = document.getElementById("masSandalias");
  if (contenedor.style.display === "none") {
    contenedor.style.display = "flex"; // o "block", según tu layout
  } else {
    contenedor.style.display = "none";
  }
}




// ==========================
// GENERADOR DE LISTA DE PRECIOS
// ==========================

fetch("productos.json")
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById("lista-precios");

    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("col");

      card.innerHTML = `
        <div class="card bg-dark text-white h-100 shadow border border-warning">
          <div class="card-body text-center">
            <h5 class="card-title fw-bold text-warning">${item.producto}</h5>
            <p class="card-text text-warning fw-bold">$${item.precio.toLocaleString()}</p>
            <span class="badge bg-warning text-dark">${item.categoria}</span>
          </div>
        </div>
      `;

      contenedor.appendChild(card);
    });
  })
  .catch(error => console.error("Error cargando precios:", error));
