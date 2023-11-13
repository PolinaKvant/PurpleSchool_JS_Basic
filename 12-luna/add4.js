function checkLuhnAlgorithm(cardNumber) {
  // Удаляем пробелы и дефисы из номера карты
  cardNumber = cardNumber.replace(/[\s-]/g, '');

  // Проверяем, что номер карты состоит только из цифр
  if (!/^\d+$/.test(cardNumber)) {
    return false;
  }

  // Преобразуем номер карты в массив цифр
  var digits = cardNumber.split('').map(Number);
  var sum = 0;
  var shouldDouble = false;

  // Проходим по цифрам с конца
  for (var i = digits.length - 1; i >= 0; i--) {
    var digit = digits[i];

    if (shouldDouble) {
      // Удваиваем каждую четную цифру
      digit *= 2;

      // Если результат удвоения больше или равен 10, вычитаем 9
      if (digit >= 10) {
        digit -= 9;
      }
    }

    sum += digit;

    shouldDouble = !shouldDouble;
  }

  // Карта проходит алгоритм Луна, если сумма кратна 10
  return sum % 10 === 0;
}

var card = '4561-2612-1234-5464';
console.log(checkLuhnAlgorithm(card)); 