console.log(countries)
console.log(webTechs)

console.log('-------------------------------------')

const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const words = text.split(/[,\s]+|[\s]/)
console.log(words)
console.log(words.length)

console.log('-------------------------------------')
const allergic = true
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
const honeySRC = shoppingCart.indexOf('Honey');


if (allergic === true && shoppingCart.includes('Honey')) {
    shoppingCart.splice(honeySRC, 1)
}
if (shoppingCart.at(0) !== 'Meat') {
    shoppingCart.unshift(`Meat`)
}
if (shoppingCart.at(-1) !== 'Sugar') {
    shoppingCart.push(`Sugar`)
}

let index = shoppingCart.indexOf("Tea")
shoppingCart[index] = 'Green Tea'


console.log(shoppingCart)
