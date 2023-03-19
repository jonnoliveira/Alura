// ============================================ FUNÇÕES EM JAVASCRIPT PT 2 ============================================

// Elabora um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de
// etiqueta e a escolha da condição de pagamento.
// Uitlize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar
// o cálculo adequado.

// Condição de pagamento:
//   - Á vista Débito, recebe 10% de desconto; (1)
//   - À vista no Dinheiro ou PIX, recebe 15% de desconto; (2)
//   - Em duas vezes, preço normal de etiqueta sem juros; (3)
//   - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; (4)

function aplicarDescontoDebito (valorProduto, desconto) {
  return(valorProduto - (valorProduto * (desconto/100))).toFixed(2);
}

function aplicarDescontoDinheiroOuPix (valorProduto, desconto) {
  return(valorProduto - (valorProduto * (desconto / 100))).toFixed(2);
}

function aplicarDescontoParceladoDuasVezes (valorProduto) {
  return(valorProduto / 2).toFixed(2);
}

function incrementarJurosParceladoMaisDeDuasVezes (valorProduto, juros) {
  return(valorProduto + (valorProduto * (juros / 100))).toFixed(2);
}

function verificarValorFinal (formaDePagamento, valorProduto, descontoOuJuros) {
  if (formaDePagamento === 1) {
    const value = aplicarDescontoDebito (valorProduto, descontoOuJuros);
    return (`O valor a pagar à vista no Débito é de ${value}`)
  } 
  if (formaDePagamento === 2) {
    const value = aplicarDescontoDinheiroOuPix (valorProduto, descontoOuJuros);
    return(`O valor a pagar à vista no Dinheiro ou PIX é de ${value}`)
  } 
  if (formaDePagamento === 3) {
    const value = aplicarDescontoParceladoDuasVezes (valorProduto);
    return(`O valor de cada parcela a pagar é de ${value}`)
  } 
  const value = incrementarJurosParceladoMaisDeDuasVezes (valorProduto, descontoOuJuros);
  return(`O valor total é de ${value}`)
}

console.log(verificarValorFinal(2, 100, 15))