

function calculate(operation) {
  // Получить значения из полей ввода
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  
  // Проверить, что значения числовые
  if (isNaN(num1) || isNaN(num2)) {
    alert("Пожалуйста, введите числовые значения");
    return;
  }
  
  let result;
  
  // Выполнить выбранную операцию
  switch(operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        alert("Деление на ноль невозможно");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Выбрана неверная операция");
      return;
  }
  
  // Вывести результат в поле "result"
  document.getElementById("result").innerHTML = "Результат: " + result;
}