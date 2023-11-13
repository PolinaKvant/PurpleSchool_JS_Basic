function filterArray(arr, removeFunc) {
    return arr.filter(removeFunc);
  }
  
  
  // Функция удаления элементов
  function removeNum(num) {
    // Удаляем элементы, которые меньше или равны 5
    return num <= 5;
  }
  
  // Исходный массив
  var numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
  
  // Отфильтрованный массив
  var filteredArray = filterArray(numbers, removeNum);
  
  console.log(filteredArray); // [7, 9, 6, 8, 10]