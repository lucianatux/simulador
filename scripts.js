const imagen = document.getElementById('imagen');
const selectEstado = document.getElementById('selectEstado');
const selectNivel = document.getElementById('selectNivel');
const botonMusica = document.getElementById('botonMusica');
//const botonFrases = document.getElementById('botonFrases');
const audio = document.getElementById('audio');
const frase = document.getElementById('frase');

selectEstado.addEventListener('change', cambiarEstado);
selectNivel.addEventListener('change', cambiarNivel);
botonMusica.addEventListener('click', reproducirMusica);
//botonFrases.addEventListener('click', mostrarFrases);

function cambiarEstado() {
    const estado = selectEstado.value;
    imagen.setAttribute('data-estado', estado);
    console.log(estado);
    mostrarFrases();
  }

function cambiarNivel() {
    const nivel = selectNivel.value;
    imagen.setAttribute('data-nivel', nivel);
    console.log(nivel);
  }

function reproducirMusica() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function mostrarFrases() {
    const estado = selectEstado.value;
    switch (estado) {
      case 'neutral':
        frase.textContent = 'No tengo mucho que decir';
        break;
      case 'feliz':
        frase.textContent = '¡Qué bien me siento!';
        break;
      case 'triste':
        frase.textContent = 'No me siento muy bien';
        break;
      case 'enojado':
        frase.textContent = '¡Esto es inaceptable!';
        break;
      default:
        frase.textContent = '';
    }
    
    // Animación de entrada
    frase.style.animation = 'fadeIn 0.5s ease-in-out forwards';
    
    // Animación de salida después de 2 segundos
    setTimeout(() => {
        frase.style.animation = 'fadeOut 0.5s ease-in-out forwards';
    }, 2000);
}
