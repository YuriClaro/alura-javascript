const cliente = {
    nome: "João",
    idade: 24,
    email: "joão@firma.com",
    telefone: ["12951268495", "11582693158"],
    saldo: 200,
    efetuarPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento efetuado, novo saldo de: ${this.saldo}`);
        }
    }
}

cliente.efetuarPagamento(-100);
cliente.efetuarPagamento(80);
cliente.efetuarPagamento(30);
