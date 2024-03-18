// Em JavaScript, a função map() é um método disponível para arrays que permite iterar sobre cada elemento do array e aplicar uma função a cada um desses elementos, retornando um novo array com os resultados dessas operações. Isso significa que a função map() cria um novo array contendo os resultados de chamar uma função fornecida para cada elemento do array original.

var arr = [1,2,3,4,5,6,7,8,9];

var num = arr.map(function(valor){
    return valor * 2;
})

console.log(num);

var funcionarios =[
    {nome: "Luiz", idade: 62},
    {nome: "Douglas", idade: 30},
    {nome: "Jessica", idade: 18},
    {nome: "Luiza", idade: 22},
]

nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes);