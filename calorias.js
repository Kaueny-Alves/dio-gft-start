// 1 Crie um programa que receba a quantidade de calorias que uma pessoa quer ingerir
//    no dia.
//    Após isso, receba o nome de um alimento e a quantidade de calorias que tem esse
//    alimento até que o usuário digite a palavra “sair” no nome do alimento.
//    Ao final do programa, exiba a quantidade de calorias recebidas, se a pessoa ficou
//    abaixo, acima, ou atingiu a sua meta.


let calorias = prompt("Digite a quantidade de calorias Inicial: ");
let alimento = prompt( "Digite nome do alimento para continuar \n" + "Digite sair para encerrar" );
let caloriasDoAlimento = prompt("Calorias desse alimento: ");

  
if (alimento === "sair") {
  let total = calorias - caloriasDoAlimento;
  if (total > calorias) {
    console.log(`Você consumiu ${total} calorias e ficou acima da meta.`);
  }
  if (total < calorias) {
    console.log(`Você consumiu ${total} calorias e ficou abaixo da meta.`);
  }
  if (total === calorias) {
    console.log(`Você consumiu ${total} calorias e ficou no mesmo lugar.`);
  }
} else {
  console.log(
    `Nome do alimento: ${alimento} \n Quantidade: ${caloriasDoAlimento}`
  );
}

