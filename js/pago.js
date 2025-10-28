document.addEventListener("DOMContentLoaded", () => {
  const inputPrecio = document.getElementById("precio");
  const radios = document.querySelectorAll("input[name='metodo_pago']");

  // Recuperar total desde localStorage
  const total = localStorage.getItem("totalPago");
  if (total && inputPrecio) {
    inputPrecio.value = `$${parseInt(total).toLocaleString()}`;
  }

  // Mostrar QR según método de pago
  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      document.querySelectorAll(".qr").forEach(img => img.style.display = "none");
      const seleccionado = document.getElementById(`qr-${radio.value}`);
      if (seleccionado) seleccionado.style.display = "block";
    });
  });

  localStorage.removeItem("carrito");
});
