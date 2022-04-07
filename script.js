function calcularImc() {
    var peso = 0
    var estatura = 0
    var imc = 0

    peso = document.getElementById('peso').value
    estatura = document.getElementById('estatura').value
    
    imc = (peso / (estatura * estatura)) * 10000
    
    console.log(imc)

    if(imc<=18.5) {
        console.log("Estás bajo de peso")
    } else if(imc<=24.9) {
        console.log("Tu peso es normal")
    }  else if(imc<=29.9) {
        console.log("Tienes sobrepeso")
    }  else if(imc>=30) {
        console.log("Tienes obesidad")
    }
}