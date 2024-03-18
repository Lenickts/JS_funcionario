var valores = [8, 1, 7, 2, 9];

//imprimindo uma posição específica do Array
console.log(valores[3]);

//Contagem dos valores no Array
for (var pos = 0; pos < valores.length; pos++){
    console.log("Posição: " +valores[pos]);
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";
carros[2] = "Cadillac";

var motos = new Array("BMW", "Yamaha","Honda");

//Calcula a média de todos os números de um Array

var soma = 0;
for (var i = 0; i < valores.length; i++){
    soma += valores[i];
}

var media = soma / valores.length;

console.log("Resultado: " +media);


//Revertendo Array
console.log("Array invertido: " + valores.reverse());


//Usando o Join
var arr1 = [1,2,3,4,5,6];
console.log(arr1.join('|'));

//Retirando o 1º elemento
var retir = arr1.shift();
console.log(retir); //mostrando o número retirado
console.log(arr1);  //mostrando o array sem o número removido

console.log("Posição do número 3: " + arr1.indexOf(3));

//Acrescentar o último elemento do Array
arr1.push(7);
console.log(arr1);

//Removendo o último elemento dp array
arr1.pop();
console.log(arr1);



