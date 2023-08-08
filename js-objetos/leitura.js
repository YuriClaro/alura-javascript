// J Java
// S Script
// O Object
// N Notation

// O require, requisita os dados de um outro arquivo .json 
const dados = require("./cliente.json");

// Stringificação
const clienteEmString = JSON.stringify(dados);

// imprime como objeto, os dados obtidos pelo .json
console.log(dados);
console.log(typeof dados);
console.log(clienteEmString);