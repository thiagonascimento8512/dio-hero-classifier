const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var heroName;
var heroPower;

console.log('Bem-vindo ao teste de nível do seu herói!');

rl.question('Qual o nome do seu herói? ', (resposta) => {
  heroName = resposta;    
  askHeroPower();
});

function askHeroPower() {
  rl.question('Qual o poder do seu herói? ', (resposta) => {
    heroPower = parseInt(resposta, 10);
    if (isNaN(heroPower)) {
      console.log('Por favor, insira um número.');
      askHeroPower();
    } else {
      console.log(`O herói de nome ${heroName} está no nível ${heroLevel(heroPower)}`);
      rl.close();
    }
  });
}

function heroLevel(heroPower) {
  if (heroPower < 1000) {
    return 'Ferro';
  } else if (heroPower < 2001) {
    return 'Bronze';
  } else if (heroPower < 5001) {
    return 'Prata';
  } else if (heroPower < 7001) {
    return 'Ouro';
  } else if (heroPower < 8001) {
    return 'Platina';
  } else if (heroPower < 9001) {
    return 'Ascendente';
  } else if (heroPower < 10001) {
    return 'Imortal';
  } else {
    return 'Radiante';
  }
}
