const form = document.querySelector("#form-atividade");
const imgAprovado = "<img src='./imagens/aprovado.png' />"
const imgReprovado = "<img src='./imagens/reprovado.png' />"

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputNomeAtividade = document.querySelector("#nome-atividade");
  const inputNotaAtividade = document.querySelector("#nota-atividade");

  let linha = "<tr>";
  linha += `<td>${inputNomeAtividade.value}</td>`;
  linha += `<td>${inputNotaAtividade.value}</td>`;
  linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
  linha += '</tr>';

  linhas += linha;

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;

  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";
  
})