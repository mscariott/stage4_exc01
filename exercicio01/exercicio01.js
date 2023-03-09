let numberOne = prompt("Digite o Número01")
let numberTwo = prompt("Digite o Número02")

n1 = Number(numberOne)
n2 = Number(numberTwo)


let sum = n1 + n2
let subtract = n1 - n2
let multiply = n1 * n2
let divide = n1 / n2
let rest = n1 % n2


alert (`A soma dos 2 números é ${sum}`)
alert (`A subtração dos 2 números é ${subtract}`)
alert (`A multipicação dos 2 números é ${multiply}`)
alert (`A divisão dos 2 números é ${divide}`)
alert (`O resto dos 2 números é ${rest}`)

if (sum%2 == 0)
{
  alert("A soma dos números é par")
}
else{
  alert("A soma dos números é impar")
}

if (numberOne == numberTwo)
{
  alert("Os números inseridos são iguais")
}
else{
  alert("Os números inseridos são diferentes")
}
