var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);

function alerta(event){
    if(true){
        alert("Você clicou no botão!!!" + event);
    }
}