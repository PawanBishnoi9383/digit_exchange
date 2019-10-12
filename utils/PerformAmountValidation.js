module.exports = function (amount) {
  if (isNaN(amount)) 
    throw new Error("Amount Must Be In Digits Only");
  amount = parseInt(amount);
  if (amount.toString().length > 13)  
    throw new Error("Amount Length More Then 13 Digits Not Allowed");
  return Math.abs(amount);
};
