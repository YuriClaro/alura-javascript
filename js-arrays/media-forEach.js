// Array
const notas = [10, 6.5, 8, 7.5];

var somaDasNotas = 0;

// forEach
notas.forEach(function (nota) {
    somaDasNotas += nota;
})

var mediaDasNotas = somaDasNotas / notas.length;

console.log(`A media dos alunos é ${mediaDasNotas}`);