// Implemente uma classe chamada “Aluno” que possua atributos para armazenar o nome, a matrícula e as notas de um aluno. Adicione métodos para calcular a média das notas e verificar a situação do aluno (aprovado ou reprovado).

class Aluno{
    constructor(nome, matricula, notas){
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }

    calculoMedia(){
        // const totalNotas = this.notas.reduce((total, nota) => total + nota, 0);
        // return totalNotas / this.notas.length;

        //alternativa do calculo
        var total =0;
        for(var i = 0; i < this.notas.length; i++){
            total += this.notas[i];            
        }
        return total / this.notas.length;
    }

    aprovacao(){
        const media = this.calculoMedia();
        if(media >= 6){
            return "Aprovado";
        }
        else{
            return "Reprovado";
        }
    }
}

//exemplo de uso

const aluno1 = new Aluno("Jonas Oliver", "009810", [4, 9, 3, 7]); //optei por nao criar uma variável com um array de notas.

console.log(`Aluno: ${aluno1.nome} - Matrícula: ${aluno1.matricula}`);
console.log(`Notas: ${aluno1.notas.join(", ")}`);
console.log(`Média: ${aluno1.calculoMedia()}`);
console.log(`Situação: ${aluno1.aprovacao()}`);
