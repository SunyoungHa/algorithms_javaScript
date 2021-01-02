//Challenge time! 
//Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Check out Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

function factorializeIt(num) {
    if (num === 0 || num === 1)
        return 1;

    for (var i = num - 1; i >= 1; i--) {
        num = num * i;
    }

    return num;

}
var result = factorializeIt(5);
console.log(result)

// test1