const BasicConversion = require('./BasicConversion');
let NumberString = '';

function startProcess(number){

    if(typeof number == "number" && number.toString().length >15){
        console.log("More Than 15 Digits Must Be In Quotes");
        return 0;
    }
    if(isNaN(number)){
        console.log("Number Must Be Digits Only");
        return number;
    }
    if(number < 0){
        number = -(number);
    }
    number = number.toString().split('');
    while( number.length > 0){
        NumberString += NumberString.length == 0 ? BasicConversion(number.shift()) : ' '+BasicConversion(number.shift());
    }
    return NumberString;
}
module.exports = startProcess;
