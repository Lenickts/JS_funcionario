var arr = [1,2,3,4,5,6]
arr.splice(2,3);

console.log(arr);

var nomes = ["Joao", "Maria", "Lucas"];
var novos = nomes.splice(1,1,"Doug");
console.log(nomes);


var pais = ["Brasil", "Argentina", "Colombia"]
pais.unshift("Uruguai");
console.log(pais);

console.log();

//Usando Slice e Concat

var pessoa = ["Jorge", "Pamela", "Monica"];
var pessoa1 = pessoa.slice(1,3);
console.log(pessoa);
console.log(pessoa1);

var numero = [1,2,3];
var numero2 = [4,5,6];
var conNumero = numero.concat(numero2);
console.log(conNumero);

console.log(); console.log();
//exercício pratico
console.log("Exercício pratico")
console.log("Dividir os meses do ano em trimestres")
console.log();

var mesesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

var trimestre1 = mesesAno.slice(0,3);
var trimestre2 = mesesAno.slice(3,6);
var trimestre3 = mesesAno.slice(6,9);
var trimestre4 = mesesAno.slice(9,12);

console.log("Primeiro trimestre: \n" +trimestre1);
console.log();

console.log("Segundo trimestre: \n" +trimestre2);
console.log();

console.log("Terceiro trimestre: \n" +trimestre3);
console.log();

console.log("Quarto trimestre: \n" +trimestre4);