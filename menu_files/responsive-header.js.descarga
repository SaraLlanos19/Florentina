document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const hamburguesa = document.querySelector('.hamburguesa');
    const menuNavegacion = document.querySelector('.menu-navegacion');
    const body = document.body;
    
    // Función para alternar el menú
    function toggleMenu() {
        hamburguesa.classList.toggle('activo');
        menuNavegacion.classList.toggle('activo');
        
        // Prevenir el scroll cuando el menú está abierto
        if (menuNavegacion.classList.contains('activo')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }
    
    // Event listener para el botón hamburguesa
    hamburguesa.addEventListener('click', toggleMenu);
    
    // Cerrar menú al hacer clic en un enlace (en dispositivos móviles)
    if (window.innerWidth <= 767) {
        const enlacesMenu = document.querySelectorAll('.elemento-menu');
        enlacesMenu.forEach(enlace => {
            enlace.addEventListener('click', () => {
                hamburguesa.classList.remove('activo');
                menuNavegacion.classList.remove('activo');
                body.style.overflow = 'auto';
            });
        });
    }
    
    // Cerrar menú al redimensionar la ventana si supera el breakpoint móvil
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767) {
            hamburguesa.classList.remove('activo');
            menuNavegacion.classList.remove('activo');
            body.style.overflow = 'auto';
        }
    });
});