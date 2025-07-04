const form = document.getElementById('formulario')
const botaoEnviar = document.getElementById('botaoEnviar')

const campos = [
  { id: 'nome', label: 'Nome' },
  { id: 'cidade', label: 'Cidade/UF' },
  { id: 'plano', label: 'Plano de Saúde' },
  { id: 'numeroCarteirinha', label: 'Número da carteirinha' },
  { id: 'data', label: 'Data de vencimento' },
  { id: 'telefone', label: 'Telefone' }
];

function validarFormulario(event) {
    event.preventDefault()

    let primeiroErro = null;

  campos.forEach(({ id }) => {
    document.getElementById(id).style.borderBottom = '';
  });

  for (const { id, label } of campos) {
    const input = document.getElementById(id);
    if (!input.value.trim()) {
      input.style.borderBottom = '1px solid red';
      alert(`Por favor, preencha o campo ${label}`);
      primeiroErro = id;
      break;
    }
  }

  if (primeiroErro) {
    campos.forEach(({ id }) => {
      if (id === primeiroErro) return;
      const input = document.getElementById(id);
      if (!input.value) {
        input.style.borderBottom = '1px solid red';
      }
    });
    return;
  }

  alert('Todos os dados foram preenchidos com sucesso!');
  campos.forEach(({ id }) => {
    document.getElementById(id).value = '';
    document.getElementById(id).style.borderBottom = '';
  });

}

form.addEventListener('submit', validarFormulario)