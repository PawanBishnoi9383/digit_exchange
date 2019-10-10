let numberString = '', numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
  x = 0;

function startProcess(number) {
  if (typeof number == "number" && number.toString().length > 15)
    throw new Error("Use string to go beyond 15 digits !");

  if (isNaN(number)) return "NaN";

  if (number < 0) {
    number = -(number);
  }
  if (!Number.isInteger(Number(number))) number = parseInt(number);

  number = number.toString().split('');
  for (x = 0; x < number.length - 1; x++)
    numberString += numWords[number[x]] + " ";
  numberString += numWords[number[x]];

  return numberString;
}

module.exports = startProcess;
