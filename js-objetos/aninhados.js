// Objeto cliente
const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11555555550", "11444444440"],
};

// Objeto dentro de outro objeto como endereço do cliente, podendo ser mais de um
cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}];

// adicionando um novo endereço ao cliente
cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
});

// Vai imprimir todos os endereços.
//console.log(cliente.enderecos);

// retornando apenas os apartamentos como true, utilizando o filter e uma arrow function
const listaApenasApartamentos = cliente.enderecos.filter(
    (enderecos) => enderecos.apartamento === true
);

// imprimindo apenas os apartamentos === true
console.log(listaApenasApartamentos);