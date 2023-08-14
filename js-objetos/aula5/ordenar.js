// Requisitando os clientes pelo arquivo JSON
const clientes = require("./cliente.json");

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade])  {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        else {
            return 0;
        }
    });
    return resultado;
}

const resposta = ordenar(clientes, "nome");

console.log(resposta);