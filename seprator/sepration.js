var validate = require('../utils/PerformAmountValidation');

function seprationProcess(amount, options) {
    let sepratedAmount = '';
    amount = validate.amount(amount);
    if (options && options.unit && options && options.unit.toLowerCase() == 'usd') {
        sepratedAmount = amount.toLocaleString();
        return ((options && options.prefix ? options.prefix : "").trim() + " " + sepratedAmount + " " + (options && options.suffix ? options.suffix : "").trim()).trim();
    }
    else {
        amount = amount.toString().split('');
        let amountLength = amount.length;
        while (amountLength > 0) {
            if (amountLength <= 3) {
                for (let i = 0; i < amountLength; i++) {
                    sepratedAmount += amount.shift();
                }
                return ((options && options.prefix ? options.prefix : "").trim() + " " + sepratedAmount + " " + (options && options.suffix ? options.suffix : "").trim()).trim();
            }
            if (amountLength == 5 || amountLength == 7 || amountLength == 9 || amountLength == 11 || amountLength == 13) {
                for (let i = 0; i < 2; i++) {
                    sepratedAmount += amount.shift();
                }
                sepratedAmount += ',';
            }
            else {
                if (amountLength == 4 || amountLength == 6 || amountLength == 8 || amountLength == 10 || amountLength == 12) {
                    for (let i = 0; i < 1; i++) {
                        sepratedAmount += amount.shift();
                    }
                    sepratedAmount += ',';
                }
            }
            amountLength = amount.length;
        }
    }
}
module.exports = seprationProcess;