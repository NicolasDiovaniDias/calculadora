caixa = document.getElementById("caixa");
function clicar(num){
    if(num == "="){
        if(aux2 == '+'){
            caixa.value = parseFloat(caixa.value) + aux
        }
        else if(aux2 == '-'){
            caixa.value = aux - parseFloat(caixa.value)
        }
        else if(aux2 == '/'){
            caixa.value = parseFloat(caixa.value) / aux
        }
        else if(aux2 == '*'){
            caixa.value = parseFloat(caixa.value) * aux
        }
    }
    else if(isNaN(num)){
        aux = parseFloat(caixa.value)
        caixa.value = null
        aux2 = num
    }
    else{
        caixa.value += num
    }
}