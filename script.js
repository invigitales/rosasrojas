// Mensaje de consola
console.log('💍 Invitación de boda cargada');
console.log('📱 Diseñada para móvil por invigitales');

// Efecto de carga suave
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});

// Control básico de música
const btnMusica = document.querySelector('.btn-musica');
let musicaActiva = false;

btnMusica.addEventListener('click', function() {
    if (musicaActiva) {
        // Detener música
        btnMusica.textContent = '🎵';
        musicaActiva = false;
    } else {
        // Iniciar música
        btnMusica.textContent = '⏸️';
        musicaActiva = true;
        // Aquí agregarás el audio después
    }
});