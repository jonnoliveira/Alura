// ============================================ OBJETOS ============================================

// Objeto é uma coleção dinâmica de valores que funciona por meio de chave:valor.
// É possivel guardar diversas informações dentro de um objeto.
// Uma função dentro do objeto é denominado de método;
// Descrição dinâmica = Objeto['nome'];

const objeto = {
  nome: 'Jonathas',
  idade: 28,

  descricao: function () {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos de idade`)
  },
}

// Utilizando definição por CLASSE - como o objeto deve ser;

class Pessoa {
  nome;
  idade;

  constructor(nome, idade) { // O que acontece quando uma pessoa é instânciada
    this.nome = nome;
    this.idade = idade;
  };

  descricao() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos de idade`);
  }
}

// INSTÂNCIA: como a pessoa é;

// const person1 = new Pessoa('Jonathas', 28);
// person1.nome = 'Jonathas';
// person1.idade = 28;
// person1.descricao();