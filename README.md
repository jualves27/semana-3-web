# semana-3-web
Desafios Práticos – Introdução ao JavaScript

Este repositório contém a resolução dos desafios práticos propostos na aula de Introdução ao JavaScript, cobrindo os três pilares fundamentais da linguagem: Variáveis e Tipos, Funções e Controle de Fluxo.


 Conteúdo do Projeto

O código está estruturado em um único arquivo (`app.js`) contendo os três blocos principais de exercícios:

Bloco 1 – Fundamentos e Variáveis
- Operações com `let`: Reatribuição e incremento de valor.
- Constantes com `const`: Demonstração de imutabilidade e captura do erro (`TypeError`) gerado ao tentar reatribuir uma constante.
- Tipos Primitivos**: Manipulação e verificação de tipos (`string`, `number`, `boolean`, `undefined`, `null`) utilizando o operador `typeof`.
- Interpolação vs. Concatenação: Construção de frases dinâmicas utilizando *Template Literals* (crase + `${}`) e concatenação tradicional com o operador `+`.

Bloco 2 – Funções
- Hoosting & Temporal Dead Zone: Demonstração prática do erro (`ReferenceError`) ao tentar invocar uma função de expressão antes de sua declaração.
- Sintaxes de Funções: Criação da função `dobro` nas três formas:
  - Função Declarada
  - Expressão de Função (Function Expression)
  - Arrow Function (sintaxe enxuta)
- Parâmetros Padrão: Aplicação e teste de funções com valores "default" para parâmetros.

 Bloco 3 – Controle de Fluxo
Estruturas Condicionais (`if/else`): Verificação de aprovação/reprovação com base em notas.
  Estrutura de Seleção (`switch/case`): 
  - Simulação de um semáforo ("Pare", "Atenção", "Siga").
  - Mapeamento dos dias da semana (1 a 7) com validação de entradas inválidas (`default`).
  Laços de Repetição (`for` e `while`):
  - Tabuada do 5 utilizando o laço `for`.
  - Contagem regressiva de 5 a 1 utilizando o laço `while`.
  - Identificação de números pares e ímpares no intervalo de 1 a 20 (usando `% 2 === 0`) implementada tanto com `for` quanto com `while`.





```bash
node app.js
