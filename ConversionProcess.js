const hitCalculationProcess = require('./CalculationProcess');
function startConversionProcess(amount){
    let FinalAmountString = '';
    let amountLength = 0;
    amount = amount.toString().split('');
    while(amount.length > 0){
        amountLength = amount.length;
        amount = hitCalculationProcess(amountLength,amount);
        if(typeof amount == 'string')
        {
            FinalAmountString = amount;
            return FinalAmountString;
        }
    }
    
}
module.exports = startConversionProcess;