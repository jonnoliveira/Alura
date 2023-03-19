// ============================================ ESTRUTURAS CONDICIONAIS ============================================

// Nesse aula estudamos sobre estruturas condicionais em JavaScript.

// boolean --> true or false
// if --> operador "se"
// else --> operador "se não"
// ! --> negação

// ============================================ Atividade da aula ============================================

// Faça um programa para calcular o valor de uma viagem.
// Você terá 5 variáveis, sendo elas:

// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - O gasto médio de conbustível do carro por Km;
// 5 - Distância em Km da viagem;

// Imprima no console o valor que será gasto para realizarr esta viagem.

const etanol = 5.79;
const gasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const combustivelNoCarro = 'gasolina';

if (combustivelNoCarro === 'gasolina') {
  const gastoTotal = (distanciaEmKm/kmPorLitros) * gasolina;
  console.log(` O gasto toal de gasolina será de R$ ${gastoTotal.toFixed(2)}`)
} else {
  const gastoTotal = (distanciaEmKm/kmPorLitros) * etanol;
  console.log(` O gasto toal de etanol será de R$ ${gastoTotal.toFixed(2)}`)
}