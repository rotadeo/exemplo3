// DECLARAÇÃO DE VARIAVEIS

var nome = "Fiap";
console.log(nome)

let idade =19;
console.log(idade)

const sobrenome = "Fiapinho";
console.log(sobrenome)

// undefined
let exemplo;
console.log(exemplo)

// nula
let exemplo1 =null
console.log(exemplo1)

// tipo de variaveis
let ex1 = "Fiap";
console.log(typeof ex1)

let ex2 = 25;
console.log(typeof ex2)

let ex3 = true;
console.log(typeof ex3)

let ex4 = {};
console.log(typeof ex4)

let ex5 = []; 
console.log(typeof ex5)

// CONVERSÕES

// FLOAT -> STRING
let numFloat =123.456;
console.log(numFloat.toString())

// STRING -> FLOAT
let numString ="12.963";
console.log(parseFloat(numString))

// INT -> STRING
let numInt = 123456;
console.log(numInt.toString())

// STRING -> INT
let numString1 = "128";
console.log(parseInt(numString1))

// METODOS

// METODO lenght - VERIFICA O TAMANHO DA STRING
let frase = "O mundo da tecnologia";
console.log(frase.length)

// METODO IndexOf / lastIndexOf- RETORNA UM TRECHO DO SEU CODIGO
let texto = "Programação Sustentável";
console.log(texto.indexOf("ão"))

// METODO skice - RETORNA PARTE DE UM TEXTO PASSANDO INIIO E O FINAL
let info = "Programação de ponta";
console.log(info.slice(15,20))

// OPERADORES ARITMETICOS
const a = 10
const b = 20

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// OPERADORES LOGICOS
const c = 20
const d = 30

console.log(c < d);
console.log(c > d && c < 10);
console.log(c > d || d > c);
console.log(c == d || d <= c);

// OPERADOES DE COMPARAÇÃO
const e = 10;
const f = 30;

console.log(e == f);
console.log(e === f);
console.log(e != f); 
