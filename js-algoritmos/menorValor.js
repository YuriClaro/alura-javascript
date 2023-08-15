const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = 0;

    for (let atual = 0; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
}

console.log(`O livro mais barato custa ${livros[maisBarato].preco} e o titulo é ${livros[maisBarato].titulo}`);