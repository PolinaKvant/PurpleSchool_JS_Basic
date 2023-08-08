const language = prompt('Введите язык');
switch (language){
    case 'en':
        console.log('Hello');
        break;
    case 'ru':
        console.log('Привет');
        break;
    case 'ko':
        console.log('언어');
        break;
    case 'ro':
        console.log('limba');
        break;
    default:
        console.log('Данного языка нет в базе данных');
}