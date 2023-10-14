class Ingresso{
    preco = 50

    mostrarPreco(){
        console.log(`O ingresso custa R$${this.preco}`);
    }
}

const cinema = new Ingresso()
console.log(cinema)
cinema.mostrarPreco()

class IngressoNormal extends Ingresso{}

class IngressoVIP extends Ingresso{
    preco = this.preco += 25 // preco = this.preco + 25
}

const ingressoNormal = new IngressoNormal();
console.log(ingressoNormal)
ingressoNormal.mostrarPreco()

const ingressoVip = new IngressoVIP();
console.log(ingressoVip)
ingressoVip.mostrarPreco()
