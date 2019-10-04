# digit_exchange
A Easy To Use JS Library To Convert Your Amount Digits To Text In Indian Currency Units. For Example 987654321 Gives Ninety Eight Crore Seventy Six Lakh Fifty Four Thousand Three Hundred Twenty One.

## Note
- Float Amount Will Converted In Integers
- Negative Amount Results In General String i.e -123 to One Hundred Three
- Amount Upto 11 Digits Converted To String
- Coversion Process Uses Only Indian Currency Units.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).
```bash
$ npm install digit_exchange
```

## Example Use

```js
const DigitExchange = require('digit_exchange')

var digitAmount = 987654321;

var stringAmount = DigitExchange(digitAmount);

console.log(stringAmount);
```
## Features

  * Fast Conversion
  * Huge Conversion Range i.e Upto 99 Arab
  * Indian Currency Units
  * No Other Dependencies Required

### Change Log

##### Version 4.1.1 
- Final Release

##### Version 3.1.1
- Float Amount Handling

##### Version 3.0.0
- Bug Fixed `BasiConversion`

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

## Author 
Pawan Kumar Bishnoi

## Suggestions And Issues
Email : pawanbishnoi9383@gmail.com

