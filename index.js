import entradaDados from 'readline-sync'

console.log("Calculando juros: ")
let divida = entradaDados.question("Insira o valor da sua divida: ")
let diasVencimento = entradaDados.question("Insira quantos dias se passaram do vencimento: ")
let taxaJuros = ""

if(divida>0){
 if(diasVencimento <= 1){
    taxaJuros = 0
    console.log("Você esta em dia!")
  }
  else{
    if(diasVencimento>15){
      taxaJuros = 10
    }
    
    else{
      taxaJuros = 5
    }
    let valorTot =Number(divida) + (divida * (taxaJuros/100))

    console.log("Valor original da dívida: R$"+divida)
    console.log("Dias atrasados:"+diasVencimento)
    console.log("Taxa de juros:"+taxaJuros+"%")
    console.log("Valor total com juros R$:"+valorTot)
    
  }
  
}
else{
  console.log("O valor deve ser maior que 0")
}



