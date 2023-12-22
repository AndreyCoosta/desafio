let saldoVitorias = calcularSaldo()
function calcularSaldo(win, loses) {
    return win - loses
}
rank = ""
if (saldoVitorias <= 10){
    rank = "Ferro"
} else if (saldoVitorias >= 11)  {
    rank = "Bronze"
} if (saldoVitorias >= 21) {
    rank = "Prata"
} if (saldoVitorias >= 51) {
    rank = "Ouro"
} if (saldoVitorias >= 81) {
    rank = "Diamante"
} if (saldoVitorias >= 91) {
    rank = "Lendário"
} if (saldoVitorias >= 101){
    rank = "Imortal"
} 
console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + rank)