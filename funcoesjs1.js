function mostraSaudacao() {
    const nome = document.getElementById("nome").value;
    const hora = parseInt(document.getElementById("hora").value, 10);
    const elementoMensagem = saudacaoPersonalizada(nome, hora);
    document.getElementById("mensagem").innerHTML = saudacaoPersonalizada(nome, hora);

}

function saudacaoPersonalizada(nome, hora) {
    if (hora < 12) {
        return "bom dia, " + nome + "!";
    }
    else if (hora > 12 && hora < 18) {
        return "boa tarde, " + nome + "!";
    }
    else if (hora > 18) {

        return "boa noite, " + nome + "!";
    }
    else {
        return "";
    }
}