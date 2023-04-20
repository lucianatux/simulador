const imagen = document.getElementById('imagen');
const selectEstado = document.getElementById('selectEstado');
const selectNivel = document.getElementById('selectNivel');
const botonMusica = document.getElementById('botonMusica');
const audio = document.getElementById('audio');
const frase = document.getElementById('frase');
const frase2 = document.getElementById('frase2');
const frase3 = document.getElementById('frase3');
const sentidos = document.getElementById('sentidos');

selectEstado.addEventListener('change', cambiarEstado);
selectNivel.addEventListener('change', cambiarNivel);
botonMusica.addEventListener('click', reproducirMusica);

function cambiarEstado() {
    const estado = selectEstado.value;
    imagen.setAttribute('data-estado', estado);
    console.log(estado);
    mostrarFrases();
    mostrarSentidos();
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



function cambioPercepcion() {
  const nivel = selectNivel.value;
  let rutaImagen = '';
  switch (nivel) {
    case 'sueño':
      rutaImagen = './assets/dream1.jpeg';
      sentidos.textContent = "Vista: \u{1F446}	- Oído: Canto de la mona lisa - Gusto: Sabor ahumado - Olfato: Aromas reconfortantes - Tacto: Sensaciones suaves, difusas - Cenestesia: Presión en la mandíbula - Kinestesia: Posición acostada";
      break;
    case 'semisueño':
      rutaImagen = './assets/semidream.jpeg';
      sentidos.textContent = "Vista: \u{1F446}	- Oído: Canto chillón y agudo - Gusto: Sabor de mi lengua - Olfato: Aroma a madera y algo perfumado - Tacto: Sensación suave y sedosa - Cenestesia: Sensación de haber descansado - Kinestesia: Posición erguida tambaleante";
      break;
    case 'vigilia':
      rutaImagen = './assets/room.jpg';
      sentidos.textContent = "Vista: \u{1F446}	- Oído: Canto de pájaros - Gusto: Sabor de mi lengua - Olfato: Aroma a madera y lavanda - Tacto: Suavidad de mi pijama de seda - Cenestesia: Sensación saludable y con energía - Kinestesia: Posición erguida, levemente encorvada";
      break;
    case 'conc-de-si':
      rutaImagen = './assets/concdesi.jpeg';
      sentidos.textContent = "Vista: \u{1F446}	- Oído: Canto de pájaros y mi respiración - Gusto: Sabor de mi lengua - Olfato: Aroma a madera y lavanda - Tacto: Suavidad de mi pijama de seda - Cenestesia: Sensación saludable y con energía - Kinestesia: Posición erguida";
      break;
    case 'conc-objetiva':
      rutaImagen = './assets/codigo4.gif';
      sentidos.textContent = "Vista: \u{1F446}	- Oído: Canto de pájaros y mi respiración - Gusto: Sabor de mi lengua - Olfato: Aroma a madera y lavanda - Tacto: Suavidad de mi pijama de seda - Cenestesia: Sensación saludable y con energía - Kinestesia: Posición erguida";
      break;
    default:
      rutaImagen = './assets/room.jpg';
  }
  console.log("Ruta de imagen seleccionada:", rutaImagen);
  imagen.src = rutaImagen;
}

function cambiarNivel() {
  const nivel = selectNivel.value;
  imagen.setAttribute('data-nivel', nivel);
  console.log(nivel);
  cambioPercepcion();
  mostrarSentidos();
}

function mostrarSentidos() {
  const estado = selectEstado.value;
  const nivel = selectNivel.value;
  switch (estado + "-" + nivel) {
    case 'neutral-sueño':
      console.log('neutralsueño');
      break;
    case 'neutral-semisueño':
      console.log('neutralsemisueño');
      break;
    case 'neutral-vigilia':
      console.log('neutralvigilia');
      break;
    case 'neutral-conc-de-si':
      console.log('neutralconcdesi');
      break;
    case 'neutral-conc-objetiva':
      console.log('neutralobjetiva');
      break;
    case 'feliz-sueño':
      console.log('felizsueño');
      break;
    case 'feliz-semisueño':
      console.log('felizsemisueño');
      break;
    case 'feliz-vigilia':
      console.log('felizvigilia');
      break;
    case 'feliz-conc-de-si':
      console.log('feliz-conc-de-si');
      break;
    case 'feliz-conc-objetiva':
      console.log('felizconc-objetica');
      break;
    case 'triste-sueño':
      console.log('tristesueño');
      break;
    case 'triste-semisueño':
      console.log('tristesemisueño');
      break;
    case 'triste-vigilia':
      console.log('tristevigilia');
      break;
    case 'triste-conc-de-si':
      console.log('triste-conc-de-si');
      break;
    case 'triste-conc-objetiva':
      console.log('tristeconc-objetiva');
      break;
    case 'enojado-sueño':
      console.log('enojadosueño');
      break;
    case 'enojado-semisueño':
      console.log('enojadosemisueño');
      break;
    case 'enojado-vigilia':
      console.log('enojadovigilia');
      break;
    case 'enojado-conc-de-si':
      console.log('enojado-conc-de-si');
      break;
    case 'enojado-conc-objetiva':
      console.log('enojadoconc-objetiva');
      break;
    default:
      frase.textContent = '';
  }
}