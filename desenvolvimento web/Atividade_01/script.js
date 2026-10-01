const MEDIA_MINIMA = 7;

const botao = document.getElementById("btn");
const resultado = document.getElementById("resultado");

function verificar() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);

  resultado.style.display = "block";
  resultado.className = "";

  if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    resultado.textContent = "Digite duas notas válidas entre 0 e 10.";
    return;
  }

  const media = (nota1 + nota2) / 2;

  if (media >= MEDIA_MINIMA) {
    resultado.className = "aprovado";
    resultado.textContent = "Média " + media.toFixed(1) + " - Aluno APROVADO";
  } else {
    resultado.className = "reprovado";
    resultado.textContent = "Média " + media.toFixed(1) + " - Aluno REPROVADO";
  }
}

botao.addEventListener("click", verificar);