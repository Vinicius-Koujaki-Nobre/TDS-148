function calcular(id1, id2, respId, operador){
    var num1 = parseFloat(document.getElementById(id1).value)
    var num2 = parseFloat(document.getElementById(id2).value)
    var resultado

    switch (operador) {
        case '+':
            resultado = num1 + num2
            break;

        case '-':
            resultado = num1 - num2
            break;

        case '*':
            resultado = num1 * num2
            break;

        case '/':
            if(num2 !== 0){
                resultado = num1 / num2
            } else {
                resultado = "Erro: Divisão por 0"
            }
            break;
    
        default: alert("Operador inválido")
            break;
    }
    document.getElementById(respId).textContent = formatNumber(resultado)
}

function formatNumber(num){
    if(Number.isInteger(num)){
        return num
    } else if (num !== "Erro: Divisão por 0") {
        return num.toFixed(2)
    } else {
        return num
    }
}