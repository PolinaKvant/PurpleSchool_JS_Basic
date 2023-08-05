let language = prompt('Введите язык');
switch (true){
    case language === 'en':
        console.log('Hello');
        break;
    case language === 'ru':
        console.log('Привет');
        break;
    case language === 'ko':
        console.log('언어');
        break;
    case language === 'ro':
        console.log('limba');
        break;
    default:
        console.log('Данного языка нет в базе данных');
}