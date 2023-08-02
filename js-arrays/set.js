// Array
const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

// Os Set remove os elementos repetivos de um array, porém é necessario criar outro array colocando esse set dentro.
const set = new Set(nomes);

const nomesAtualizados = [...set]

console.log(nomesAtualizados);