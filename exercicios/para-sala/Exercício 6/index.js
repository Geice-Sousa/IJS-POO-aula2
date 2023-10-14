class Animal{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Cachorro extends Animal{
    cor;
    porte;

    constructor(nome, idade, cor, porte){
        super(nome, idade);
        this.cor = cor;
        this.porte = porte;
    }
}

const bolinha = new Animal('Big', 6)
const chiclete = new Cachorro('Chiclete', 9, 'preto-branco-caramelo', 'pequeno')

console.log(bolinha)
console.log(chiclete)