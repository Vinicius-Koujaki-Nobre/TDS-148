function somar(){
    var somaNumero1 = parseFloat(document.getElementById("som1").value)
    var somaNumero2 = parseFloat(document.getElementById("som2").value)
    var somaRes = document.getElementById("somaRes")
    somaRes.innerHTML = somaNumero1 + somaNumero2
    return somaRes
}

function subtrair(){
    var subNumero1 = parseFloat(document.getElementById("sub1").value)
    var subNumero2 = parseFloat(document.getElementById("sub2").value)
    var subRes = document.getElementById("subRes")
    subRes.innerHTML = subNumero1 - subNumero2
    return subRes
}

function multiplicar(){
    var multiNumero1 = parseFloat(document.getElementById("multi1").value)
    var multiNumero2 = parseFloat(document.getElementById("multi2").value)
    var multiRes = document.getElementById("multiRes")
    multiRes.innerHTML = multiNumero1 * multiNumero2
    return multiRes
}

function dividir(){
    var divNumero1 = parseFloat(document.getElementById("div1").value)
    var divNumero2 = parseFloat(document.getElementById("div2").value)
    var divRes = document.getElementById("divRes")
    divRes.innerHTML = divNumero1 / divNumero2
    return divRes
}