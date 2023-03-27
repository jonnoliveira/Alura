// ============================================ ARRAYS E ESTRUTURAS DE REPETIÇÃO ============================================

ARRAYS: Dentro de uma lista podemos armazenar diversas informações;

(!) A lista permite diferentes tipos de conteúdo simultaneaente. Ex: cont lista = ['Fiel', 10];

const array = ['João', 'José'];

Posição 0 = array[0] = 'João';

Métodos: 

  push --> adiciona um elmento ao final da lista. 

  array.push('Jonathas');
  const array = [ 'João', 'José', 'Jonathas' ];

  pop --> Retira o último elemento na lista;

  array.pop();
  const array = ['João', 'José'];

  shift --> Retira o primeiro elemento na lista;

  array.pop();
  const array = ['José'];

  length --> retorna o tamanho da lista;

~~~~~~~~~~~~~~~~~

ESTRUTURA DE REPETIÇÂO: garante que o código ira ser executado enquanto a condição for verdadeira;

const array = ['João', 'José'];


for (let index = 0; index < array.length; index += 1) {
  console.log(array[index]);
} // João. José.

// ============================================ EXERCICIOS ===========================================

// 1 - Crie um programa que, dado um número, imprima a sua tabuada.

let number = 2;

for (let i = 0; i <= 10; i ++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// 2 - Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < lista.length; i += 1) {
  if (lista[i] % 2 === 0) {
    console.log(lista[i])
  }
}