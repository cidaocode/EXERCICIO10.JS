
let prompt = require('prompt-sync')()


let numero = prompt('Digite um numero: ')


for (let contador = 1; contador <= 10; contador++) {
    

   // console.log(numero * contador)
   let resultado = numero * contador
   console.log( `${numero} * ${contador} = ${resultado}`)

}



