const form = document.querySelector("#form-atividade");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputNomeAtividade = document.querySelector("#nome-atividade");
  const inputNotaAtividade = document.querySelector("#nota-atividade");

  alert(`atividade: ${inputNomeAtividade.value} - nota: ${inputNotaAtividade.value}`)
})