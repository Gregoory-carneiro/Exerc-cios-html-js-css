var peso
let genero = prompt("por favor insira seu gênero:")
let altura = Number(prompt("Por favor insira sua altura:"))
if(genero == 'Masculino'){
    
    peso = 22 * altura ** 2
    alert(peso)
} else{
    peso = 21 * altura ** 2
    alert (peso)
}
