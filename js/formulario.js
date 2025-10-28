document.getElementById('contactoForm').addEventListener('submit', function(e) {
    const nombre = this.nombre.value.trim();
    const apellido = this.apellido.value.trim();
    const telefono = this.telefono.value.trim();

    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const soloNumeros = /^[0-9]+$/;

    if (!soloLetras.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        e.preventDefault();
    }
    if (!soloLetras.test(apellido)) {
        alert("El apellido solo puede contener letras y espacios.");
        e.preventDefault();
    }
    if (telefono && !soloNumeros.test(telefono)) {
        alert("El teléfono solo puede contener números.");
        e.preventDefault();
    }
});
