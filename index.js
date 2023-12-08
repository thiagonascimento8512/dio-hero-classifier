const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var heroName;
var heroPower;
var idioma;

const escolhaIdiomaTexto = 'Escolha um idioma\nChoose a language\nElija un idioma\n(pt/en/es): ';
const idiomaInvalidoTexto = '\nIdioma inválido. Tente novamente: pt, en, es.\nInvalid language. Please try again: pt, en, es.\nIdioma inválido. Por favor, intente de nuevo: pt, en, es.\n\n';


const textos = {
  pt: {
    bemVindo: '\n\nBem-vindo ao teste de nível do seu herói!',
    escolhaIdioma: 'Escolha um idioma (pt/en/es): ',
    nomeHeroi: 'Qual o nome do seu herói? ',
    poderHeroi: 'Qual o poder do seu herói? ',
    insiraNumero: 'Por favor, insira um número.',
    nivelHeroi: 'O herói de nome %s está no nível %s',
    niveis: ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante']
  },
  en: {
    bemVindo: '\n\nWelcome to the hero level test!',
    escolhaIdioma: 'Choose a language (pt/en/es): ',
    nomeHeroi: 'What is the name of your hero? ',
    poderHeroi: 'What is the power of your hero? ',
    insiraNumero: 'Please enter a number.',
    nivelHeroi: 'The hero named %s is at the level %s',
    niveis: ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Ascendant', 'Immortal', 'Radiant']
  },
  es: {
    bemVindo: '\n\n¡Bienvenido a la prueba de nivel de tu héroe!',
    escolhaIdioma: 'Elija un idioma (pt/en/es): ',
    nomeHeroi: '¿Cuál es el nombre de tu héroe? ',
    poderHeroi: '¿Cuál es el poder de tu héroe? ',
    insiraNumero: 'Por favor, introduzca un número.',
    nivelHeroi: 'El héroe llamado %s está en el nivel %s',
    niveis: ['Hierro', 'Bronce', 'Plata', 'Oro', 'Platino', 'Ascendente', 'Inmortal', 'Radiante']
  }
};

function escolherIdioma() {
  rl.question(escolhaIdiomaTexto, (resposta) => {
    if (textos[resposta]) {
      idioma = resposta;
      console.log(textos[idioma].bemVindo);
      perguntarNomeHeroi();
    } else {
      console.log(idiomaInvalidoTexto);
      escolherIdioma();
    }
  });
}

function perguntarNomeHeroi() {
  rl.question(textos[idioma].nomeHeroi, (resposta) => {
    heroName = resposta;
    perguntarPoderHeroi();
  });
}

function perguntarPoderHeroi() {
  rl.question(textos[idioma].poderHeroi, (resposta) => {
    heroPower = parseInt(resposta, 10);
    if (isNaN(heroPower)) {
      console.log(textos[idioma].insiraNumero);
      perguntarPoderHeroi();
    } else {
      console.log(textos[idioma].nivelHeroi, heroName, heroLevel(heroPower));
      rl.close();
    }
  });
}

function heroLevel(heroPower) {
  let nivelIndex;
  if (heroPower < 1000) {
    nivelIndex = 0;
  } else if (heroPower < 2001) {
    nivelIndex = 1;
  } else if (heroPower < 5001) {
    nivelIndex = 2;
  } else if (heroPower < 7001) {
    nivelIndex = 3;
  } else if (heroPower < 8001) {
    nivelIndex = 4;
  } else if (heroPower < 9001) {
    nivelIndex = 5;
  } else if (heroPower < 10001) {
    nivelIndex = 6;
  } else {
    nivelIndex = 7;
  }
  return textos[idioma].niveis[nivelIndex];
}

escolherIdioma();
