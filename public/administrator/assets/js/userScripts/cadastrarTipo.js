
document.addEventListener("DOMContentLoaded", function(){
    let btnCadastrarTipo = document.getElementById("btnCadastrarTipo");
    btnCadastrarTipo.addEventListener("click", function(){
        console.log("Event click")
        let inputNomeTipo = document.getElementById("inputNomeTipo");
        let nomeTipo = inputNomeTipo.value;
        let obj = {nomeTipo: nomeTipo};
        let stringObj = JSON.stringify(obj); 
        fetch("/administrator/cadastrarTipo", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: stringObj})
        .then(resposta => {
            return resposta.json();
        })
        .then(resposta => {
            if(resposta.ok){
                inputNomeTipo.value = "";
            }
            alert(resposta.msg);
        })
        .catch(error => {
            console.error(error);
        })
    })
})