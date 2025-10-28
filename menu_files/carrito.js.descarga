document.addEventListener("DOMContentLoaded", () => {
    // Elementos del DOM
    const botones = document.querySelectorAll(".btn-wsp"); // botones "Agregar al carrito"
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total-carrito");
    const contadorCarrito = document.getElementById("contador-carrito");
    const vaciarBtn = document.getElementById("vaciar-carrito");
    const carritoDiv = document.getElementById("carrito");
    const btnCarrito = document.getElementById("btn-carrito");
    const btnPagar = document.getElementById("btn-pagar");
 
    // Verificar que exista lo básico
    if (!listaCarrito || !totalCarrito || !contadorCarrito || !carritoDiv || !btnCarrito) {
        console.warn("Algunos elementos del carrito no se encuentran en el DOM");
        return;
    }

    // Recuperar carrito desde localStorage
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Helper para convertir precios tipo "$20.000" a número 20000
    function parsePrice(precioStr) {
        if (!precioStr) return 0;
        const limpio = precioStr
            .replace(/\$/g, "")
            .replace(/\s/g, "")
            .replace(/\./g, "")
            .replace(/,/g, "");
        const n = parseInt(limpio, 10);
        return isNaN(n) ? 0 : n;
    }

    // Actualiza la UI del carrito y almacena en localStorage
    function actualizarCarrito() {
        listaCarrito.innerHTML = "";
        let total = 0;

        carrito.forEach((item, idx) => {
            const li = document.createElement("li");
            li.textContent = `${item.nombre} — ${item.precio}`;

            // botón eliminar
            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "✖";
            btnEliminar.style.marginLeft = "8px";
            btnEliminar.addEventListener("click", () => {
                carrito.splice(idx, 1);
                actualizarCarrito();
            });

            li.appendChild(btnEliminar);
            listaCarrito.appendChild(li);

            total += parsePrice(item.precio);
        });

        totalCarrito.textContent = `$${total.toLocaleString()}`;
        contadorCarrito.textContent = carrito.length;

        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    // Mostrar/Ocultar carrito
    btnCarrito.addEventListener("click", () => {
        carritoDiv.classList.toggle("mostrar");
        const visible = carritoDiv.classList.contains("mostrar");
        carritoDiv.setAttribute("aria-hidden", String(!visible));
    });

    // 🚀 Escuchar clics en los botones "Agregar al carrito"
    botones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const card = e.target.closest(".card");
            const nombre = card.querySelector("h2").textContent;
            const precio = card.querySelector(".price").textContent;

            carrito.push({ nombre, precio });
            actualizarCarrito();

            // mostrar carrito automáticamente
            carritoDiv.classList.add("mostrar");
            carritoDiv.setAttribute("aria-hidden", "false");
        });
    });

    // Vaciar carrito
    vaciarBtn.addEventListener("click", () => {
        carrito = [];
        actualizarCarrito();
    });

   // Botón pagar abre otra página
if (btnPagar) {
  btnPagar.addEventListener("click", () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    // Calcular total
    let total = carrito.reduce((suma, item) => {
      return suma + parsePrice(item.precio);
    }, 0);

    // Guardar total y carrito en localStorage
    localStorage.setItem("totalPago", total);
    localStorage.setItem("carritoCompleto", JSON.stringify(carrito));

    // Redirigir a página de pago
    window.location.href = "pago.html";
  });
}

 
});
