// ============================================ FUNÇÕES EM JAVASCRIPT PT 1 ============================================

// Funções são trechos de código que dinamizam as operações em JavaScript, isolando os calculos específicos
// e permitindo ainda a reutilização desse código em outros trechos da aplicação.

// ============================================

// Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição nutricional de
// acordo com a tavebla abaixo:

// IMC em adultos:
// - Abaixo de 18.4 --> Abaixo do peso;
// - Entre 18.5 e 24.9 --> Peso normal;
// - Entre 25 e 29.9 --> Sobrepeso;
// - Entre 30 e 39.9 --> Obesidade;
// - Acima de 40 --> Obesidade grave;

function calcImc (peso, alturaEmMetros) {
  const calc = peso / (alturaEmMetros * alturaEmMetros);
  return calc.toFixed(2);
}

function classification (peso, alturaEmMetros) {
  const imc = calcImc(peso, alturaEmMetros);

  if (imc < 18.5) {
    return (`Seu IMC é ${imc} e você se encontra ABAIXO DO PESO`);
  } 
  if (imc < 25) {
    return (`Seu IMC é ${imc} evocê se encontra com PESO NORMAL`);
  } 
  if (imc < 30) {
    return (`Seu IMC é ${imc} e você se encontra com SOBREPESO`);
  } 
  if (imc < 40){
    return (`Seu IMC é ${imc} e você se encontra com OBESIDADE`);
  } 
 return (`Seu IMC é ${imc} e você se encontra com OBESIDADE GRAVE`);
  
}

console.log(classification(55, 1.60));