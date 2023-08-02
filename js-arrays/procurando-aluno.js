const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosMedias = [alunos, medias];

function exibeNomeNota(aluno) {
    if (listaDeAlunosMedias[0].includes(aluno)) {
        const [alunos, medias] = listaDeAlunosMedias;

        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];

        console.log(`${aluno} esta cadastrado!, sua nota é ${mediaAluno}!.`)
    } else {
        console.log(`O aluno não esta cadastrado no sistema`)
    }
}

exibeNomeNota('João');