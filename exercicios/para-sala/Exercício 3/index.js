// HERANÇA
// classe mãe/pai/superclass e classe filha/subclass

// é preciso entender o conceito de négocio, o contexto que a gente tá usando é essencial
class Mae{
    nacionalidade;
    corDosOlhos;
    corDoCabelo;

    constructor(nacionalidade, olhos, cabelo){
        this.nacionalidade = nacionalidade;
        this.corDosOlhos = olhos;
        this.corDoCabelo = cabelo;
    }

    mostrarCaracteriticas(){
        console.log(`Nacionalidade: ${this.nacionalidade }, Olhos: ${this.corDosOlhos}, Cabelo: ${this.corDoCabelo}`)
    }
}

class Filha extends Mae{}

const mamae = new Mae('brasileira', 'castanhos', 'preto')
const crianca = new Filha('brasileira', 'castanhos-escuro', 'castanho')

console.log(mamae)
console.log(crianca)

mamae.mostrarCaracteriticas()
crianca.mostrarCaracteriticas()