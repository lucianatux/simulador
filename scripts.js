const imagen = document.getElementById("imagen");
const selectEstado = document.getElementById("selectEstado");
const selectNivel = document.getElementById("selectNivel");
const botonMusica = document.getElementById("botonMusica");
const audio = document.getElementById("audio");
const frase = document.getElementById("frase");
const frase2 = document.getElementById("frase2");
const frase3 = document.getElementById("frase3");
const sentidos = document.getElementById("sentidos");

mostrarPensamientos();
selectEstado.addEventListener("change", cambiarEstado);
selectNivel.addEventListener("change", cambiarNivel);
botonMusica.addEventListener("click", reproducirMusica);

function cambiarEstado() {
  const estado = selectEstado.value;
  imagen.setAttribute("data-estado", estado);
  console.log(estado);
  mostrarPensamientos();
}

function cambiarNivel() {
  const nivel = selectNivel.value;
  imagen.setAttribute("data-nivel", nivel);
  console.log(nivel);
  cambioPercepcion();
  mostrarPensamientos();
}

function reproducirMusica() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function cambioPercepcion() {
  const nivel = selectNivel.value;
  let rutaImagen = "";
  switch (nivel) {
    case "sueño":
      rutaImagen = "./assets/dream1.jpeg";
      sentidos.textContent =
        "Vista: \u{1F446}	- Oído: Canto de la mona lisa - Gusto: Sabor ahumado - Olfato: Aromas reconfortantes - Tacto: Sensaciones suaves, difusas - Cenestesia: Presión en la mandíbula - Kinestesia: Posición acostada";
      break;
    case "semisueño":
      rutaImagen = "./assets/semidream.jpeg";
      sentidos.textContent =
        "Vista: \u{1F446}	- Oído: Canto chillón y agudo - Gusto: Sabor de mi lengua - Olfato: Aroma a madera y algo perfumado - Tacto: Sensación suave y sedosa - Cenestesia: Sensación de haber descansado - Kinestesia: Posición erguida tambaleante";
      break;
    case "vigilia":
      rutaImagen = "./assets/room.jpg";
      sentidos.textContent =
        "Vista: \u{1F446}	- Oído: Canto de pájaros - Gusto: Sabor de mi lengua - Olfato: Aroma a madera y lavanda - Tacto: Suavidad de mi pijama de seda - Cenestesia: Sensación saludable y con energía - Kinestesia: Posición erguida, levemente encorvada";
      break;
    case "conc-de-si":
      rutaImagen = "./assets/concdesi.jpeg";
      sentidos.textContent =
        "Vista: \u{1F446}	- Oído: Canto de pájaros y mi respiración - Gusto: Sabor de mi lengua - Olfato: Aroma a madera y lavanda - Tacto: Suavidad de mi pijama de seda - Cenestesia: Sensación saludable y con energía - Kinestesia: Posición erguida";
      break;
    case "conc-objetiva":
      rutaImagen = "./assets/matrix04.gif";
      sentidos.textContent =
        "Vista: \u{1F446}	- Oído: Canto de pájaros y mi respiración - Gusto: Sabor de mi lengua - Olfato: Aroma a madera y lavanda - Tacto: Suavidad de mi pijama de seda - Cenestesia: Sensación saludable y con energía - Kinestesia: Posición erguida";
      break;
    default:
      rutaImagen = "./assets/room.jpg";
      sentidos.textContent =
      "Vista: \u{1F446}	- Oído: Canto de pájaros - Gusto: Sabor de mi lengua - Olfato: Aroma a madera y lavanda - Tacto: Suavidad de mi pijama de seda - Cenestesia: Sensación saludable y con energía - Kinestesia: Posición erguida, levemente encorvada";  
  }
  console.log("Ruta de imagen seleccionada:", rutaImagen);
  imagen.src = rutaImagen;
}

