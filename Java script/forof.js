const jogos= ["undertale", "celeste", "dead by daylight", "Cs go", "street figther"]
console.log(jogos)
function listar (){
    elemDiv = document.getElementById("farofa")
    conteudoHTML = ""
    for (const jog of jogos) {
        conteudoHTML += '<li>  ${jog}'
        elemDiv.innerHTML = '<li>  ${jog}'
    }
}
