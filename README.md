<h1 align="center"> Avaliação da pontuação dos atletas </h1>

Primeiro projeto de certificação da Trilha 1 - Lógica de Programação da Jornada Dev SENAI pela plataforma DEVstart do LAB 365.

<p align="center">
  <img loading="lazy" src="https://github.com/user-attachments/assets/00463754-9f8e-4569-919f-fd6209618d2b"/> 
  &nbsp;&nbsp;&nbsp;
  <img loading="lazy" src="https://github.com/user-attachments/assets/8a0e544f-fe7b-471f-ad3e-5beba6aaf67f"/>
</p>

## Descrição do projeto
Aplicação capaz de receber o nome e pontuação dos atletas de uma determinada competição de ginástica artística, calcular a média e apresentar ao usuário.

A média das notas é computada sem considerar a maior e menor nota do atleta.


## Exemplo de saída
É apresentado ao usuário o nome de cada atleta, seguido das notas e da média calculada, conforme o seguinte exemplo:

<p>
&nbsp Atleta: Cesar Abascal <br />
&nbsp Notas Obtidas: 10, 10, 7.88, 8.42, 9.34 <br />
&nbsp Média Válida: 9.253333 <br /> 
</p>

<p>
&nbsp Atleta: Fernando Puntel <br />
&nbsp Notas Obtidas: 10, 10, 7, 8, 9.33 <br />
&nbsp Média Válida: 9.11 <br />
</p>

<p>
Atleta: Daiane Jelinsky <br />
Notas Obtidas: 10, 7, 8, 9.5, 9.5 <br />
Média Válida: 9 <br />
</p>

<p>
Atleta: Bruno Castro <br />
Notas Obtidas: 10, 10, 10, 9, 9.5 <br />
Média Válida: 9.83333333333 <br />
</p>


## Métodos
Foi utilizada a linguagem Javascript. 
Neste projeto, os principais métodos utlizados foram:

- `.reduce()`: Para fazer redução de matriz por soma;
- `.sort()`: Para ordenar as notas de cada atleta em ordem crescente;
- `.slice()`: Para selecionar as notas consideradas no cálculo da média;
- `.join()`: Para obter a lista de notas em formato de string com cada nota separada por vírgula e espaço;
- `.forEach()`: Para iterar sobre os objetos da matriz e realizar os cálculos necessários na obtenção da média de cada atleta.

  Como estudo, foi realizada uma implementação adicional que não estava nas especificações do projeto, mas que foi observada na saída de exemmplo, em  que as notas obtidas de valor 10 são apresentadas primeiro e, em seguida, as demais notas em ordem crescente.
  
  Formas alternativas de se realizar os processos também foram implementadas como estudo pessoal, tais códigos alternativos foram mantidos no script principal em trechos comentados.
  
  Para tais implementações, foram estudados outros métodos como: `.some()`, `.splice()`, `.indexOf()`, `.concat()`, `.unshift()`.


## Status do projeto
✅ Finalizado ✅

