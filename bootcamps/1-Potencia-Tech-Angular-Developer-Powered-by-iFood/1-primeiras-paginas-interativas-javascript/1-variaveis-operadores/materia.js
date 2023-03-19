// ============================================ VARIÁVEIS E OPERADORES ============================================

// Nesse aula vimos uma pequena introdução sobre os tipos de variáveis que existem em JavaScript.
// (!) A função toFixed() transforma o valor numérico em string, arredondando seu valor.

// ============================================ Atividade da aula ============================================

// Faça um programa para calcular o calor de uma viagem.
// Você terá 3 variáveis, sendo elas:
//   1 - Preço do combustível;
//   2 - Gasto médio do combustível do carro por Km;
//   3 - Distância em km da viagem;

// Imprima no console o valor que será gasto para realizar essa viagem

const precoDoCombustievl = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const gastoTotal = (distanciaEmKm / kmPorLitros) * precoDoCombustievl;

console.log(`O valor total gasto será de R$ ${gastoTotal.toFixed(2)}`);