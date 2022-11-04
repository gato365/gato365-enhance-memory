var index = 0;
var trueString = trueStringObject[index].trueString;
var labeled = trueStringObject[index].labeled;
var ordered = trueStringObject[index].ordered;
var enteredString = '27182818284';
var lengthOfString = enteredString.length;
var xR = 0;
var xW = 0;
var stringColor;
var outputString;
var propCorrect;
var propWrong;
console.error(lengthOfString);


for (let i = 0; i <= lengthOfString; i++) {


    if (enteredString[i] == trueString[i]) {
        stringColor = 'black';
        xR++;
        
    } else if (enteredString[i] != trueString[i]) {
        stringColor = 'red';
        xW++;
    }
    propRight = xR/lengthOfString;
    propWrong = xW/lengthOfString;

}

console.log(propRight)


