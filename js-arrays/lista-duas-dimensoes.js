// Arrays
const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

// Juntando dois arrays em um novo array de 2 dimensões
const listaDeAlunosMedias = [alunos, medias];

// Para retornar um valor no novo array, o primeiro valor é a seleção do array e o segundo é o elemento do array escolhido
console.log(
    `A 1ª aluna é: ${listaDeAlunosMedias[0][1]}, obteve ${listaDeAlunosMedias[1][1]} de nota.`
);