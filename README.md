# digit_exchange
A Easy To Use JS Library To Convert Your Amount Digits To Text In Indian Currency Units. For Example 987654321 Gives Ninety Eight Crore Seventy Six Lakh Fifty Four Thousand Three Hundred Twenty One.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).
```bash
$ npm install digit_exchange
```

## Example Use

```js
// include digit_exchange to project
const digitExchange = require('digit_exchange')

// Wants Only Convert Digit Amount To String 

var digitAmount = 987654321;

var stringAmount = digitExchange.getAmountString(digitAmount);

console.log(stringAmount);
// output : Ninety Crore Seventy Six Lakh Fifty Four Thousand Three Hundred Twenty One

// Wants To Add Your Own String Before Or After Converted Amount  

var digitAmount = 987654321;

var stringAmount = digitExchange.getAmountString(digitAmount,{prefix:"Rupees",suffix:"Only /-"});

console.log(stringAmount);

// output : Rupees Ninety Crore Seventy Six Lakh Fifty Four Thousand Three Hundred Twenty One Only /-

// Wants To Convert Digits To Ordinary Numbers
var digits = 987654321;

var digitString = digitExchange.getNumberString(digits);

console.log(digitString);
// output : Nine Eight Seven Six Five Four Three Two One

// Wants To Add Your Own String After Or Before Converted Digits To Ordinary String Numbers
var digits = 987654321;

var digitString = digitExchange.getNumberString(digits,{prefix:"Mobile :"});

console.log(digitString);
// output : Mobile: Nine Eight Seven Six Five Four Three Two One

// Wants To Add Seprator In Your Amount.By Default It Seprates Amount According To Indian Currency Units
var amount = 987654321;

var sepratedAmount = digitExchange.getSepratedAmount(amount);

console.log(digitString);
// output : 98,76,54,321

// Wants To Add Seprator In Your Amount According To Western Currency Units i.e USD
var amount = 987654321;

var sepratedAmount = digitExchange.getSepratedAmount(amount,{unit:"USD",prefix:"$",suffix:"Only /-"});

console.log(digitString);
// output : $ 987,654,321 Only /-

// Wants A Number In Ordinal 
var number = 23;

var ordinalNumber = digitExchange.getOrdinalNumber(number);

console.log(ordinalNumber);
// output : 23rd

// Wants A Number In Ordinal With Your Own Text 
var number = 23;

var ordinalNumber = digitExchange.getOrdinalNumber(number,{prefix:"Date ",suffix:"of June"});

console.log(ordinalNumber);
// output : Date 23rd of June

```

## Note To Use Currency Conversion
- Float Amount Will Converted In Integers
- Negative Amount Results In General String i.e -123 to One Hundred Twenty Three
- Amount Upto 13 Digits Converted To String
- Coversion Process Uses Only Indian Currency Units

## Note To Use Ordinary Conversion
- Float Number Will Converted In Integers
- Negative Numbers Results In General String i.e -123 to One Two Three
- Number Upto 15 Digits Converted To String
- Digit More Than 15 Must Be In String Format i.e "123546454436463463463468" 

## Features

  * Fast Conversion
  * Huge Conversion Range i.e Upto 99 Kharab Or 13 Digits
  * Indian Currency Units
  * No Other Dependencies Required
  * Ordinary Numbers Can Converted Of Infinte Range 

### Change Log

##### Version 5.1.1 
- Ordinary Numbers Conversion Support !!!

##### Version 4.1.1 
- Amount Limit Expended To 13 Digits

##### Version 3.1.1
- Float Amount Handling

##### Version 3.0.0
- Bug Fixed `BasicConversion`

##### Version 2.0.1
- String Amount Handling

##### Version 2.0.0
- Negative Amount Handling

##### Version 1.0.2
- Formatting Fixed  

##### Version 1.0.1
- Minor package tweaks

##### Version 1.0.0
- Initial release

## Indian Currency Units
- [Indian Numbering System](https://en.wikipedia.org/wiki/Indian_numbering_system)  

## Author 
Pawan Kumar Bishnoi

## Contributor
-[Sumil Jain](https://github.com/techhandler)

## Suggestions And Issues
Email : pawanbishnoi9383@gmail.com

