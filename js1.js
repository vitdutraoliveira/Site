function verificaAprovacao() {

let nota= document.getElementById("notaAluno").value;
console.log("nota inserida: " + nota)

if(nota >= 7)
{
   document.getElementById("resultado").innerHTML = "Aprovaduuuuu";
    alert("Parabéns, tu é foda!");

}



else{
   document.getElementById("resultado").innerHTML = "Reprovaduuuuu";
    alert("Poxa, tu é burro, estuda mais!");
}
}