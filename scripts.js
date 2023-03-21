const imagen = document.getElementById('imagen');
const selectEstado = document.getElementById('selectEstado');
const botonMusica = document.getElementById('botonMusica');
const botonFrases = document.getElementById('botonFrases');
const audio = document.getElementById('audio');

selectEstado.addEventListener('change', cambiarEstado);
botonMusica.addEventListener('click', reproducirMusica);
botonFrases.addEventListener('click', mostrarFrases);

function cambiarEstado() {
    const estado = selectEstado.value;
    imagen.setAttribute('data-estado', estado);
  }

function reproducirMusica() {
    if (audio.paused) {
      audio.play();
      botonMusica.textContent = 'Pausar música';
    } else {
      audio.pause();
      botonMusica.textContent = 'Reproducir música';
    }
  }

function mostrarFrases() {
  // Aquí puedes mostrar las frases de alguna forma en la imagen
}
