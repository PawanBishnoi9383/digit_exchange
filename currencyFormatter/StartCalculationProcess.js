const validateAmount = require('../utils/PerformAmountValidation');
const startConversionProcess = require('./ConversionProcess');
function getAmountString(amount,options){
    let _amount = amount;
    let validationResult = validateAmount(_amount);
    if(typeof(validationResult) == "string")
        throw new Error("Execution Ended Without Conversion !");
     _amount = validationResult;
     _amount = startConversionProcess(_amount);
    _amount = (options && options.prefix ? options.prefix : "").trim() + " " + _amount + " " + (options && options.suffix ? options.suffix : "").trim();
    return _amount.trim();
}
module.exports = getAmountString;