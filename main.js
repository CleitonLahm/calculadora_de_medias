const form = document.querySelector("#form-atividade");
const imgAprovado = "<img src='./imagens/aprovado.png' />";
const imgReprovado = "<img src='./imagens/reprovado.png' />";
const atividades = [];
const notas = [];
const spanAprovado = "<span class='resultado aprovado'>Aprovado</span>";
const spanReprovado = "<span class='resultado reprovado'>Reprovado</span>";
const imagemInfo = document.querySelector('.info');
const tooltip = imagemContainer.querySelector('.tooltip');

imagemInfo.addEventListener('mouseenter', () => {
  tooltip.style.opacity = 1;
  tooltip.style.visibility = 'visible';
});

imagemInfo.addEventListener('mouseleave', () => {
  tooltip.style.opacity = 0;
  tooltip.style.visibility = 'hidden';
});

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaMediaFinal();
})

function adicionaLinha() {
  const inputNomeAtividade = document.querySelector("#nome-atividade");
  const inputNotaAtividade = document.querySelector("#nota-atividade");

  if(atividades.includes(inputNomeAtividade.value)) {
    alert(`A atividade: ${inputNomeAtividade.value}, já foi inserida`);
  }else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
  
    let linha = "<tr>";
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 6 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';
  
    linhas += linha;
  }

  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
  const mediaFinal = calculaMediaFinal()

  document.querySelector("#media-final-valor").innerHTML = mediaFinal.toFixed(2);
  document.querySelector("#media-final-resultado").innerHTML = mediaFinal >= 6 ? spanAprovado : spanReprovado;

}

function calculaMediaFinal() {
  let somaDasNotas = 0;

  for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i]
  }

  return somaDasNotas / notas.length;
}