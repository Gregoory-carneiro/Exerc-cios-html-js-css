 const divbotaoiniciar= document.getElementById("iniciarjogo")
 const divcaixaQuiz = document.getElementById("caixaQuiz")
 let indicePerguntas= 0
 const h2perguntadoquiz= document.getElementById("perguntadoquiz")
 const botaoiniciarjogo= document.getElementById("botaojogar")
 const botaoproximapergunta = document.getElementById("btnproximo")
 const divplacar = document.getElementById("placar")

 let respostasCorretas = 0 
 let respostasErradas = 0

 botaoiniciarjogo.addEventListener("mouseover",  btniniciarjogo, )
 botaoproximapergunta.addEventListener("click", proximapergunta,)
  //Array
 const perguntas=[
    {perguntas: "Qual é o maior deserto do mundo?", opcoes:["Saara", "Atacama", "Antartica"], respostacorreta:"Antartica"},
    {perguntas:"Qual é a capital do Brasil?", opcoes:["Belem", "Sp", "Brasilia"], respostacorreta:"Brasilia"},
    {perguntas:"Qual é a capital da Austrália?",  opcoes:["Camberra", "Atacama", "Sidney"], respostacorreta:"Camberra"},
    {perguntas:"Qual é o país com maior população no mundo?", opcoes:["India", "China", "Russia"], respostacorreta:"India"},
    {perguntas:" Qual a linha imaginária que atravessa o Brasil?", opcoes:["Capricornio", "Equador", "blablabla"], respostacorreta: "Equador"},
    {perguntas:"Qual o oceano que banha o Brasil?", opcoes:["Oceano Atlântico", "Oceano Pacifico", "Oceano Artico"], respostacorreta: "Oceano Atlântico"},
]
function btniniciarjogo() {
    fecharbotaoinicio()
    abrirtelajogo()
}
  function fecharbotaoinicio() {
    divbotaoiniciar.innerHTML=''
  }


   
  function abrirtelajogo(){
    divcaixaQuiz.classList.add("active");

    h2perguntadoquiz.textContent=perguntas [indicePerguntas].perguntas

    opcoesRespostas.innerHTML=''

    perguntas[indicePerguntas].opcoes.forEach(opcao => {
      

   //Adicionando uma pergunta no painel


   const botaopergunta = document.createElement("button")

   //Adicionar texto no botão - do array de peguntas

    botaopergunta.textContent = opcao

    // Adicionar uma classe css no botão

    botaopergunta.classList.add("answer-btn")

    botaopergunta.addEventListener("click", () => validarrespostacorreta(opcao))

    opcoesRespostas.appendChild(botaopergunta);
        
      })
      
   

  }

    function validarrespostacorreta(opcaoselecionada){
       const botoesResposta = opcoesRespostas.querySelectorAll(".answer-btn");

       botoesResposta.forEach(botao=>{
        if (botao.textContent === perguntas[indicePerguntas].respostacorreta){
          botao.classList.add("correct")
        }
        if (botao.textContent == opcaoselecionada && opcaoselecionada != perguntas[indicePerguntas].respostacorreta ){
          botao.classList.add("incorrect")
       } 
       botao.disabled = true
       })
       if(opcaoselecionada == perguntas[indicePerguntas].respostacorreta){
         respostasCorretas++
       }
    }

   function proximapergunta (){
    // incrementando a posição do array de perguntas
    indicePerguntas++
    // Validando o tamanho do array de ir para a proxima pergunta
    if (indicePerguntas < perguntas.length){
        abrirtelajogo()

    } else{
     divcaixaQuiz.classList.remove("active")
     divplacar.classList.add ("active")
     let resultadofinal = ("Acertos: " + respostasCorretas)
      document.getElementById("acertos").innerHTML = resultadofinal
   }

  }


