//Aula 1

class Pessoa{                                       //classe
    constructor(nome, sobrenome){                   //atributos
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){                                        //métodos
        console.log("Olá, " + this.nome);
    }

    get nomeCompleto(){
        console.log("Olá, " + this.nome + " " +this.sobrenome);
    }
}

//INSTANCIAS
p1 = new Pessoa("Fabio","Daniels");
p1.falar();
p1.nomeCompleto; //usando o encapsulamento (get) não foi preciso os parênteses.