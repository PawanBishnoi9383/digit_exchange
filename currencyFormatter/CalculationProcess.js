const getCoversion = require('../utils/BasicConversion');
const getUnit = require('./CurrencyUnit');
let amountString = '';
function getAmount(len,amnt,amountLength){
    var am = '';
    for(var i =0;i<len;i++){
        am +=amnt.shift();
    }
    amountString += amountString.length == 0 ? getCoversion(am) : ' '+getCoversion(am);
    amountString += ' '+getUnit(amountLength);
    return amnt;
}
function hitCalculationProcess(amountLength,amt){
    if(amountLength == 5 || amountLength == 7 || amountLength == 9 || amountLength == 11 || amountLength == 13){
        return getAmount(2,amt,amountLength)
    }
    else{
        if( amountLength == 3 || amountLength == 4 || amountLength == 6 || amountLength == 8 || amountLength == 10 || amountLength == 12){
            return getAmount(1,amt,amountLength);
        }
        else{
           return amountString += " "+getCoversion(amt,amountLength);
        }
    }
}
module.exports = hitCalculationProcess;
