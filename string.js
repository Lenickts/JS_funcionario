var nome  = "Nicole Monteiro";

//tamanho da string
var x = nome.length;
console.log(x);

//validando se o nome é completo (ultrapassando 10 caracteres)
resultado = x > 10 ? "Ok" : "Preencha o nome competo";

console.log(resultado);

//deixando em caixa alta
var alto = nome.toLocaleUpperCase();
console.log(alto);

//deixando em caixa baixa
var baixo = nome.toLocaleLowerCase();
console.log(baixo);

//Identificar a posição de uma palavra
var jogo = "Barcelona vs Real melhor time";
var posicao = jogo.indexOf("Real");

console.log(posicao);

//Cortando palavra
var corte = jogo.slice(0, 9)
console.log(corte);

var corte2 = jogo.slice(13, ) //sem determinar o final
console.log(corte2);
