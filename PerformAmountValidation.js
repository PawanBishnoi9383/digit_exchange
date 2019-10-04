const FixNegative = require('./FixNegativeAmount');
function validateAmount(amount){
    var amt = parseInt(amount).toString();
   try{
    if(isNaN(amount)){
        throw "Amount Must Be In Digits Only";
    }
    if(amt.length > 13){
        throw "Only Amount Less Then 99 Kharab Can Converted";
    }
   }catch(err){
      console.log(err)
      return err;
   }
    return FixNegative(amount);
}
module.exports = validateAmount;
