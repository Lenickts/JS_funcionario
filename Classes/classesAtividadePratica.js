class Funcionario{
    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }
    seApresentar(){
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.cargo}`;
    }
    trabalhar(){
        return "Trabalho em andamento...";
    }
}

class Gerente extends Funcionario{
    constructor(nome,idade,cargo, departamento){
        super(nome,idade,cargo);
        this.departamento = departamento;
    }
    gerenciar(){
        return "Gerenciando folha de pagamento.";
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome,idade,cargo,linguagem){
        super(nome,idade,cargo);
        this.linguagem = linguagem;
    }
    programar(){
        return `${this.nome} está programando em ${this.linguagem}.`
    }
}

const ger1 = new Gerente("Nicolas", 45, "Gerente de RH", "Recursos Humanos");
console.log(ger1.seApresentar());
console.log("(...)");
console.log(ger1.trabalhar());
console.log(ger1.gerenciar());

console.log("")

const dev1 = new Desenvolvedor("Thaina", 29, "Dev Back-end", "Python");
console.log(dev1.seApresentar());
console.log("(...)");
console.log(dev1.trabalhar());
console.log(dev1.programar());