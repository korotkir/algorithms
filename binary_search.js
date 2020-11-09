'use strict';

// Binary search

function binary_search(list, item) {
  let low = 0 // минимальное значение
  let high = list.length - 1  // максимальное значение
  // поскольку массив считается с нулевого значения вычитаем на 1

  while (low <= high) { // Цикл сработает только в том случае, если
    // Минимальное значение больше или равно большему
    let mid = Math.floor((low + high) / 2) // среднее значение
    // Math.floor - Округляет аргумент до ближайшего меньшего целого.
    let guess = list[mid] // Вычисляем среднее значение
    if (guess === item) {
      return mid // значение не найдено
    }
    if (guess > item) { // много
      high = mid - 1
    }else {
      low = mid + 1 // мало
    }
  }
  return null // Значение не существует
}

let my_list = [1, 3, 5, 7, 9]

console.table(my_list)
console.log(binary_search(my_list, 3))
console.log(binary_search(my_list, -1))