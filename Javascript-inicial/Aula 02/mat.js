function somar(){
    var somaNumero1 = parseFloat(document.getElementById("som1").value)
    var somaNumero2 = parseFloat(document.getElementById("som2").value)
    var somaRes = document.getElementById("somaRes")
    somaRes.innerHTML = (somaNumero1 + somaNumero2).toFixed(2)
}

function subtrair(){
    var subNumero1 = parseFloat(document.getElementById("sub1").value)
    var subNumero2 = parseFloat(document.getElementById("sub2").value)
    var subRes = document.getElementById("subRes")
    subRes.innerHTML = (subNumero1 - subNumero2).toFixed(2)
}

function multiplicar(){
    var multiNumero1 = parseFloat(document.getElementById("multi1").value)
    var multiNumero2 = parseFloat(document.getElementById("multi2").value)
    var multiRes = document.getElementById("multiRes")
    multiRes.innerHTML = (multiNumero1 * multiNumero2).toFixed(2)
}

function dividir(){
    document.getElementById("div2").style.border = "1px solid grey"
    var divNumero1 = parseFloat(document.getElementById("div1").value)
    var divNumero2 = parseFloat(document.getElementById("div2").value)
    var divRes = document.getElementById("divRes")
    if(divNumero2 !== 0){
        divRes.innerHTML = (divNumero1 / divNumero2).toFixed(2)
    } else{
        divRes.innerHTML = "Não é permitido divisão por 0."
        document.getElementById("div2").style.border = "1px solid red"
    }
}

function media(){
    var m1 = parseFloat(document.getElementById("m1").value)
    var m2 = parseFloat(document.getElementById("m2").value)
    var m3 = parseFloat(document.getElementById("m3").value)
    var m4 = parseFloat(document.getElementById("m4").value)
    var m5 = parseFloat(document.getElementById("m5").value)
    var media = document.getElementById("respMedia")
    var msg = document.getElementById("msg")
    var res = (m1 + m2 + m3 + m4 + m5) / 5

    if(res >= 7){
        media.textContent = res
        msg.textContent = "APROVADO"
        msg.style.color = "green"
    } else {
        media.textContent = res
        msg.textContent = "REPROVADO"
        msg.style.color = "red"
    }
}

function mediaImc(){
    var weight = parseFloat(document.getElementById("peso").value)
    var height = parseFloat(document.getElementById("altura").value)
    var imc = document.getElementById("respImc")
    var tipo = document.getElementById("type")

    if(isNaN(weight) || isNaN(height)){
        imc.textContent = "Digite apenas números."
        document.getElementById("type").textContent = " "
        return
    }

    var res = weight / (height * height).toFixed(2)

    
    if(res >= 40){
        imc.textContent = res
        tipo.textContent = "OBESIDADE GRAU III"
        tipo.style.color = "red"
    } else if (res <= 39.9 && res >= 35){
        imc.textContent = res
        tipo.textContent = "OBESIDADE GRAU II"
        tipo.style.color = "orange"
    } else if (res <= 34.9 && res >= 30){
        imc.textContent = res
        tipo.textContent = "OBESIDADE GRAU I"
        tipo.style.color = "yellow"
    } else if (res <= 29.9 && res >= 25){
        imc.textContent = res
        tipo.textContent = "SOBREPESO"
        tipo.style.color = "#fdff7e"
    } else if(res <= 24.9 && res >= 18.6){
        imc.textContent = res
        tipo.textContent = "NORMAL"
        tipo.style.color = "green"
    } else {
        imc.textContent = res
        tipo.textContent = "ABAIXO DO NORMAL"
        tipo.style.color = "yellow"
    }
}

function porteiro(){
    var ano = parseFloat(document.getElementById("ano").value)
    var resp = document.getElementById("respBalada")

    if(isNaN(ano)){
        resp.textContent = "Digite apenas números."
        return
    }

    const thisYear = new Date().getFullYear();
    const calculo = thisYear - ano

    if(calculo >= 18 && calculo < 120){
        resp.textContent = "Tá liberado ✅"
        resp.style.color = "green"
    } else if(calculo < 18) {
        resp.textContent = "Proibido passar 🚫"
        resp.style.color = "red"
    } else {
        resp.textContent = "💀"
    }
}