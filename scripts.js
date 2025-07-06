const form = document.getElementById('formulario');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (form.checkValidity()) {
    alert('Todos os dados foram preenchidos com sucesso!');
    form.reset();
  } else {
    form.reportValidity(); 
  }
});
