const hitCalculationProcess = require('./CalculationProcess');

module.exports = function (amount){
    let amountLength = 0;
    amount = amount.toString().split('');
    while(amount.length > 0){
        amountLength = amount.length;
        amount = hitCalculationProcess(amountLength,amount);
        if(typeof amount == 'string') return amount;
    }
};