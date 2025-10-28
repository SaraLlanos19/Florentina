document.addEventListener("DOMContentLoaded", function () {
    const sugerencias = [
        { nombre: "🏠 Inicio", url: "inicio.html" },
        { nombre: "📖 Menú", url: "menu.html" },
        { nombre: "🎯 Misión", url: "quienes-somos.html#mision" },
        { nombre: "🌟 Visión", url: "quienes-somos.html#vision" },
        { nombre: "📞 Contáctanos", url: "contactanos.html" },
        { nombre: "🛒 Hacer un pedido", url: "menu.html" }                
    ];

    const input = document.getElementById("buscador");
    const listaResultados = document.getElementById("resultados");

    function mostrarSugerencias(filtradas) {
        listaResultados.innerHTML = "";
        filtradas.forEach(item => {
            const li = document.createElement("li");
            const enlace = document.createElement("a");
            enlace.href = item.url;
            enlace.textContent = item.nombre;
            enlace.style.textDecoration = "none";
            enlace.style.color = "#333";
            li.appendChild(enlace);
            listaResultados.appendChild(li);
        });
    }

    input.addEventListener("focus", () => {
        mostrarSugerencias(sugerencias);
    });

    input.addEventListener("input", () => {
        const texto = input.value.toLowerCase().trim();
        if (texto === "") {
            mostrarSugerencias(sugerencias);
        } else {
            const filtrados = sugerencias.filter(item =>
                item.nombre.toLowerCase().includes(texto)
            );
            mostrarSugerencias(filtrados);
        }
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".buscador-navegacion")) {
            listaResultados.innerHTML = "";
        }
    });
});
