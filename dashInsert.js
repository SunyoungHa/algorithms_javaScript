/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = isBigger("13");
console.log(result) // "1-3"

**/

function dashInsert(num) {
var str = '';
var numStr = num.toString()
for (var i = 0; i < numStr.length-1; i++) {

  if(numStr[i]%2===1){
    str += numStr[i] + '-';
  } else {
    str += numStr[i];
  }
}
str += numStr[numStr.length-1];

return str;

}


var result = dashInsert(233777)
console.log(result);
