// =============================== IMPORTAÇÃO E EXPORTAÇÃO EM JS ===============================

--> Importando e exportando no JS utilizando o require e module.exports.
ùtil para separar a complexidade do código em arquivos diferentes, podendo reaproveita-lo diversas vezes;

const functions = require('./functions');

console.log(functions)

--> Desestruturação do objeto:

const { gets, print } = require('./functions');

