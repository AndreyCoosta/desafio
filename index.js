/**
 * @param {number} win
 * @param {number} loses
 * @return {number}
 */
function calcularSaldo(win, loses) {
  return win - loses;
}

/**
 * @param {number} score
 * @return {string}
 */
function calcularRank(score) {
  if (score <= 10) return 'Ferro';
  if (score <= 20) return 'Bronze';
  if (score <= 50) return 'Prata';
  if (score <= 80) return 'Ouro';
  if (score <= 90) return 'Diamante';
  if (score <= 100) return 'Lendário';

  return 'Imortal';
}

const score = calcularSaldo(75, 3);
const rank = calcularRank(score);

console.log('O Herói tem de saldo de ' + score + ' está no nível de ' + rank);

// 0 - 10 -> Ferro
// 11 - 20 -> Bronze
// 21 - 50 -> Prata
// 51 - 80 -> Ouro
// 81 - 90 -> Diamante
// 91 - 100 -> Lendário
// 101 - ... -> Imortal
