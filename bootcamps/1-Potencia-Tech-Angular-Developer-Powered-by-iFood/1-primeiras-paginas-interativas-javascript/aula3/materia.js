// ============================================ VARIÁVEIS, OPERADORES E CONDICIONAIS ============================================

// Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule
// e imprima a sua média e sua classificação conforme a tabela abaixo:

// Classificação:
// - Média menor que 5, reprovação;
// - Média entre 5 e 7, recuperação;
// - Média acima de 7, aprovado;

const notas = [7, 8, 7];

const media = ((notas[0] + notas[1] + notas[2])/ notas.length).toFixed(2);

if (media < 5) {
  console.log(`Sua média semestral foi de ${media} pontos. Você foi REPROVADO.`)
} else if ( media <= 7) {
  console.log(`Sua média semestral foi de ${media} pontos. Você está em RECUPERAÇÃO.`)
} else {
  console.log(`Sua média semestral foi de ${media} pontos. Você foi APROVADO.`)
}

// Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição nutricional de
// acordo com a tavebla abaixo:

// IMC em adultos:
// - Abaixo de 18.4 --> Abaixo do peso;
// - Entre 18.5 e 24.9 --> Peso normal;
// - Entre 25 e 29.9 --> Sobrepeso;
// - Entre 30 e 39.9 --> Obesidade;
// - Acima de 40 --> Obesidade grave;

const peso = 74; // kg
const altura = 1.70 // m

const imc = (peso / (altura * altura)).toFixed(1);

if (imc < 18.5) {
  console.log(`Seu IMC é ${imc} e você se encontra ABAIXO DO PESO`);
} else if (imc < 25) {
  console.log(`Seu IMC é ${imc} evocê se encontra com PESO NORMAL`);
} else if (imc < 30) {
  console.log(`Seu IMC é ${imc} e você se encontra com SOBREPESO`);
} else if (imc < 40){
  console.log(`Seu IMC é ${imc} e você se encontra com OBESIDADE`);
} else {
  console.log(`Seu IMC é ${imc} e você se encontra com OBESIDADE GRAVE`);
}