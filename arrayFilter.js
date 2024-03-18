            //Filter

 //Verificar se os números são divisíveis por 2

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);

        //usando função
        //Maiores que 5:
var numerosFiltrados = numeros.filter(
    function (valor){
        return valor > 5;
    }
);
console.log(numerosFiltrados);

        //Menores que 5:
function buscarValores(valor){
    return valor < 5;
};

var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);

            //Função anônima
var r1 = numeros.filter((valor) =>{
    return valor > 5;
})

console.log(r1);

var r2 = numeros.filter(valor => valor > 5);

console.log(r2);
console.log();

            //ARRAY DE OBJETO
var funcionarios =[
    {nome: "Luiz", idade: 62},
    {nome: "Douglas", idade: 30},
    {nome: "Jessica", idade: 18},
    {nome: "Luiza", idade: 22},
]

var pessoasListagem = funcionarios.filter(function(valor){
    return valor.nome.length <= 5
});

console.log(pessoasListagem);
console.log();

//Atividade: Encontrar itens de uma mesma categoria
console.log("Atividade: Encontrar itens de uma mesma categoria")

var produtos = [
    {id: 1, descricao: "SmartPhone", categoria: "Eletronico"},
    {id: 2, descricao: "Notebook", categoria: "Eletronico"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodomestico"},
    {id: 4, descricao: "Fogao", categoria: "Eletrodomestico"},    
];

    //filtrando os produtos eletrônios:
    
var buscaProdutos = produtos.filter(function(valor){
    return valor.categoria == "Eletronico";
})

console.log(buscaProdutos);

    //filtrando os produtos eletrodomésticos:

var buscaProdutos = produtos.filter(function(valor){
    return valor.categoria == "Eletrodomestico";
})
    
console.log(buscaProdutos);