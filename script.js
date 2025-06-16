const chamados = [
  { id: 1, prioridade: 'Alta', endereco: 'Rua A, 123', classe: 'alta' },
  { id: 2, prioridade: 'Média', endereco: 'Av. B, 456', classe: 'media' },
  { id: 3, prioridade: 'Baixa', endereco: 'Travessa C, 789', classe: 'baixa' },
];

let usuario = '';
let chamadoSelecionado = null;

function login() {
  const input = document.getElementById("username");
  if (input.value.trim() !== "") {
    usuario = input.value;
    document.getElementById("user-display").textContent = usuario;
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    carregarChamados();
  }
}

function carregarChamados() {
  const container = document.getElementById("chamados-list");
  container.innerHTML = '';
  chamados.forEach(ch => {
    const div = document.createElement("div");
    div.className = `chamado ${ch.classe}`;
    div.innerHTML = `
      <strong>Chamado #${ch.id}</strong><br />
      Prioridade: ${ch.prioridade}<br />
      Endereço: ${ch.endereco}
    `;
    div.onclick = () => abrirChamado(ch);
    container.appendChild(div);
  });
}

function abrirChamado(chamado) {
  chamadoSelecionado = chamado;
  document.getElementById("prioridade").textContent = chamado.prioridade;
  document.getElementById("endereco").textContent = chamado.endereco;
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("detalhes-chamado").classList.remove("hidden");
}

function concluirChamado() {
  const texto = document.getElementById("relato").value;
  if (texto.trim() !== "") {
    alert(`Chamado #${chamadoSelecionado.id} concluído.\nRelato: ${texto}`);
    voltar();
  } else {
    alert("Por favor, preencha o relato do atendimento.");
  }
}

function voltar() {
  document.getElementById("relato").value = '';
  document.getElementById("detalhes-chamado").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}
