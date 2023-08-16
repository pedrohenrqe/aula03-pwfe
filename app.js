'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')

function somar(){
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2

    resultado.textContent = total
}

function identificar(){
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')
    let msg
    if (numero > 0) {
         msg = 'Positivo'
    }else if(numero < 0 ){
         msg = 'Negativo'
    }else{
         msg = 'Zero'
    }

    resultado.textContent = msg
}


botaoIdentificar.addEventListener('click', identificar)
botaoSomar.addEventListener('click', somar)
