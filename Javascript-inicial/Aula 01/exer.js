// Declara uma variavel com a sua idade.
let idade = 22
console.log(`Idade: ${idade}`)

// Declarar uma variavel com a sua comida preferida e atribuir um valor.
const comida = "Macarrão"
console.log(`Comida preferida: ${comida}`)

// Declarar uma variavel e nao dar valor pra ela, sendo undefined.
var valor
console.log(`Variavel sem valor: ${valor}`)

// Declarar 5 variaveis diferentes sem valores.
var a, b, c, d, e
console.log(a)

// Declarar uma variavel contendo uma string.
var txt = "texto"
console.log(txt)

// Declare uma varivel contendo um numero dentro de uma string.
let numero = "2"
console.log(numero)

// Declare uma variavel com seu nome, e outra com sobrenome,
// e concatene os dois, depois faça um template string dos 2.
const nome = "Vinicius"
const sobrenome = "Nobre"
console.log("Meu nome é " + nome, sobrenome + ".")
console.log(`Meu nome é ${nome} ${sobrenome}.`)

// Coloque a seguinte frase em uma variavel: It´s time.
var frase = "It's time"
console.log(frase)

// Verifique o tipo de todas as variaveis criadas.
console.log(typeof idade, typeof comida, typeof valor,
            typeof a, typeof b, typeof c, typeof d,
            typeof e, typeof txt, typeof numero,
            typeof nome, typeof sobrenome)