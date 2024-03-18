// Em JavaScript, o método substring() é usado para extrair uma parte de uma string e retorná-la como uma nova string. Ele aceita dois argumentos: o índice inicial e o índice final (opcional) da parte da string que você deseja extrair.

var s = "JavaScript e Python";

var pos1 = s.indexOf("Python");

console.log("Posição no índice: "+pos1);

var novaString = s.substring(13,19);
console.log(novaString);

//atividade pratica
console.log();
console.log("Atividade pratica");

var frase = "Olá, mundo!";
if(frase.startsWith("Olá")){
    let sub = frase.substring(5);
    let novaString = sub.replace("mundo", "pessoal");
    var novaStringGrande = novaString.toUpperCase();
    console.log(novaStringGrande);
}

novaFrase = frase.substring(0, 4);
console.log(novaFrase + " " +novaStringGrande);