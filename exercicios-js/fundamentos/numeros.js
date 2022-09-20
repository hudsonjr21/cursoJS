const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed serve para qtd casas decimais depois da virgula.
console.log(media.toString()) // toString transforma numero em string 
console.log(media.toString(2)) // toString(2) converte a media string em um valor binario
console.log(typeof media)
console.log(typeof Number)