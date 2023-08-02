// Array de alunos
const alunos = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// SPLICE: elimina um ou mais elemento do array, a partir de um índice splice(n elemento, quantos ha eliminar em diante)
// lembrando que o splice MODIFICA o array original
// alunos.splice(1, 2);
// O SPLCIE ainda pode adicionar um elemento como terceiro parametro, o elemento adicionado ficara na mesma ordem do elemento eliminado
alunos.splice(1, 2, 'Rodrigo');

// impressão dos alunos
console.log(alunos);