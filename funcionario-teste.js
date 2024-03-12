// class Funcionario {
//     constructor(nome, idade, cargo) {
//         this.nome = nome;
//         this.idade = idade;
//         this.cargo = cargo;
//     }
//     seApresentar() {
//         return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.cargo}`;
//     }
//     trabalhar() {
//         return "Trabalho em andamento...";
//     }
// }

// class Gerente extends Funcionario {
//     constructor(nome, idade, cargo, departamento) {
//         super(nome, idade, cargo);
//         this.departamento = departamento;
//     }
//     gerenciar() {
//         return "Gerenciando folha de pagamento.";
//     }
// }

// class Desenvolvedor extends Funcionario {
//     constructor(nome, idade, cargo, linguagem) {
//         super(nome, idade, cargo);
//         this.linguagem = linguagem;
//     }
//     programar() {
//         return `${this.nome} está programando em ${this.linguagem}.`
//     }
// }

// document.getElementById('funcionario').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evitar o comportamento padrão de recarregar a página

//     try {
//         const nome = document.getElementById('nome').value;
//         const idade = document.getElementById('idade').value;
//         const cargo = document.getElementById('cargo').value;
//         const departamento = document.getElementById('departamento').value;
//         const linguagem = document.getElementById('linguagem').value;

//         if (!nome || !idade || !cargo) {
//             throw new Error("Por favor, preencha todos os campos!");
//         }

//         let funcionario;

//         if (cargo.toLowerCase() === 'gerente') {
//             funcionario = new Gerente(nome, idade, cargo, departamento);
//         } else {
//             funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
//         }

//         // Exibir as informações do funcionário na página
//         document.getElementById('apresentar').innerHTML = funcionario.seApresentar();
//         document.getElementById('trabalhar').innerHTML = funcionario.trabalhar();

//         if (funcionario instanceof Desenvolvedor) {
//             document.getElementById('programar').innerHTML = funcionario.programar();
//         } else if (funcionario instanceof Gerente) {
//             document.getElementById('gerenciar').innerHTML = funcionario.gerenciar();
//         }

//     } catch (error) {
//         alert(error.message);
//     }
// });