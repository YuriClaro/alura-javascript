const cliente = {
    nome: "Yuri",
    idade: 23,
    cpf: '43879516804',
    email: 'yuri.claro@outlook.com'
};

console.log(`O nome do cliente é ${cliente["nome"]}  e essa pessoa tem ${cliente["idade"]} anos`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`); 

// Utilizamos isso para quando somente sabemos os nomes do parametros e não temos acesso.
// Vamos centralizar tudo em um array.
const chaves = ["nome", "idade", "cpf", "email"];

// e podemos varrer cada atributo.
chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});