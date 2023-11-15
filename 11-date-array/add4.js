
const array = ['10/02/2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];
for(let i = 0; i < array.length; i++){
  //оставляем только цифры
  const date = array[i].replace(/[^0-9 ]/g,'');
  //проверка на правильность даты
  if (date % 10000 < 2024){
    if (date / 10000 % 100 < 13 && date / 10000 % 100 > 0){
      if (date / 1000000 < 32){
        console.log(`${parseInt(date / 1000000)}-${parseInt(date / 10000) % 100}-${date % 10000}`);
      }
    }
  }
}