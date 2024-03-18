// var carro = [{modelo: 'Audi A3', marca: 'Audi', ano: 2020}, 
// {modelo: 'Compass', marca: 'Jeep', ano: 2022}];

// var c = 1;
// while (c <=10){
//     console.log(c);
//     c++;
// }

// console.log("");

// //Do While

// var t = 1;

// do{
//     console.log(t);
//     t++;
// }
// while(t < 6);

// console.log("");console.log("");
               
                                //ATIVIDADE PRATICA
console.log("ATIVIDADE PRATICA");
console.log("");

const carros = [
    {id: 1, modelo: "Corsa", marca: "Chevy", preco: 45000, dataCriacao: "01/01/2022"},
    {id: 2, modelo: "Punto", marca: "Fiat", preco: 35000, dataCriacao: "01/02/2015"},
    {id: 3, modelo: "Gol", marca: "Volks", preco: 40000, dataCriacao: "01/03/2021"}
];

let totalPrecos = 0;
for (let i = 0; i < carros.length; i){
    const carro = carros[i];
    totalPrecos += carro.preco;
}
console.log("Total dos preços dos carros: ", totalPrecos);

