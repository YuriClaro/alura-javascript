const cliente = {
    nome: "Yuri",
    idade: 23,
    cpf: '43879516804',
    email: 'yuri.claro@outlook.com'
};

console.log(`O nome do cliente é ${cliente.nome}  e essa pessoa tem ${cliente.idade} anos`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);