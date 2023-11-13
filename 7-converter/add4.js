function transfer(currencyOut,currencyIn){
    switch (currencyOut){
        case 'rub':
            switch (currencyIn){
                case 'usd': return 0.01;
                case 'won': return 13.53;
                default: return null;
            }
        case 'usd':
            switch (currencyIn){
                case 'rub': return 96.57;
                case 'won': return 1306.2;
                default: return null;
            }
        case 'won':
            switch (currencyIn){
                case 'usd': return 0.00076;
                case 'rub': return 0.073;
                default: return null;
            }
        default: return null;
    }
}

const convert = (money, currencyOut, currencyIn) => transfer(currencyOut,currencyIn)===null ? null : money * transfer(currencyOut,currencyIn);
console.log(convert(100,'rubj','won'));