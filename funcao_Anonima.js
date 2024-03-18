var infoCal = function(a,b,c){
    return a + b + c;
}
console.log(infoCal(2,5,7));

//ARROW FUNCTION

const soma = (num1,num2) =>{
    return num1 + num2;
}
console.log(soma(3,6));


//USANDO COM MAP
const numeros = [1,2,3,4,5];
const valores = numeros.map((num) => num * num)
console.log(valores);

var listaProdutos = ["Geladeira", "Fogão", "AirFryer"];
var listaCapslock = listaProdutos.map(novaLista);

function novaLista(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1);
    //o += elemento.slice foi usado para juntar as primeiras letras maiusculas com o restante das palavras, pois sem ele, o console apareceria somente as letras iniciais.
}
console.log(listaCapslock);