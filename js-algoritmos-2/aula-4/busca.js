const listaLivros = require('./arrayOrdenado');

function busca(arrayOrdenado, de, ate, valorBuscado) {
    const meio = Math.floor((de + ate) / 2);
    const atual = arrayOrdenado[meio];

    if (valorBuscado === atual.preco) {
        return meio;
    }

    if (valorBuscado < atual.preco) {
        return busca(arrayOrdenado, de, (meio - 1), valorBuscado);
    }

    
    if (valorBuscado > atual.preco) {
        return busca(arrayOrdenado, (meio + 1), ate, valorBuscado);
    }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 20))