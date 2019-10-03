const validateAmount = require('./PerformAmountValidation');
const startConversionProcess = require('./ConversionProcess')
function getAmountString(amount){
    let _amount = amount;
    let validationResult = validateAmount(_amount);
    if(typeof(validationResult) == "string"){
        console.log("Execution Ended Without Conversion !");
        return 0;
    }
     _amount = validationResult;
    return startConversionProcess(_amount);
}
module.exports = getAmountString;