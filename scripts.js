const imagen = document.getElementById('imagen');
const selectEstado = document.getElementById('selectEstado');
const selectNivel = document.getElementById('selectNivel');
const botonMusica = document.getElementById('botonMusica');
//const botonFrases = document.getElementById('botonFrases');
const audio = document.getElementById('audio');
const frase = document.getElementById('frase');
const frase2 = document.getElementById('frase2');
const frase3 = document.getElementById('frase3');

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
        frase2.textContent = 'Todo está bien';
        frase3.textContent = 'Me siento tranquilo';
        break;
      case 'feliz':
        frase.textContent = 'Me siento muy feliz hoy';
        frase2.textContent = 'Qué día tan hermoso!';
        frase3.textContent = 'Todo está de maravilla';
        break;
      case 'triste':
        frase.textContent = 'Me siento abrumado';
        frase2.textContent = 'No tengo ganas de hacer nada';
        frase3.textContent = 'Qué triste estoy...';
        break;
      case 'enojado':
        frase.textContent = '¡Esto es inaceptable!';
        frase2.textContent = 'Que rabia!';
        frase3.textContent = '#@#&&@#%'
        break;
      default:
        frase.textContent = '';
    }
    
    // Animación de entrada
    frase.style.animation = 'fadeIn 0.8s ease-in-out forwards';
    frase2.style.animation = 'fadeIn 0.5s ease-in-out forwards';
    frase3.style.animation = 'fadeIn 0.2s ease-in-out forwards';

    
    // Animación de salida después de 3 segundos
    setTimeout(() => {
        frase.style.animation = 'fadeOut 1.2s ease-in-out forwards';
        frase2.style.animation = 'fadeOut 0.9s ease-in-out forwards';
        frase3.style.animation = 'fadeOut 0.6s ease-in-out forwards';
    }, 3000);
}
