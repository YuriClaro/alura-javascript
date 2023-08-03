const fichaGuerreiro = {
    nome: "Havel",
    classe: "Guerreiro"
};

const fichaPiromante = {
    nome: "Quelana",
    classe: "Piromante"
};

const fichaClerigo = {
    nome: "Solaire",
    classe: "Clerigo"
};

const equipamento_1 = {
    equipamento: "Dente de Dragão +5"
}

const equipamento_2 = {
    equipamento: "Mão de Piromante +10"
}

const equipamento_3 = {
    equipamento: "Espada +10"
}

const personagem_1 = {
    nome: fichaGuerreiro.nome,
    classe: fichaGuerreiro.classe,
    equipamento: equipamento_1.equipamento,
}

const personagem_2 = {
    nome: fichaPiromante.nome,
    classe: fichaPiromante.classe,
    equipamento: equipamento_2.equipamento,
}

const personagem_3 = {
    nome: fichaClerigo.nome,
    classe: fichaClerigo.classe,
    equipamento: equipamento_3.equipamento,
}

console.log(personagem_1);
console.log(personagem_2);
console.log(personagem_3);