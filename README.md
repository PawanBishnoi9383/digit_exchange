# digit_exchange
An Easy To Use JS Library To Convert Your Amount Digits To Text In Indian Currency Units. For Example 987654321 Gives Ninety Eight Crore Seventy Six Lakh Fifty Four Thousand Three Hundred Twenty One.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).
```bash
$ npm install digit_exchange
```

## Include digit_exchange To Your Project 

```js
const digitExchange = require('digit_exchange');
```

## Digit To Amount String
```js

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

```
## Digit To Ordinary Numbers String
```js

// To convert digits to ordinary numbers use  
digitExchange.getNumberString(987654321); // Nine Eight Seven Six Five Four Three Two One

// To convert float number give a String to replace the decimal
digitExchange.getNumberString(964.54, {decimalValue:"Decimal"}); // Nine Six Four Decimal Five Four 
digitExchange.getNumberString(964.54, {decimalValue:"Point"}); // Nine Six Four Point Five Four 
digitExchange.getNumberString(964.54, {decimalValue:"-"}); // Nine Six Four - Five Four 

// To add a String before or after 
digitExchange.getNumberString(96454, {prefix:"Code:"}); // Code: Nine Six Four Five Four
digitExchange.getNumberString(4, {suffix:"years"}); // Four years

// To convert a negative number give a string to replace the negative sign
digitExchange.getNumberString(-364, {signValue:"Minus"}); // Minus Three Six Four
digitExchange.getNumberString(-364, {signValue:"Negative"}); // Negative Three Six Four

digitExchange.getNumberString(-1.2, {signValue:"-", decimalValue:"Point"}); // - One Point Two  

```
## Seprators In Amount
```js
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

```
## Ordinal Number
```js
// Want Ordinal Number
var number = 23;

var ordinalNumber = digitExchange.getOrdinalNumber(number);

console.log(ordinalNumber);
// output : 23rd

// Want Ordinal Number With Own Text
var number = 23;

var ordinalNumber = digitExchange.getOrdinalNumber(number,{prefix:"Date",suffix:"June" });

console.log(ordinalNumber);
// output : Date 23rd June
```
## Note To Use Currency Conversion
- Float Amount Will Converted In Integers
- Negative Amount Results In General String i.e -123 to One Hundred Twenty Three
- Amount Upto 13 Digits Converted To String
- Coversion Process Uses Only Indian Currency Units

## Note To Use Ordinary Conversion
- Number Upto 15 Digits Converted To String
- Digit More Than 15 Must Be In String Format i.e "123546454436463463463468" 

## Features

  * Fast Conversion
  * Huge Conversion Range i.e Upto 99 Kharab Or 13 Digits
  * Indian Currency Units
  * No Other Dependencies Required
  * Ordinary Numbers Can Converted Of Infinte Range 

### Change Log

#### Version 6.0.0
- Ordinal Number Support
- Seprators Support Indian And Western

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
- [Sumil Jain](https://github.com/techhandler)

## Suggestions And Issues
Email : pawanbishnoi9383@gmail.com

