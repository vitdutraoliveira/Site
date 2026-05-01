function buscaDadosdoServidor() {
    return new Promise (resolve,reject) => 
    {
        console.log("Buscando dados no servidor")
    
        setTimeout (() =>{
            let sucesso = Math.random >0.5;
        
        if (sucesso) {
            resolve("Dados recebidos com sucesso")
        } else {
            reject("falha ao buscar dados do servidor");

        },2000);
        }       
});

