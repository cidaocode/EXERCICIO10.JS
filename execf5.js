let anterior = 0
let atual = 1
let novo = anterior + atual

console.log(anterior)
console.log(atual)

for(let contador = 3; contador <= 10; contador++) {
let novo = anterior + atual
console.log(novo)


    anterior = atual
    atual = novo
}