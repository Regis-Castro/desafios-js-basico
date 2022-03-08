function somar(numero1, numero2) {
  let soma = numero1 + numero2
  return 'A soma dos dois números é: ' + soma
}

function subtrair(numero1, numero2) {
  let subtracao = numero1 - numero2
  return 'A subtração dos dois números é: ' + subtracao
}

function multiplicar(numero1, numero2) {
  let multiplicacao = numero1 * numero2
  return 'A multiplicação dos dois números é: ' + multiplicacao
}

function dividir(numero1, numero2) {
  let divisao = numero1 / numero2
  return 'A divisão dos dois números é: ' + divisao
}


let resultadoSoma = somar(1,8)
console.log(resultadoSoma);

let resultadoSubtracao = subtrair(10,3)
console.log(resultadoSubtracao)

let resultadoMultiplicacao = multiplicar(2,7)
console.log(resultadoMultiplicacao)

let resultadoDivisao = dividir(10,2)
console.log(resultadoDivisao)



