// =====================
// script.js - MODA JOVEN MIRAFLORES
// =====================

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


let precio = 25000;
if (precio >= 25000) {
  console.log("💰 Producto de alta calidad (precio >= 25000)");
} else {
  console.log("🛍️ Producto económico (precio < 25000)");
}


let descuento = 0;
for (let i = 0; i < 3; i++) {
  descuento++; 
  console.log("Descuento aumentado a: " + descuento + "%");
}


let stock = 5;
while (true) {
  console.log("🧥 Tenemos " + stock + " prendas disponibles");
  stock--;
  if (stock === 0) {
    console.log("❌ Sin stock disponible");
    break; 
  }
}


function mostrarHoraVisita() {
  const fecha = new Date();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  alert("🕒 Hora de tu visita: " + hora + ":" + (minutos < 10 ? "0" + minutos : minutos));
}

mostrarHoraVisita();
// =====================
// NUEVAS FUNCIONALIDADES
// =====================


const botonColor = document.getElementById("botonColor");

if (botonColor) {
  botonColor.addEventListener("click", () => {
    const colores = ["#1b1726", "#2a223a", "#3b2f5a", "#44355b", "#1f2937", "#222831"];
    const aleatorio = Math.floor(Math.random() * colores.length);
    document.body.style.backgroundColor = colores[aleatorio];
    alert("🌈 ¡El color del fondo ha cambiado!");
  });
}


const botonOferta = document.getElementById("botonOferta");

if (botonOferta) {
  botonOferta.addEventListener("click", () => {
    const ofertas = [
      "👕 ¡Lleva 2 camisetas y paga solo 1!",
      "👗 20% de descuento en ropa femenina hoy.",
      "🧢 Accesorios con el 30% de descuento.",
      "👟 Tenis deportivos a solo $49.900.",
      "🎒 Mochilas y bolsos con envío gratis."
    ];

    const indice = Math.floor(Math.random() * ofertas.length);
    alert("🎉 " + ofertas[indice]);
  });
}

function mostrarVestidos() {
  const contenedor = document.getElementById("masVestidos");
  if (contenedor.style.display === "none") {
    contenedor.style.display = "flex"; // cambia a "flex" para usar el layout de Bootstrap
    contenedor.classList.add("flex-wrap", "justify-content-center");
  } else {
    contenedor.style.display = "none"; // permite ocultarlo si se presiona otra vez
  }
}
