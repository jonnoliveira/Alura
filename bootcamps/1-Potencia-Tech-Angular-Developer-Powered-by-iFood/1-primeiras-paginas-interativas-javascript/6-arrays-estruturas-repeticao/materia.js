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

