//let prompt = require('prompt-sync')()

//let nome_recebido = prompt(prompt("Digite seu nome"))

//let idade_recebida = parseInt(prompt("Digite sua idade"))


import {exercicio1} from "./moduloExercicio1.js"
exercicio1 ()


function OlaPessoa(nome_, idade_) {


    let pessoa = {

        nome: nome_,
        idade: idade_,
    }

    //let nome = prompt("Digite seu nome: ")

    //let idade = parseInt(prompt("Digite sua idade: "))

    console.log("Olá" + pessoa.nome + "! Voce esta com " + pessoa.idade + "anos")
}