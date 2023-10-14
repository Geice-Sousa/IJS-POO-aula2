// abstração e encapsulamento
class InvoiceItem {
    #id;
    #description;
    #quantity;
    #unitPrice;
  
    constructor(id, description, quantity, unitPrice) {
      this.#id = id;
      this.#description = description;
      this.#quantity = quantity;
      this.#unitPrice = unitPrice;
    }

    get id(){
        return this.#id;
    }

    get desc(){
        return this.#description;
    }

    get qty(){
        return this.#quantity;
    }

    set qty(newQty){
        this.#quantity = newQty;
    }

    get unitPrice(){
        return this.#unitPrice;
    }

    set unitPrice(newUnitPrice){
        this.#unitPrice = newUnitPrice; // void, não retorna nada, é vazio, não-retorno é diferente de null, NaN, array ou obj vazio
    }
    
    get total(){
        return this.#unitPrice * this.#quantity
    }

    get toString(){
        return console.log(`ID: ${this.#id}, Desc: ${this.#description}, Qty: ${this.#quantity}, unitPrice: ${this.#unitPrice}`)
    }
}

const conta = new InvoiceItem('25896', 'computador',10, 1998.99)
console.log(conta)
console.log(conta.id)
console.log(conta.desc)
console.log(conta.qty)
console.log(conta.unitPrice)
console.log(conta.total)
console.log(conta.toString)
console.log()