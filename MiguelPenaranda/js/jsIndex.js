document.querySelectorAll("input[type='radio']").forEach(radio => {
    document.querySelector(`label[for="${radio.id}"]`).addEventListener("click", function() {
        if (radio.checked) {
            const urls = {
                "c1": "alonso/html/peliSerie.html",
                "c2": "TrabajoLara/html/Zapas.html",
                "c3": "lfs/cultura.html",
                "c4": "miguel-cabrera/musica.html",
                "c5": "Jun/html/juegos.html"
            };
            window.location.href = urls[radio.id];
        }
    });
});