//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
    dnaStr = []
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "G") {
            dnaStr.push(["G", "C"])
        } else if (str[i] === "C") {
            dnaStr.push(["C", "G", ])
        } else if (str[i] === "T") {
            dnaStr.push(["T", "A", ])
        } else if (str[i] === "A") {
            dnaStr.push(["A", "T", ])
        } else {
            return false
        }
    }
    return dnaStr

};

var result = pairElement("ATCGA");
console.log(result)

//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]