const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [numerosPares, numerosImpares];
// Os `...` tiram os subarrays
const numeros2 = [...numerosPares, ...numerosImpares];

const n1 = 1;
const n2 = 2;
// Mesma coisa que utilizar duas linhas para declarar uma variavel.
const [num1, num2] = [1, 2];

console.log(numeros);
console.log(numeros2);
console.log(n1, n2);
console.log(num1, num2);

// Objeto
const pessoa = {
    nome: 'Ju',
    idade: 25
};

// Objeto composto, o `...` é como se fosse uma hierarquia
const pessoaTelefone = {
    ...pessoa,
    telefone: 1239321695
}

console.log(pessoa);
console.log(pessoaTelefone);

// Existe essas duas maneiras pra se chamar um atributo do objeto
const idade2 = pessoa.idade;
const { idade } = pessoa;

console.log(idade2);
console.log(idade);

function imprimeDados ({nome, idade})  {
    console.log(nome, idade)
}

imprimeDados(pessoa)