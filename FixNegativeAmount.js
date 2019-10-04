function fixNegative(amount){
    amount = parseInt(amount);
    if( amount < 0){
        return -(amount); 
    }
    return Number(amount);
}
module.exports = fixNegative;
