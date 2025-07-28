//1°) par ou impar
console.log("1°) questão: par ou impar");
let numero = parseInt(prompt("Digite um número para ver se é par ou impar: "));
if (isNaN(numero)) {
  console.log("Não é um número válido");
} else {
  if (numero % 2 === 0) {
    console.log(`${numero} é um número par!`);
  } else {
    console.log(`${numero} é um numero ímpar!`);
  }
}

//2°) maior numero
console.log("2°) questão: qual o maior numero");
let maior, valor = 0, n = 3;

maior = valor;

for (let i = 1; i <= n; i++) {
  valor = parseInt(prompt("Digite um valor", i, ": "));

  if (valor > maior) {
    maior = valor;
  }
}
console.log(`O maior valor entre os três números é: ${maior}`);

//3°) media
console.log("3°) questão: media");
let media,
  soma = 0;

for (let i = 0;i < n; i++) // reutilizando a variável "n" da 2° questão
{
  media = parseFloat(prompt("Digite um valor", i, ": "));
  soma += media;
}
console.log("O valor da media é: ", soma / 3);

//4°) verificador de idade
console.log("4°) questão: é maior de idade ou não?");
let anoAtual = 2025,
  anoNascimento;
anoNascimento = parseInt(prompt("Em que ano você nasceu? "));

if (anoAtual - anoNascimento < 18) {
  console.log("Você é menor de idade!");
} else {
  console.log("Você é maior de idade!");
}

//5°) conversor de temperatura
console.log("5°) questão: conversor de temperatura");
console.log("O que você quer fazer?");
console.log("1. Converter de Celcius para fahrenheit");
console.log("2. Converter de fahrenheit para Celcius");
let resp = parseInt(prompt("Sua resposta: "));
let Celcius, fahrenheit;
switch (resp) {
  case 1:
    Celcius = prompt("Qual a temperatura em celcius? ");
    fahrenheit = Celcius * (9 / 5) + 32;
    console.log(`A temperatura de celcius para fahrenheit é: ${fahrenheit}°F`);
    break;
  case 2:
    fahrenheit = prompt("Qual a temperatura em fahrenheit? ");
    Celcius = (fahrenheit - 32) * (5 / 9);
    console.log(`A temperatura de fahrenheit de celcius é: ${Celcius}°C`);
    break;
  default:
    console.log("Digite um valor valido!");
    break;
}

//6°) multiplo ou nao
console.log("6° questão: é multiplo ou não?");

let valor1, valor2;
valor1 = parseFloat(prompt("Digite um valor: "));
valor2 = parseFloat(prompt("Digite um outro valor para ver se ele é multiplo do outro: "));

if(valor1 % valor2 === 0 || valor2 % valor1 === 0){

    console.log("Ao menos um dos valores é multiplo do outro");
}

else{
    console.log("Nenhum dos valores é multiplo do outro.")
}

//7°) triangulo
console.log("7°) questão: qual o tipo de triangulo")
let lado1, lado2, lado3;
lado1 = prompt("Digite o valor para o primeiro lado: ");
lado2 = prompt("Digite o valor para o segundo lado: ");
lado3 = prompt("Digite o valor para o terceiro lado: ");

if (lado1 >= lado2 + lado3 && lado2 >= lado1 + lado3 && lado3 >= lado2 + lado1){
console.log("Não é um triangulo!")
}

else{
    if (lado1 == lado2 && lado2 == lado3)
    {
        console.log("é um triangulo equilatero!")
    }

    else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        console.log("é um triangulo isoceles!");
    }

    else {
        console.log("é escaleno!");
    }
}

//8°) restaurante
console.log("8°) questão: restaurante ")
console.log("Escolha entre o menu de opções do restaurante:");
console.log("1. Macarrão");
console.log("2. Pizza");
console.log("3. Hamburguer");
console.log("4. Salada");
resp = parseInt(prompt("Sua resposta: "));

switch(resp){
case 1: 
    console.log("Um prato de macarrão com molho de tomate e algumas amondegas. (contém glutem)");
    console.log("o preço é: R$ 60.00"); break;
case 2:
    console.log("Uma pizza normal. Apenas temos do sabor calabresa. (contém glutem)");
    console.log("Preço: R$45.00"); break;
case 3:
    console.log("Um hamburguer com dupla carne e duplo pão e duplo alface.");
    console.log("Preço: R$18.00"); break;
case 4: 
    console.log("Uma salada. Espera o que mais de uma simples salada?");
    console.log("Preço: R$15.00"); break;
default: console.log("Digite um valor válido"); break;
}

//9°) IMC
console.log("9°) questão: calculo de imc ")

let alt, peso, imc;

alt = parseFloat(prompt("Digite a sua altura (em metros): "));
peso = parseFloat(prompt("Digite o seu peso: "));

imc = peso/(alt*alt);
console.log(`O seu imc é de: ${imc}`);
  if(imc < 18.5){
    console.log("Você está abaixo do peso!")}
  else if (imc >= 18.5 && imc <= 24.9){
    console.log("Você está com o imc ideal. Parabéns!");}
  else if(imc >= 25 && imc <= 29.9){
    console.log("Você está com sobrepeso!");}
  else {
    console.log("Você está obeso!");}

//10°) numeros pares ate o valor inserido
console.log("10°) questão: de 0 ate o valor escolhido (par)");

let par = parseInt(prompt("Digite um número par:"))
n = 0; //reutilizando a variável n novamente.

if (par % 2 != 0){
  console.log("Eu mandei Digitar um valor Par");
}
else if(par < 0){
console.log("Tem que ser um número positivo");}

else{
  while(n != par){
    n+= 2;
    console.log(n);
  }
}

//11°) questão
console.log("11°) de 1 até um valor impar escolhido")
let impar = parseFloat(prompt("Digite um valor ímpar: "))

if (impar < 0){
  console.log("O valor deve ser positivo");
}

else if (impar % 2 === 0){
console.log("O valor deve ser ímpar!");
}

else{
  for(let i = 1; i <= impar; i += 2){
    console.log(i);
  }
}

//12°) fatorial (passa batido porque não sei usar recursão)

//13°) 
let valorPensado = Math.floor(Math.random()* 101)
for (let i = 9; i > 0; i--){
let numJogador = parseInt(prompt("Tente adivinhar o número que o computador está pensando! "));
    if (numJogador != valorPensado){

        if(numJogador > valorPensado){
            console.log("O valor que você escreveu é maior que o número pensado!")
        }
        else if(numJogador < valorPensado){
            console.log("O número que você digitou é menor que o valor pensado!");
        }
        console.log("Você errou!");
        console.log(`Número de tentativas restantes: ${i}`);
    }
    else {
        console.log("Você acertou o número! parabéns!")
        break;
    }
}





