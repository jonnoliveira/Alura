// ============================================ OBJETOS PT 2 ============================================

// Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
// Crie um método que dado a quantidade de km e o preço do combustivel retorne o valor
// gasto em reais para realizar o percusro.

class Carro {
  marca;
  cor;
  gastoMedio;

  constructor (marca, cor, gastoMedio) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = gastoMedio;
  }

  calcularGastoViagem(kmARodar, precoCombustivel) {
    const gasto = (kmARodar / this.gastoMedio) * precoCombustivel;

    return(`Para um percurso de ${kmARodar} você gastará um total de R$ ${gasto.toFixed(2)}.`)
  };
}

const uno = new Carro('Fiat', 'Vermelho', 12);

console.log(uno);
console.log(uno.calcularGastoViagem(100, 6.20));


// Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura;
// As pessoas devem ter a capacidade de dizer o valor do seu IMC;
// Instancie uma pessoa chamada Jośe que tenha 70kg e 1,75m de altura e peça José para dizer 
// o valor do seu IMC;

class Pessoa {
  nome;
  peso;
  altura;

  constructor (nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC () {
    const imc = this.peso / (this.altura * this.altura)
    return (` O IMC de ${ this.nome } é de ${ imc.toFixed(2) } kg/m².`)
  }
}

// const jose = new Pessoa('José', 70, 1.70);
// console.log(jose);
// console.log(jose.calcularIMC());

console.log(new Pessoa('José', 70, 1.70).calcularIMC())