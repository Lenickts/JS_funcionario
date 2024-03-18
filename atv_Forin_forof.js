const car = [
    {id: 1, modelo: "Corsa", marca: "Chevy", preco: 45000, dataCriacao: "01/01/2022"},
    {id: 2, modelo: "Punto", marca: "Fiat", preco: 35000, dataCriacao: "01/02/2015"},
    {id: 3, modelo: "Gol", marca: "Volks", preco: 40000, dataCriacao: "01/03/2021"}
];

let totalPrecos = 0;
for (let i = 0; i < car.length; i++){
    const carro = car[i];
    totalPrecos += carro.preco;
}
console.log("Total dos preços dos carros: ", totalPrecos);

const carros = ["Corsa", "Punta", "Gol"];


console.log("");
                    //USANDO FOR IN

console.log("Iteração usando forin:");

for (let indice in carros) {

  console.log("Índice:", indice, "Valor:", carros[indice]);

}

console.log("");
                    //USANDO FOR OF
console.log("Iteração usando forof:");

for (let carro of carros) {

  console.log("Valor:", carro);

}
