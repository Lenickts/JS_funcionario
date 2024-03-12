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

//Evitar evento na página
document.getElementById("funcionario").addEventListener("submit", function(event){
    event.preventDefault()  

    // Função para receber os dados do formulário
    function validaForm(){
        const nome = document.getElementById("nome").value;
        const idade = document.getElementById("idade").value;
        const cargo = document.getElementById("cargo").value;
        const departamento = document.getElementById("departamento").value;
        const linguagem = document.getElementById("linguagem").value;
        
        // Validando se os campos foram preenchidos
        if (!nome ||!idade ||!cargo) {
            throw new Error("Por favor, preencha todos os campos!");
        }
        return{nome, idade, cargo, departamento, linguagem};
    }
    
    // Validando as informações digitadas
    try{

        const{nome, idade, cargo, departamento, linguagem} = validaForm();

        let funcionario;

        if(cargo.toLowerCase() === "gerente"){
            funcionario = new Gerente(nome, idade, cargo, departamento);
        }
        else if(cargo.toLowerCase() === "desenvolvedor" || cargo.toLowerCase() === "desenvolvedora"){
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        }
        else{
            alert("Digite somente cargos da empresa. Exemplo: Desenvolvedor (a) ou Gerente.");
        }

        // Apresentando as informações na tela
        document.getElementById('apresentar').innerHTML = funcionario.seApresentar();
        document.getElementById('trabalhar').innerHTML = funcionario.trabalhar();

        // Validando o cargo         
        if (funcionario instanceof Desenvolvedor) {
            document.getElementById('programar').innerHTML = funcionario.programar();
        } else if (funcionario instanceof Gerente) {
            document.getElementById('gerenciar').innerHTML = funcionario.gerenciar();
        }

        // !!!!! alternativa de validar o cargo sem instanceof
        // if (funcionario.cargo.toLowerCase() === 'desenvolvedor') {
        //     document.getElementById('programar').innerHTML = funcionario.programar();
        // } else if (funcionario.cargo.toLowerCase() === 'gerente') {
        //     document.getElementById('gerenciar').innerHTML = funcionario.gerenciar();
        // }
    }
    catch (error){
        alert(error.message);
}
});