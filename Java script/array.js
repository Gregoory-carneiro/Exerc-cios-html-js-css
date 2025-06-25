const cidades= ["Belém", "Anannindeua", "Mosqueiro", 10, 8]
console.log(cidades)
posicao = Number(prompt("Escolha um elemento do array"))
alert(cidades[posicao])

function adicionarFinal(){
 novaCidade= prompt ("Digite uma cidade")
 //PUSH adiciona no final do array
 cidades.push (novaCidade)
 console.log(cidades)
}
 function removerFinal (){
    cidades.pop ()
    console.log(cidades)
 }
 function adicionarComeco (){
    novaCidade2= prompt ("Digite uma cidade")
    cidades.unshift (novaCidade2)
    console.log(cidades)
 } 
 function removerComeco(){
     cidades.shift()
     console.log(cidades)
 }