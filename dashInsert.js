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

function dashInsert(str) {
    // Your code
    var charNum = str.toString();
    for (var i = 1; i < charNum.length; i++)
}

charNum = str.toString();
String result = "";

for (int i = 1; i < numbers.length; i++) {
    int value1 = Character.getNumericValue(numbers[i - 1]);
    int value2 = Character.getNumericValue(numbers[i]);
    result += value1;
    if (value1 % 2 != 0 && value2 % 2 != 0) {
        result += "-";
    }
}
result += numbers[numbers.length - 1];
System.out.println(result);