// Разделяй и властвуй!

// Задача:
// Имеется массив чисел, нужно просуммировать све числа и вернуть сумму

let arrNumber = [1,14,2,19,4] // 40

// Вариант 1. Обычный.

function sumSimple(arr) {
  let result = 0
  for(let i = 0; i < arr.length; i++){
     result += arr[i]
  }
  console.log(`Вариант 1. Обычный. : ${result}`)
}

sumSimple(arrNumber) // 40

// Вариант 2. Рекурсивный метод ("Разделяй и властуй")

function sumRecurse(arr) {
  if(arr.length == 1) {
    return arr[0]
  } else {
    return arr[0] + sumRecurse(arr.slice(1))
  }
}

console.log(`Вариант 2. Рекурсивный. : ${sumRecurse(arrNumber)}`)