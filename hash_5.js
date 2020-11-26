// В JS хеш функцией является тип данных Object
let book = {}
book['apple'] = 1.50

console.log(book['apple'])


let products = {}
products['a'] = {}
products['b'] = {}
products.a['апельсин'] = 50
products.a['ананас'] = 150
products.a['абрикосы'] = 100
products.b['банан'] = 10

console.table(products)
console.log(`Банан стоит: ${products.b['банан']}`)


