class Funcionario{
    nome;
    cpf;
    salario;
    aumento = 0.1;

    constructor(nome, cpf, salario) {
        this.nome = nome;
        this.cpf = cpf;
        this.salario = salario;
    }

    receberAumento(){
        this.salario = this.salario + (this.salario * this.aumento) // this.salario += this.salario * this.aumento
        return `${this.nome} recebeu um aumento, o novo salário é R$${this.salario + (this.salario * this.aumento)}`
    }

    exibirDados(){
        console.log(`\nDADOS DA/O FUNCIONÁRIA/O \n Nome: ${this.nome}\n CPF: ${this.cpf}\n Salário: R$${this.salario}`)
    }
}

const funcionaria = new Funcionario('geice', '123654789', 4500); // só usamos numeros como number se formos fazer conta, se for informação é string 
funcionaria.receberAumento();
funcionaria.exibirDados();

class Gerente extends Funcionario{
    nivelDeGerencia;
    aumento = 0.15

    constructor(nome, cpf, salario, nivelDeGerencia){
        super(nome, cpf, salario);
        this.nivelDeGerencia = nivelDeGerencia;
    }

    exibirDados(){
        super.exibirDados()
        console.log(` Gerente: ${this.nivelDeGerencia}`)
    }
}

const gerente = new Gerente('akin', '123654789', 5500, 'pleno');
gerente.receberAumento();
gerente.exibirDados();

class Assistente extends Funcionario{
    matricula;

    constructor(nome, cpf, salario, matricula){
        super(nome, cpf, salario);
        this.matricula = matricula;
    }

    exibirDados(){
        super.exibirDados()
        console.log(` Matrícula: ${this.matricula}`)
    }
}

const assistente = new Assistente('luã', '123654789', 3500, '125478');
assistente.receberAumento();
assistente.exibirDados();

class AssistenteTecnico extends Assistente{
    bonusSalarial;

    constructor(nome, cpf, salario, matricula, bonusSalarial) {
        super(nome, cpf, salario, matricula);
        this.bonusSalarial = bonusSalarial;
    }

    exibirDados(){
        super.exibirDados()
        console.log(` Bônus Salarial: ${this.bonusSalarial}`)
    }
}

const assistenteTecnico = new AssistenteTecnico('vitor', '123654789', 5500, '56323987', 250);
assistenteTecnico.receberAumento();
assistenteTecnico.exibirDados();


class AssistenteAdministrativo extends Assistente{
    turno;
    adicionalNoturno;

    constructor(nome, cpf, salario, matricula, turno, adicionalNoturno) {
        super(nome, cpf, salario, matricula);
        this.turno = turno;
        this.adicionalNoturno = adicionalNoturno;
    }

    exibirDados(){
        super.exibirDados()
        console.log(` Turno: ${this.turno}`)
        
        if((this.turno).toLowerCase() === 'noturno' || (this.turno).toLowerCase() === 'noite'){
            console.log(` Adicional Noturno: R$${this.adicionalNoturno}`)
        }
    }
}

const assistenteAdministrativo = new AssistenteAdministrativo('meimei', '123654789', 2500, '74128987', 'manhã', 0);
assistenteAdministrativo.receberAumento();
assistenteAdministrativo.exibirDados();

const assistenteAdministrativo2 = new AssistenteAdministrativo('meilin', '123654789', 2500, '74128987', 'noite', 400);
assistenteAdministrativo2.receberAumento();
assistenteAdministrativo2.exibirDados();
