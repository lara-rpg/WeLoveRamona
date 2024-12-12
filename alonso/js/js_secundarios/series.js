function socialMedia(){
	alert("Error. Estas redes sociales todavía no han sido creadas, por favor, inténtalo próximamente.");
}

// Función para fijar el menú al hacer scroll
const nav = document.querySelector('.fixedNav');
window.addEventListener('scroll', () => {
    if (window.scrollY > nav.offsetTop) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});