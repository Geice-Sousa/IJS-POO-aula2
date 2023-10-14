// herança sempre devemos pensar em é, cachorro é um animal, bola é um brinquedo, indicada na UML com uma seta
// composição devemos pensar em possuir/ter, compõe algo carro tem um motor, uma sala de aula tem cadeiras, mesas, alunos indicada na UML com um losâgo
// na vida real, cada classe é escrita em um arquivo

class Ingresso {
    lote;
    constructor(tipoLote){
        if(tipoLote === 'promocional'){
            this.lote = 'PROMOCIONAL'
            this.preco = 25
        }
        if(tipoLote === 'primeiro'){
            this.lote = 'PRIMEIRO'
            this.preco = 35
        }
        if(tipoLote === 'segundo'){
            this.lote = 'SEGUNDO'
            this.preco = 45
        }
        if(tipoLote === 'terceiro'){
            this.lote = 'TERCEIRO'
            this.preco = 55
        }
    }

    mostrarPreco(){
        console.log(`Você escoheu o ingresso do lote: "${this.lote}". O preço é R$ ${this.preco}.`);
    }
}

const ingresso2 = new Ingresso('primeiro')
ingresso2.mostrarPreco()
console.log()

class IngressoNormal extends Ingresso{
    mostrarPreco(){
        console.log('Ingresso NORMAL');
        super.mostrarPreco()
    }
}
class IngressoVIP extends Ingresso{
    preco = this.preco += 25 // preco = this.preco += 25

    mostrarPreco(){
        console.log('Ingresso VIP')
        super.mostrarPreco()
    }
}

const ingressoSegundo = new IngressoNormal('segundo');
ingressoSegundo.mostrarPreco()
console.log()

const ingressoVip = new IngressoNormal('primeiro');
ingressoVip.mostrarPreco()
console.log()

const ingressoPromocional = new IngressoVIP('promocional')
ingressoPromocional.mostrarPreco()
console.log()

const ingresso = new IngressoVIP('terceiro')
ingresso.mostrarPreco()