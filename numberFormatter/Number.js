let numWords = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

function startProcess(originalNumber, options = {}) {
  let numberString, number = originalNumber.toString();
  if (typeof originalNumber == "number" && number.length > 15)
    throw new Error("Need string to go beyond 15 digits!");
  if (isNaN(originalNumber)) return "NaN";
  number = number.replace('-','').split('.');
  numberString = convertToWords(number[0]);
  if (options.decimalValue && !isNaN(number[1]))
    numberString += ` ${options.decimalValue} ${convertToWords(number[1])}`;
  if (Number(originalNumber) < 0 && options.signValue)
    numberString = `${options.signValue} ${numberString}`;
  if (options.prefix)
    numberString = `${options.prefix} ${numberString}`;
  if (options.suffix)
    numberString += ` ${options.suffix}`;
  return numberString;
}

module.exports = startProcess;


function convertToWords(number) {
  let numberString = '', x;
  number = number.split('');
  for (x = 0; x < number.length - 1; x++)
    numberString += numWords[number[x]] + " ";
  numberString += numWords[number[x]];
  return numberString;
}
