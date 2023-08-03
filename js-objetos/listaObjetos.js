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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
          console.log(`A chave ${chave}, tem o valor de ${cliente[chave]}`);
    }
}