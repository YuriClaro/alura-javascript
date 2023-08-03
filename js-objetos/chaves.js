// Objeto cliente
const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11555555550", "11444444440"],
};

// Objeto dentro de outro objeto como endereço do cliente, podendo ser mais de um
// cliente.enderecos = [{
//     rua: "R. Joseph Climber",
//     numero: 1337,
//     apartamento: true,
//     complemento: "ap 934",
// }];

// Vai retornar todas as chaves de um objeto
const chavesDoObjeto = Object.keys(cliente);

// vai imprimir todas as chaves de um objeto
console.log(chavesDoObjeto);


// Este if vai verificar se não foi incluso um endereço no cadastro do cliente, retornando um erro
// dizendo que é necessário um endereço para prosseguir
if (!chavesDoObjeto.includes("enderecos")) {
    console.log("Erro. É necessário ter um endereço para prosseguir.")
};