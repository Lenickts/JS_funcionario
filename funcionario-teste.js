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

var funcionario = document.getElementById("funcionario");
    const nome = document.getElementById("nome");
    const idade = document.getElementById("idade");
    const cargo = document.getElementById("cargo");
    const departamento = document.getElementById("departamento");
    const linguagem = document.getElementById("linguagem");