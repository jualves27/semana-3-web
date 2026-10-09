
// BLOCO 1 – FUNDAMENTOS E VARIÁVEIS


console.log("--- BLOCO 1 ---");

// 1. Declaração de `let pontos`, adição de 10 e exibição
let pontos = 50;
pontos += 10;
console.log("Pontos atualizados:", pontos);

// 2. Declaração de `MAX_PONTOS`, tentativa de reatribuição e explicação
const MAX_PONTOS = 100;
try {
  MAX_PONTOS = 200; // Gera TypeError
} catch (erro) {
  console.log("Erro capturado ao tentar reatribuir const:", erro.message);
  // Explicação: Variáveis declaradas com 'const' possuem ligação constante. 
  // O valor não pode ser reatribuído após a inicialização, resultando em um TypeError.
}

// 3. Variável para cada tipo primitivo e uso do operador typeof
let texto = "Olá, mundo!";          // string
let numero = 42;                    // number
let booleano = true;                // boolean
let naoDefinido;                    // undefined
let nulo = null;                    // null

console.log("Tipo de 'texto':", typeof texto);
console.log("Tipo de 'numero':", typeof numero);
console.log("Tipo de 'booleano':", typeof booleano);
console.log("Tipo de 'naoDefinido':", typeof naoDefinido);
console.log("Tipo de 'nulo':", typeof nulo); // Retorna "object" por razões históricas do JS

// 4. Template Literals vs Concatenação com +
let nome = "Maria";
let idade = 20;

// Usando Template Literals
let fraseTemplate = `A aluna ${nome} tem ${idade} anos.`;
console.log("Template Literal:", fraseTemplate);

// Usando Concatenação com +
let fraseConcatenada = "A aluna " + nome + " tem " + idade + " anos.";
console.log("Concatenação +:", fraseConcatenada);



// BLOCO 2 – FUNÇÕES


console.log("\n--- BLOCO 2 ---");

// 1. Chamada de função de expressão antes da declaração para demonstrar ReferenceError
try {
  ehMaiorDeIdadeExpressao(18); // Gera ReferenceError devido à TDZ (Temporal Dead Zone)
} catch (erro) {
  console.log("Erro ao chamar função de expressão antes da declaração:", erro.message);
}

const ehMaiorDeIdadeExpressao = function(idade) {
  return idade >= 18;
};

// 2. Função 'dobro' nas três formas
// Declarada
function dobroDeclarada(n) {
  return n * 2;
}

// Expressão
const dobroExpressao = function(n) {
  return n * 2;
};

// Arrow function (forma curta)
const dobroArrow = n => n * 2;

console.log("Dobro (declarada):", dobroDeclarada(5));
console.log("Dobro (expressão):", dobroExpressao(5));
console.log("Dobro (arrow):", dobroArrow(5));

// 3. Variação com parâmetro com valor padrão (ex: n = 1)
function dobroComPadrao(n = 1) {
  return n * 2;
}

console.log("Dobro chamando sem argumento:", dobroComPadrao()); // Usa n = 1, retorna 2
console.log("Dobro chamando com argumento (7):", dobroComPadrao(7)); // Retorna 14



// BLOCO 3 – CONTROLE DE FLUXO


console.log("\n--- BLOCO 3 ---");

// 1. Função classificarNota(nota) usando if/else
function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
console.log("Nota 8:", classificarNota(8));
console.log("Nota 4:", classificarNota(4));

// 2. Variável corSemaforo e estrutura switch
let corSemaforo = "Amarelo";

switch (corSemaforo.toLowerCase()) {
  case "vermelho":
    console.log("Pare");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  default:
    console.log("Cor inválida");
}

// 3. Tabuada do 5 (1 a 10) usando laço 'for'
console.log("\nTabuada do 5:");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 4. Contagem regressiva de 5 até 1 usando laço 'while'
console.log("\nContagem regressiva:");
let contador = 5;
while (contador >= 1) {
  console.log(contador);
  contador--;
}

// 5. Impressão dos números de 1 a 20 indicando "par" ou "ímpar"
console.log("\nPares e Ímpares (usando 'for'):");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} é par`);
  } else {
    console.log(`${i} é ímpar`);
  }
}

console.log("\nPares e Ímpares (usando 'while'):");
let j = 1;
while (j <= 20) {
  if (j % 2 === 0) {
    console.log(`${j} é par`);
  } else {
    console.log(`${j} é ímpar`);
  }
  j++;
}

// 6. Função diaDaSemana(numero)
function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return "Domingo";
    case 2:
      return "Segunda-feira";
    case 3:
      return "Terça-feira";
    case 4:
      return "Quarta-feira";
    case 5:
      return "Quinta-feira";
    case 6:
      return "Sexta-feira";
    case 7:
      return "Sábado";
    default:
      return "Número inválido! Digite um valor de 1 a 7.";
  }
}

console.log("\nTeste diaDaSemana:");
console.log("Dia 1:", diaDaSemana(1));
console.log("Dia 5:", diaDaSemana(5));
console.log("Dia 9:", diaDaSemana(9));