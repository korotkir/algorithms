// Рекурсия
// Определение факториала числа
function fact(num){
  if(num == 0) {
    return(1)
  } else {
    return num * fact(num - 1)
  }
}

console.log(`5! = ${fact(5)}`) // 5! = 120