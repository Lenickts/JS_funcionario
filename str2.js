var jogo = "Barcelona vs Real melhor time";

//identificar se existe alguma palavra na frase
var resultado = jogo.includes("Real");
console.log(resultado);

var resul = jogo.includes("real");
console.log(resul);

//Concatenando

var str1 = "Hello, ";
var str2 = "galera";

var str3 = str1.concat(str2); //o mesmo de str1 + str2
console.log(str3);

//removendo espaços vazios do início e fim
var frase = "       Você está aprendendo JS      ";
console.log(frase.trim());

var num = "1,2,3,4,5,6,7,8,9,10";
var arr = num.split(",");
console.log(arr);

//procurando por posição
console.log(arr[2]);

