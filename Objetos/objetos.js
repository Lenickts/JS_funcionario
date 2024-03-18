//1 - forma de criar objetos
const pessoa = {
    nome: "Nicole",
    sobrenome: "Monteiro"
}

console.log(pessoa['sobrenome']);

console.log("");

//2 - forma de criar objetos
const funcionario = new Object();
funcionario.nome = "Karen";
funcionario.sobrenome = "Joan";

console.log(funcionario.nome+" "+funcionario.sobrenome);

console.log("");

//3 - forma de criar objetos (usando função)
function criarPessoa(nome, sobrenome, i) {
    return {
        nome,
        sobrenome,
        idade: i,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }    
}

const p1 = criarPessoa("Arthur", "Silva, "+ 30+ " anos.");
const p2 = criarPessoa("João", "Oliveira, "+ 35+ " anos.");

console.log(p1.nomeCompleto);
console.log(p2.nomeCompleto);
//caso na função não utilize o "get", para pedir para imprimir no console, precisaria ser "console.log(p1.nomeCompleto());"

console.log("");

