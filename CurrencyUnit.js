function getUnit(amountLength){
    if(amountLength == 12 || amountLength ==13){
        return "Kharab";
    }
    if(amountLength == 10 || amountLength ==11){
        return "Arab";
    }
    if(amountLength == 9 || amountLength == 8){
        return "Crore";
    }
    if(amountLength == 7 || amountLength == 6){
        return "Lakh";
    }
    if(amountLength == 5 || amountLength ==4 ){
        return "Thousand";
    }
    if(amountLength == 3){
        return "Hundred";
    }else{
        return "";
    }
}
module.exports = getUnit;
