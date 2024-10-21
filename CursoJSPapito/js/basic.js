//Controle de fluxos - BDD
/* Sendo um cliente correntista do banco, posso sacar dinheiro em caixas eletrônicos
Para poder comprar em lugar que não aceitam o cartão de débito ou crédito */

//Cenário 1 - Saque com sucesso
/*  Dado que meu saldo é de 1000 reais
    Quando faço um saque de 500 reais
    Então o valor do saque deve ser deduzido do meu saldo */

//Cenário 2 - Saque com valor superior ao saldo
/*  Dado que meu saldo é de 1000 reais
    Quando faço um saque de 1001 reais
    Então não deve deduzir do saldo
    E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo  */

//Cenário 3 - Saque com valor máximo
/*  Dado que meu saldo é de 1000 reais
    E o valor máximo por operção é de 700 reais
    Quando faço um saque no valor de 701
    Então não deve deduzir do saldo
    E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação */

//Code
var saldo = 1000

function saque(valor){
    if(valor > saldo){
        console.log('Valor do saque superior ao saldo!')
    }else if(valor > 700){
        console.log('Valor do saque superior ao limite!')
    }else{
        saldo = saldo - valor
    }   
}

saque(701)
console.log(saldo)