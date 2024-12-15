let lastStarTime = 0; // Tiempo de la última estrella
const starInterval = 100; // Intervalo en milisegundos para crear estrellas

// Importamos las imagenes y el sonido
const images = document.querySelectorAll('.album');
const sound = document.getElementById('wii');

// Añadir un listener a cada imagen
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        sound.currentTime = 0; // Reset sound to start
        sound.play(); // Play sound
    });

    image.addEventListener('mouseout', () => {
        sound.pause(); // Pause sound when mouse leaves
    });
});

// Crear una estrella en el mouse
document.addEventListener('mousemove', function(e) {
    const currentTime = Date.now();
    if (currentTime - lastStarTime > starInterval) {
        crearEstrella(e.clientX, e.clientY);
        lastStarTime = currentTime; // Actualiza el tiempo de la última estrella
    }
});

// Crear una estrella
function crearEstrella(x, y) {
    const estrella = document.createElement('img');
    estrella.src = 'media/img/star.png'; // Cambia esto por la ruta de tu imagen
    estrella.classList.add('estrella');

    estrella.style.left = `${x}px`;
    estrella.style.top = `${y + window.scrollY}px`;

    document.body.appendChild(estrella);

    // Eliminar la estrella después de que caiga
    estrella.addEventListener('animationend', function() {
        estrella.remove();
    });
}
