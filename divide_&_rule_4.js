// Разделяй и властвуй!

// Вычисление высоты и ширины квадрата из книги (стр 76. "Разделяй и властвуй")
// Имеется прямоугольник: Ширина = 1680м, высота 640м
// Требуется равнометрно разделить землю на одинаковые квадратные участки.

function ground(width, height) {
  if(width === height ) {
    console.log(((width + height) / 2) / 10)
  }
  while(width != height) {
    if(width > height) {
      for(i = 0; i < width/height; i++) {
        width -= height
      }
      if(height > width) {
        for(i = 0; i < height/width; i++) {
        height -= width
        }
      }   
    }
    if(width === height) {
      console.log(`Стороны квадрата равны: ${(width + height) / 2}`)
    }
  }
}

ground(1680, 640)

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