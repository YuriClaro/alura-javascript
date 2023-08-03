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

// Função para ligar para pelo menos um dos numeros cadastrados, ou os dois ao mesmo tempo
function ligarParaCliente (telefoneComercial, telefonePessoal) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefonePessoal}`);
}

// Chamando a função ligarParaCliente
// ligarParaCliente(cliente.telefone[0], cliente.telefone[1]);

// Mais uma forma de chamar a função ligarParaCliente
ligarParaCliente(...cliente.telefone);

// Criando uma const encomenda como objeto para quando a encomenda for impresa, retornará-
// o destinatário com o endereço especificado com rua e numero.
const encomenda = {
    destinatario: cliente.nome,
    rua: cliente.enderecos[0].rua,
    numero: cliente.enderecos[0].numero,
}

// Conseguimos também imprimir a encomenda com o nome do destinatário e o primeiro endereço completo do cliente.
const encomenda2 = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda);
console.log(encomenda2);