

let bankIdBase =    [
           {name: 'MasterCard', key1: 222100, key2: 272099},
           {name: 'MasterCard', key1: 510000, key2: 559999},
           {name: 'Maestro', key1: 501800, key2: 501899},
           {name: 'Maestro', key1: 502000, key2: 502099},
           {name: 'Maestro', key1: 503800, key2: 503899},
           {name: 'Maestro', key1: 589300, key2: 589399},
           {name: 'Maestro', key1: 630400, key2: 630499},
           {name: 'Maestro', key1: 675900, key2: 675999},
           {name: 'Maestro', key1: 676100, key2: 676399},
           {name: 'Maestro UK', key1: 675900, key2: 675999},
           {name: 'Maestro UK', key1: 676770, key2: 676779},
           {name: 'Maestro UK', key1: 676774, key2: 676774},
           {name: 'VISA Electron', key1: 402600, key2: 402699},
           {name: 'VISA Electron', key1: 417500, key2: 417500},
           {name: 'VISA Electron', key1: 450800, key2: 450899},
           {name: 'VISA Electron', key1: 484400, key2: 484499},
           {name: 'VISA Electron', key1: 491300, key2: 491399},
           {name: 'VISA Electron', key1: 491700, key2: 491799},
           {name: 'VISA', key1: 400000, key2: 499999},
           {name: 'American Express', key1: 340000, key2: 349999},
           {name: 'American Express', key1: 370000, key2: 379999},
           {name: 'Discover Card', key1: 601100, key2: 601199},
           {name: 'Discover Card', key1: 622126, key2: 622925},
           {name: 'Discover Card', key1: 644000, key2: 659999},
           {name: 'JCB', key1: 352800, key2: 358999},
           {name: 'InstaPayment', key1: 637000, key2: 639999},

           {name: 'Else', key1: 000000, key2: 999999}
                    ];

function cardsValidator(cardNumber = bankCreditCardNumber.value){

    cardNumber = cardNumber.replace(/\s/g, '').split('').filter((item) => Number.isInteger(+item));

let bankId = cardNumber.join('').slice(0, 6);

    sumCardNumber = cardNumber.reverse()
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
       
        resultValidationCard.innerHTML = `<tr><th>${cardNumber.reverse().join('')}</th><th>Карта валидна</th><th>${bankIdDetect(bankId)}</th></tr>`;
    }else{ 
        
        resultValidationCard.innerHTML = `<tr><th>${cardNumber.reverse().join('')}</th><th>Карта НЕ валидна</th><th></th></tr>`;
    }
};

function bankIdDetect(id){
    
    for(i = 0; i < bankIdBase.length; i++){
        if (bankIdBase[i].key1 <= +id && bankIdBase[i].key2 >= +id ){
            return bankIdBase[i].name;
            
        };
       
    };
};

