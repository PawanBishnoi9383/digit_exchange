function fixNegative(amount){
    if( amount < 0){
        return -(amount); 
    }
    return amount;
}
module.exports = fixNegative;