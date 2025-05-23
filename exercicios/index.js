/**
 * Console API
 */

console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
  nome: 'Samuel',
  turma: '02',
  disciplina: 'Prog JS'
},
{
  nome: 'Lucas',
  turma: '02',
  disciplina: 'Prog JS'
}])

/**
 * Constantes e Variáveis
 */

// const - para informações que nunca mudam
// var ou let - para informações que podem mudar

// informacoes de um dog que nao mudam
const nome = 'Loki'
const raca = 'SRD / vira lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = 'M'

// informacoes que mudam
let idade = 5         // Number
let peso = 10.5       // Number
let vacinado = true   // Boolean
let castrado = false  // Boolean
let tamanho = 'M'     // String

// hoisting -> içamento ou elevação

const irmaos = [
  {
    nome: "Thor",
    idade: 2
  },
  {
    nome: "Hela",
    idade: 3
  }
]

console.table(irmaos)

/**
 * Tipos de Dados - cadeia, inteiro, real, logico, vetor, matriz
 * (funcoes - leia e escreva)
 * 
  
  String - cadeia
  Number - inteiros/real
  Boolean - logico
  Array - vetor/matriz
  
  undefined
  null

  BigInt = Number para números extremamente grandes 
  Symbol = 'identificador único'

 */

// const valor = "50"

// console.log(valor)


/**
 * Strings
 */

// 'Turma 02 do PGATS' - aspas simples ou single quote 
// "Turma 02 do PGATS" - aspas duplas ou double quote
// `Turma 02 do PGATS` - template strings

const numeroAula = "03"
const turma = "02"
let data = "05 de Abril"

console.log("Aula 03 da Turma " + turma + " no Sábado dia 05 de Abril")

console.log(`Aula ${ numeroAula } da Turma ${ turma } no Sábado dia ${ data }`)

console.log(data.length)

// split - separar a string
const nomesDeAlunos = "Giuliana André Goku Lucas Lenilson"

const nomesDeAlunosSplit = nomesDeAlunos.split(" ")

console.log(nomesDeAlunosSplit)

console.log(nomesDeAlunos.toLowerCase())  // minúsculo
console.log(nomesDeAlunos.toUpperCase())  // maiúsculo

console.log(nomesDeAlunos.includes("G"))

// Chai - biblioteca de asserções

console.log(nomesDeAlunos.replaceAll('a', 'i'))

const conceitosLogica = "            inteiro real cadeia de caracteres...           "

console.log(conceitosLogica.trim())


let dataParaCortar = "05 de Abril"
const cpf = "86189924611"

console.log(dataParaCortar.slice(0, 2))
console.log(cpf.slice(0, 3))

// 05 de Abril
// 0123456789