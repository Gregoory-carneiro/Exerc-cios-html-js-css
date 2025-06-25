
let button1
   button1= document.getElementById("botão")
   button1.addEventListener("click", function (){
    var contador;
    var soma=0;
        for(contador=1;contador<=10; contador++){

            soma += contador;

        } alert(soma)
   });