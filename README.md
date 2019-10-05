# digit_exchange
A Easy To Use JS Library To Convert Your Amount Digits To Text In Indian Currency Units. For Example 987654321 Gives Ninety Eight Crore Seventy Six Lakh Fifty Four Thousand Three Hundred Twenty One.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).
```bash
$ npm install digit_exchange
```

## Currency Conversion Example Use

```js
const DigitExchange = require('digit_exchange')

var digitAmount = 987654321;

var stringAmount = DigitExchange(digitAmount);

console.log(stringAmount);
```

## Note To Use Currency Conversion
- Float Amount Will Converted In Integers
- Negative Amount Results In General String i.e -123 to One Hundred Twenty Three
- Amount Upto 13 Digits Converted To String
- Coversion Process Uses Only Indian Currency Units

## Ordinary Conversion Example Use

```js
const NumberExchange = require('digit_exchange/Number.js')

var number = 987654321;

var stringNumber = NumberExchange(number);

console.log(stringNumber);
```

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

## Suggestions And Issues
Email : pawanbishnoi9383@gmail.com

