function checkLuhnAlgorithm(cardNumber) {
  // Удаляем пробелы и дефисы из номера карты
  cardNumber = cardNumber.replace(/[\s-]/g, '');

  // Проверяем, что номер карты состоит только из цифр
  if (!/^\d+$/.test(cardNumber)) {
    return false;
  }

  // Преобразуем номер карты в массив цифр
  let digits = cardNumber.split('').map(Number);
  let sum = 0;
  let shouldDouble = false;

  // Проходим по цифрам с конца
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];

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

let card = '4561-2612-1234-5464';
console.log(checkLuhnAlgorithm(card)); 