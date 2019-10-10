module.exports = function (amount) {
  amount = parseInt(amount);
  if (isNaN(amount)) return "Amount Must Be In Digits Only";
  if (amount.toString().length > 13) return "Only Amount Less Then 99 Kharab Can Converted";
  return Math.abs(amount);
};
