const urlOriginal = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTbgGOIafevvkcA4bNDMIPHEnYxJr5kDBW9KxiKO1XZc0VzlY6LnMcmrb5Tc04u0lB1qw2ZW8QRWGS6/pub?output=csv';
const url = 'https://corsproxy.io/?' + encodeURIComponent(urlOriginal);

let dados = [];

const tabela = document.querySelector('#tabelaDados tbody');
const inputCpf = document.getElementById('inputCpf');
const btnBuscar = document.getElementById('btnBuscar');

function mostrarDados(lista) {
  console.log('Renderizando lista:', lista);
  tabela.innerHTML = lista.map(item => `
    <tr>
      <td>${item['Nome'] || ''}</td>
      <td>${item['Consulta'] || ''}</td>
      <td>${item['Hora'] || ''}</td>
      <td>${item['Telefones'] || ''}</td>
      <td><a href="index.html"><i class="fa-solid fa-house"></i></a></td>
    </tr>
  `).join('');
}

function carregarDados() {
  Papa.parse(url, {
    download: true,
    header: true,
    complete: function(results) {
      dados = results.data;
      console.log('Dados carregados:', dados);
      if(dados.length > 0){
        console.log('Colunas detectadas:', Object.keys(dados[0]));
      }
      mostrarDados(dados);
    },
    error: function(err) {
      console.error('Erro ao carregar CSV:', err);
    }
  });
}

btnBuscar.addEventListener('click', () => {
  const cpf = inputCpf.value.trim().replace(/\D/g, '');
  if (!cpf) {
    alert('Digite um CPF válido');
    return;
  }

  const filtrado = dados.filter(item =>
    (item['matricula'] || '').replace(/\D/g, '') === cpf
  );

  if (filtrado.length === 0) {
    alert('Nenhum paciente encontrado com esse CPF.');
  }

  mostrarDados(filtrado);
});

carregarDados();