function mostrarPensamientos() {
  const estado = selectEstado.value;
  const nivel = selectNivel.value;
  switch (estado + "-" + nivel) {
    case "neutral-sueño":
      console.log("neutralsueño");
      frase.textContent = "Me voy a fumar una pipa en el sillón";
      frase2.textContent = "Que es eso?";
      frase3.textContent = "Que bien que canta la mona lisa";
      break;
    case "neutral-semisueño":
      console.log("neutralsemisueño");
      frase.textContent = "Ahmmmm (bostezo)";
      frase2.textContent = "Que hora será?";
      frase3.textContent = "Que sueño extraño que tuve...";
      break;
    case "neutral-vigilia":
      console.log("neutralvigilia");
      frase.textContent = "No tengo mucho que decir";
      frase2.textContent = "Todo está bien";
      frase3.textContent = "Me siento tranquilo";
      break;
    case "neutral-conc-de-si":
      console.log("neutralconcdesi");
      frase.textContent = "Buen día mundo!";
      frase2.textContent = "";
      frase3.textContent = "";
      break;
    case "neutral-conc-objetiva":
      console.log("neutralobjetiva");
      frase.textContent = "";
      frase2.textContent = "";
      frase3.textContent = "";
      break;
    case "feliz-sueño":
      console.log("felizsueño");
      frase.textContent = "Cuánto oro que encontré!!!";
      frase2.textContent = "Hola Lisa!";
      frase3.textContent = "Cantas de maravilla!";
      break;
    case "feliz-semisueño":
      console.log("felizsemisueño");
      frase.textContent = "Que gran sueño que tuve!";
      frase2.textContent = "Descansé muy bien";
      frase3.textContent = "A comenzar el día con todo!";
      break;
    case "feliz-vigilia":
      console.log("felizvigilia");
      frase.textContent = "Me siento muy feliz hoy";
      frase2.textContent = "Qué día tan hermoso!";
      frase3.textContent = "Todo está de maravilla";
      break;
    case "feliz-conc-de-si":
      console.log("feliz-conc-de-si");
      frase.textContent = "Agradezco este maravilloso día";
      frase2.textContent = "";
      frase3.textContent = "";
      break;
    case "feliz-conc-objetiva":
      console.log("felizconc-objetiva");
      frase.textContent = "";
      frase2.textContent = "";
      frase3.textContent = "";
      break;
    case "triste-sueño":
      console.log("tristesueño");
      frase.textContent = "Donde estará...";
      frase2.textContent = "...lo que busco?";
      frase3.textContent = "...no entiendo";
      break;
    case "triste-semisueño":
      console.log("tristesemisueño");
      frase.textContent = "Otra vez lo mismo...";
      frase2.textContent = "Qué alboroto!";
      frase3.textContent = "No quiero levantarme";
      break;
    case "triste-vigilia":
      console.log("tristevigilia");
      frase.textContent = "Me siento abrumado";
      frase2.textContent = "No tengo ganas de hacer nada";
      frase3.textContent = "Qué triste estoy...";
      break;
    case "triste-conc-de-si":
      console.log("triste-conc-de-si");
      frase.textContent = "";
      frase2.textContent = "Necesito cambiar mi ánimo";
      frase3.textContent = "";
      break;
    case "triste-conc-objetiva":
      console.log("tristeconc-objetiva");
      frase.textContent = "";
      frase2.textContent = "";
      frase3.textContent = "";
      break;
    case "enojado-sueño":
      console.log("enojadosueño");
      frase.textContent = "Alguien me persigue";
      frase2.textContent = "Tu quien #%@&# eres?";
      frase3.textContent = "#@#&&@#%";
      break;
    case "enojado-semisueño":
      console.log("enojadosemisueño");
      frase.textContent = "#@#&&@#%";
      frase2.textContent = "Ya cállense!";
      frase3.textContent = "Maldito sueño!";
      break;
    case "enojado-vigilia":
      console.log("enojadovigilia");
      frase.textContent = "¡Esto es inaceptable!";
      frase2.textContent = "Que rabia!";
      frase3.textContent = "#@#&&@#%";
      break;
    case "enojado-conc-de-si":
      console.log("enojado-conc-de-si");
      frase.textContent = "Necesito relajarme";
      frase2.textContent = "";
      frase3.textContent = "";
      break;
    case "enojado-conc-objetiva":
      console.log("enojadoconc-objetiva");
      frase.textContent = "";
      frase2.textContent = "";
      frase3.textContent = "";
      break;
    default:
      frase.textContent = "";
  }
  // Animación de entrada
  frase.style.animation = "fadeIn 0.8s ease-in-out forwards";
  frase2.style.animation = "fadeIn 0.5s ease-in-out forwards";
  frase3.style.animation = "fadeIn 0.2s ease-in-out forwards";

  // Animación de salida después de 3 segundos
  setTimeout(() => {
    frase.style.animation = "fadeOut 1.2s ease-in-out forwards";
    frase2.style.animation = "fadeOut 0.9s ease-in-out forwards";
    frase3.style.animation = "fadeOut 0.6s ease-in-out forwards";
  }, 6000);
}
