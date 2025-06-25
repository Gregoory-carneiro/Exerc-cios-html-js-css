const filmes= ["Coraline", "Midssomar", "Kill bill", "Interestelar", "Parasita"]
console.log (filmes)
lugar= Number(prompt("Escolha um filme"))
alert(filmes[lugar])

function fatiar (){
    pos1= prompt ("Digite o primeiro corte")
    pos2= prompt ("Digite o segundo corte")
    const catalogo= filmes.splice(pos1, pos2)
    console.log(filmes)
    console.log(catalogo)
}
 function tamanho(){
    alert(filmes.length)
 }
function adicionarFilmeFinal()
    {
    novoFilme= prompt ("Digite um filme")
    filmes.push (novoFilme)
    console.log(filmes)
    }

    function removerFilmeFinal ()
    {
        filmes.pop ()
       console.log(filmes)
    }
    function adicionarFilmeComeco ()
    {
        novoFilme2= prompt ("Digite um filme")
        filmes.unshift (novoFilme2)
       console.log(filmes)
    } 
    function removerFilmeComeco()
    {
        filmes.shift()
        console.log(filmes)
    }