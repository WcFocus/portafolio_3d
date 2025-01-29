const h = document.querySelector("#h");
const tv3 = document.querySelector("#tv3");

let isClicked = false; // Para saber si se ha hecho clic en el TV
let previousTransform = `perspective(90vw) rotateX(75deg) rotateZ(45deg) translateZ(-9vw)`;  // Estado inicial de la cámara

// Función para mover el objeto en función de la posición del mouse
let base = (e) => {
  if (!isClicked) {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;
    h.style.transform = `perspective(90vw)
        rotateX(${y * -4 + 75}deg)
        rotateZ(${ -x * 12 + 45}deg)
        translateZ(-9vw)
    `;
  }
};

// Función que mueve la vista hacia el TV al hacer clic
let scrollToMonitor = () => {
  isClicked = !isClicked;  // Alterna entre hacer clic en el TV o regresar

  if (isClicked) {
    h.style.transition = "transform 2s ease";  // Transición suave
    previousTransform = h.style.transform;  // Guardamos la transformación actual
    h.style.transform = `perspective(120vw)
        rotateX(90deg)
        rotateZ(90deg)
        rotateY(0deg)
        translateZ(-15.23vw)
        translateY(-14vw)
        translateX(102.2vw)
    `;
  } else {
    h.style.transition = "transform 2s";  // Sin transición cuando se regresa
    h.style.transform = previousTransform;  // Regresar a la posición anterior
    setTimeout(() => {
      h.style.transition = "transform 0s ease";  // Restaura la transición cuando termina de regresar
    }, 100);  // El tiempo coincide con la duración de la transición
  }
};

// Agregar event listener para mover con el mouse
document.body.addEventListener("pointermove", base);

// Agregar event listener al tv3 para alternar la vista
tv3.addEventListener("click", scrollToMonitor);












// Usamos addEventListener en lugar de onclick
tv3.addEventListener("click", scrollToMonitor);

// Agregamos el movimiento del mouse solo cuando no se ha hecho clic en el TV
document.body.addEventListener("pointermove", base);











// Selecciona el elemento con la clase "tablet"
const tablet = document.querySelector('.tablet');
// Agrega un evento de clic
tablet.addEventListener('click', () => {
  // Cambia la clase del elemento para activar la animación
  tablet.classList.toggle('clicked');
  // Si necesitas ejecutar otra acción, puedes incluirla aquí:
  //alert('¡Tablet clickeada!');
  if (tablet.classList.contains('clicked')) {
    tablet.style.animation = 'none'; // Elimina la animación
  } else {
    tablet.style.animation = ''; // Restaura la animación si vuelves a hacer clic
  }
});



const puerta = document.querySelector('.puerta');
// Agrega un evento de clic
puerta.addEventListener('click', () => {
  // Cambia la clase del elemento para activar el movimiento
  puerta.classList.toggle('clicked_puerta');

  // Detén la animación eliminando su clase si está activa
  if (puerta.classList.contains('clicked_puerta')) {
    puerta.style.animation = 'none'; // Elimina la animación
  } else {
    puerta.style.animation = '1s'; // Restaura la animación si vuelves a hacer clic
  }
});
