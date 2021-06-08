



function cardsValidator(cardNumber = bankCreditCardNumber.value){

let bankId = cardNumber.slice(0, 2);

    sumCardNumber = cardNumber.replace(/\s/g, '').split('').filter((item) => Number.isInteger(+item)).reverse()
                .map(function(item, i){
                    if(i%2==1){
                    item = item*2;
                    }
                    if (+item >= 10){
                        item = item - 9;
                    }
                    return +item; 
                }).reduce((sum, item) => sum + item);

    if (sumCardNumber%10==0){
        validData = 'Карта валидна  ' + bankIdDetect(bankId);
        resultValidationCard.innerHTML = `<tr><th>${cardNumber}</th><th>Карта валидна</th><th>${bankIdDetect(bankId)}</th></tr>`;
    }else{ 
        
        validData = 'В номере карты ошибка';
        resultValidationCard.innerHTML = `<tr><th>${cardNumber}</th><th>Карта НЕ валидна</th><th></th></tr>`;
    }
};

function bankIdDetect(id){
    if (id >=51 && id <= 55 ) {
        return 'MasterCard'
    }
    if (id >=40 && id <= 49 ) {
        return 'VISA'
    }
    if (id >=56 && id <= 58 || id == 50 || id == 63 || id == 67) {
        return 'Maestro'
    }
    if (id == 60 ) {
        return 'Discover'
    }
    if (id == 34 || id == 37 ) {
        return 'American Express'
    }
    if (id == 62 ) {
        return 'China UnionPay'
    }
    if (id ==30 || id == 36 || id == 38 ) {
        return 'Diners Club'
    }else {
        return 'Else'
    }
    
};

