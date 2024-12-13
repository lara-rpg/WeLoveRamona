document.querySelectorAll("input[type='radio']").forEach(radio => {
    document.querySelector(`label[for="${radio.id}"]`).addEventListener("click", function() {
        if (radio.checked) {
            const urls = {
                "c1": "MiguelPenaranda/html/piindex.html",
                "c2": "",
                "c3": "",
                "c4": "",
                "c5": ""
            };
            window.location.href = urls[radio.id];
        }
    });
});

// Selecciona todos los enlaces con anclaje (que apuntan a un ID)
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Obtiene el destino del enlace (el ID de la sección)
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        // Desplazamiento suave hacia la sección
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth" // Suaviza el desplazamiento
            });
        }
    });
});



// Selecciona todos los enlaces dentro del menú de navegación
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Evita el comportamiento por defecto del enlace

        // Obtiene el ID de la sección a la que apunta el enlace
        const targetId = this.getAttribute("href").substring(1); // Elimina el "#" del href
        const targetSection = document.getElementById(targetId);

        // Usa scrollIntoView para desplazarte suavemente
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start" // Alinea con la parte superior del viewport
        });
    });
});



