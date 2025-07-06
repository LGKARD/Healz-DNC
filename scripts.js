const form = document.getElementById('formulario');
const alerta = document.getElementById('alertaSucesso');

form.addEventListener('submit', function () {
  // Mostrar o alerta
  alerta.classList.add('mostrar');

  // Esconder depois de 3 segundos
  setTimeout(() => {
    alerta.classList.remove('mostrar');
  }, 3000);
});

