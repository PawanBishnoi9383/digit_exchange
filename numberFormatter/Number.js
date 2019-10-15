let numWords = [
  {"upper": "ZERO", "lower": "zero", "title": "Zero"},
  {"upper": "ONE", "lower": "one", "title": "One"},
  {"upper": "TWO", "lower": "two", "title": "Two"},
  {"upper": "THREE", "lower": "three", "title": "Three"},
  {"upper": "FOUR", "lower": "four", "title": "Four"},
  {"upper": "FIVE", "lower": "five", "title": "Five"},
  {"upper": "SIX", "lower": "six", "title": "Six"},
  {"upper": "SEVEN", "lower": "seven", "title": "Seven"},
  {"upper": "EIGHT", "lower": "eight", "title": "Eight"},
  {"upper": "NINE", "lower": "nine", "title": "Nine"}
];

function startProcess(originalNumber, options = {}) {
  var numberString, number = Number(originalNumber).toString();
  if (typeof originalNumber == "number" && number.length > 15)
    throw new Error("Need string to go beyond 15 digits!");
  if (isNaN(originalNumber)) return "NaN";
  number = number.replace('-', '').split('.');
  numberString = convertToWords(number[0], options);
  if (options.decimalValue && !isNaN(number[1]))
    numberString += ' ' + options.decimalValue + ' ' + convertToWords(number[1], options);
  if (Number(originalNumber) < 0 && options.signValue)
    numberString = options.signValue + ' ' + numberString;
  if (options.prefix)
    numberString = options.prefix + ' ' + numberString;
  if (options.suffix)
    numberString += ' ' + options.suffix;
  return numberString;
}

module.exports = startProcess;


function convertToWords(number, ref) {
  var letterCase = ref.letterCase ? ref.letterCase : "title" ;
  var numberString = '', x;
  number = number.split('');
  letterCase = letterCase.toLowerCase();
  if (letterCase === "sentence") {
    numberString += numWords[number[0]]['title'] + " ";
    letterCase = "lower";
  } else numberString += numWords[number[0]][letterCase] + " ";
  if (number.length > 1) {
    for (x = 1; x < number.length - 1; x++)
      numberString += numWords[number[x]][letterCase] + " ";
    numberString += numWords[number[x]][letterCase];
  }
  return numberString;
}