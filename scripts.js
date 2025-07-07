const form = document.getElementById('formulario');
const alerta = document.getElementById('alertaSucesso');

form.addEventListener('submit', function (event) {
  const nome = document.getElementById('nome').value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const plano = document.getElementById('plano').value.trim();
  const carteirinha = document.getElementById('numeroCarteirinha').value.trim();
  const telefone = document.getElementById('telefone').value.trim();

  const nomeValido = /^[A-Za-zÀ-ÿ\s]+$/.test(nome);
  const cidadeValida = /^[A-Za-zÀ-ÿ\s\/]+$/.test(cidade);
  const carteirinhaValida = /^[0-9]+$/.test(carteirinha);
  const telefoneValido = /^[0-9]{8,}$/.test(telefone); // Mínimo 8 números

  if (!nomeValido) {
    alert("O campo Nome deve conter apenas letras.");
    event.preventDefault();
    return;
  }

  if (!cidadeValida) {
    alert("O campo Cidade/UF deve conter apenas letras e '/'.");
    event.preventDefault();
    return;
  }

  if (plano.length === 0) {
    alert("Preencha o campo Plano de Saúde.");
    event.preventDefault();
    return;
  }

  if (!carteirinhaValida) {
    alert("O número da carteirinha deve conter apenas números.");
    event.preventDefault();
    return;
  }

  if (!telefoneValido) {
    alert("O telefone deve conter no mínimo 8 dígitos e apenas números.");
    event.preventDefault();
    return;
  }

  alerta.classList.add('mostrar');
  setTimeout(() => {
    alerta.classList.remove('mostrar');
  }, 3000);
});


