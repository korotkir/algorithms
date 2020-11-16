
// Функция дял поиска ниманьшего элемента массива
function findSmallestIndex(array) {
  let smallestElement = array[0] // минимальный элемент
  let smallestIndex = 0 // минимальный индекс (всегда ноль)
  
  for(let i = 1; i < array.length; i++) { 
    if (array[i] < smallestElement) {
      smallestElement = array[i]
      smallestIndex = i
    }
  }
  
  return(smallestIndex)
}

// Функция сортировки выбором
function selectionSort(array){
  let newArr = []
  let length = array.length
  for(let i = 0; i < length; i++) {
    let smallestIndex = findSmallestIndex(array)
    newArr.push(array.splice(smallestIndex, 1)[0])
  }
  return(newArr)
}

console.table(selectionSort([5,3,6,2,10]))

