function apresentarMedia(atletas){
  
  // /*
  // VERSÃO COM ITERAÇÃO USANDO O MÉTODO .forEach() ////////////////////////////////////////////////////
  atletas.forEach(function(atleta) {
    let notas = atleta.notas;
    
    // Criar uma cópia da lista de notas original para caso seja necessário (exibir ao usuário, por exemplo)
    let notasRecebidas = notas.slice(0);

    // Tornar a lista com os itens em ordem crescente
    notas.sort((a,b) => a-b);

    // Selecionar apenas as notas do meio
    let notasDoMeio = notas.slice(1,notas.length-1);

    // Cálculo da soma
    let soma = notasDoMeio.reduce(function(total, atual) {
      return total + atual;
    },0);

    // Cálculo da média
    let media = soma/(notasDoMeio.length);


    // Implementação adicional: 
    //  Listas com notas em ordem crescente, mas com as notas 10 exibidas primeiro
    
    // Verificar se na lista de notas tem alguma nota 10 e se não é uma lista só de notas 10
    if (notas.includes(10) && notas.some(item => item !== 10)) {
      
      // Selecionar apenas as notas 10
      let notasDez = notas.splice(notas.indexOf(10));

      // Adicionar as notas 10 no começo da lista
      notas = notasDez.concat(notas);

    }

    
    // Converter a matriz em uma string (formato CSV - separado por vírgulas)
    let notasString = notas.join(", ");


    // Exibir para o usuário
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notasString}`);
    console.log(`Média Válida: ${media}`);
    console.log("");
  })
  
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
// */

  
/*
  // VERSÃO UTILIZANDO LAÇO FOR //////////////////////////////////////////////////////////////////////////////////
  let notas = [];
  let notasDez = [];
  let notasDoMeio = [];
  let notasRecebidas = [];

  for (let i=0; i<atletas.length; i++) {
    notas[i] = atletas[i].notas;
    
    // Criar uma cópia da lista de notas original para caso seja necessário
    notasRecebidas[i] = notas[i].slice(0);

    // Tornar a lista com os itens em ordem crescente
    notas[i].sort((a,b) => a-b);

    // Selecionar apenas as notas do meio
    notasDoMeio[i] = notas[i].slice(1,notas[i].length-1);


    // COMO ESTUDO, FORAM IMPLEMENTADAS DUAS FORMAS DE REALIZAR A SOMA /////
    // Cálculo da soma (FORMA 1 - Usando .forEach())
      let soma = 0;
      notasDoMeio[i].forEach(function(nota) {
        soma = soma + nota;
      })
    //
    // // Cálculo da soma (FORMA 2 - Usando .reduce())
    // let soma = notasDoMeio[i].reduce(function(total, atual) {
    //   return total + atual;
    // },0);
    ////////////////////////////////////////////////////////////////////////

    // Cálculo da média
    let media = soma/(notasDoMeio[i].length);


    ////////////////////////////////////////////////////////////////////////////////////////////////
    // IMPLEMENTAÇÃO ADICIONAL: 
    //  Listas com notas em ordem crescente, mas com as notas 10 exibidas primeiro
    
    // Verificar se na lista de notas tem alguma nota 10 e se não é uma lista só de notas 10
    if (notas[i].includes(10) && notas[i].some(item => item !== 10)) {
      
      // Selecionar apenas as notas 10
      notasDez[i] = notas[i].splice(notas[i].indexOf(10));

      // COMO ESTUDO, FORAM IMPLEMENTADAS DUAS FORMAS ALTERNATIVAS //////////////////////
      // Adicionar as notas 10 no começo da lista (FORMA 1 - Usando .unshift())
      for(let n = 0; n < notasDez[i].length; n++) {
        notas[i].unshift(notasDez[i][n]);
      }

      // // Adicionar as notas 10 no começo da lista (FORMA 2 - Usando .concat())
      // notas[i] = notasDez[i].concat(notas[i]);
      ///////////////////////////////////////////////////////////////////////////////////

      //////////////////////////////////////////////////////////////////////////////////////////////

    }
    
    // Converter a matriz em uma string (formato CSV - separado por vírgulas)
    let notasString = notas[i].join(", ");


    // Exibir para o usuário
    console.log(`Atleta: ${atletas[i].nome}`);
    console.log(`Notas Obtidas: ${notasString}`);
    console.log(`Média Válida: ${media}`);
    console.log("");
  }
  
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/


// Definir a entrada da função
let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];

// Chamar a função
apresentarMedia(atletas);