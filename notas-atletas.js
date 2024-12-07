function retornarMedia(atletas){
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
    console.log(notasDoMeio[i])
    console.log(notas[i])

    // Cálculo da soma
    let soma = notasDoMeio[i].reduce(function(total, atual) {
      return total + atual;
    },0);

    // Cálculo da média
    media = soma/(notasDoMeio[i].length);


    // Implementação adicional: 
    //  Listas com notas em ordem crescente, mas com as notas 10 exibidas primeiro
    
    // Verificar se na lista de notas tem alguma nota 10
    if (notas[i].includes(10)) {

      // Selecionar apenas as notas 10
      notasDez[i] = notas[i].splice(notas[i].indexOf(10));

      console.log("------------")
      console.log(notas[i])
      console.log(notasDez[i])

      // // Adicionar as notas 10 no começo da lista (FORMA 1)
      // for(let n = 0; n < notasDez[i].length; n++) {
      //   notas[i].unshift(notasDez[i][n]);
      // }

      // Adicionar as notas 10 no começo da lista (FORMA 2)
      notas[i] = notasDez[i].concat(notas[i]);

      console.log(notas[i])
      console.log("------------")
    }
    
    // Converter a matriz em uma string (formato CSV - separado por vírgulas)
    notasString = notas[i].join(", ");


    // Exibir para o usuário
    console.log(`Atleta: ${atletas[i].nome}`);
    console.log(`Notas Obtidas: ${notasString}`);
    console.log(`Média Válida: ${media}`);
    console.log("");
  }
  
  return media;
}

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
retornarMedia(atletas);