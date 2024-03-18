// Implemente uma classe chamada “Produto” que possua atributos para armazenar o nome, o preço e a quantidade em estoque. Adicione métodos para calcular o valor total em estoque e verificar se o produto está disponível.

class Produto{
    constructor(nome, preco, qtde){
        this.nome = nome;
        this.preco = preco;
        this.qtde = qtde;
    }
    valorTotal(){
        return this.preco * this.qtde;
    }

    disponivel(){
        return this.qtde > 0;
    }
}

prod1 = new Produto("iPhone 11 64GB Preto", 4500, 200 );
prod2 = new Produto("iPhone 12 Pro Max 256GB Cinza Espacial", 9000, 400);
prod3 = new Produto("iPhone 13 mini 128GB Preto", 5000, 0);

console.log("PRODUTOS");
console.log("");
console.log(`Porduto: ${prod1.nome}`);
console.log(`Preço: ${prod1.preco}`);
console.log(`Disponível: ${prod1.disponivel()? 'Sim' : 'Não'}`);

console.log("");
console.log(`Porduto: ${prod2.nome}`);
console.log(`Preço: ${prod2.preco}`);
console.log(`Disponível: ${prod2.disponivel()? 'Sim' : 'Não'}`);

console.log("");
console.log(`Porduto: ${prod3.nome}`);
console.log(`Preço: ${prod3.preco}`);
console.log(`Disponível: ${prod3.disponivel()? 'Sim' : 'Não'}`);