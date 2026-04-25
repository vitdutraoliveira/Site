const carros = ["uno", "palio", "gol", "celta"];

const conteudo = document.getElementById("conteudo");
function criaSecao() {
    const secao2 = document.createElement("div")
    secao2.innerHTML = "<h2>loop while</h2>" + dados2
    conteudo.appendChild(secao2);
}

let dados = "";
let i = 0;
while (i < 4) {
    dados += "<p>" + carros[i] + "</p>";
    i++;
}

const secao = document.createElement("div")
secao.innerHTML = "<h2>loop while</h2>" + dados
conteudo.appendChild(secao);

let dados2 = "";
let i2 = 0;
while (i2 < carros.length) {
    dados2 += "<p>" + carros[i2] + "</p>";
    i2++;
}
