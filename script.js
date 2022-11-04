var index = 0;
var trueString = trueStringObject[index].trueString;
var labeled = trueStringObject[index].labeled;
var ordered = trueStringObject[index].ordered;
var lengthOfString;
var xR = 0;
var xW = 0;
var stringColor;
var outputString;
var propCorrect;
var propWrong;
var correctSolution = document.querySelector("#correct-solution");
correctSolution.setAttribute('id', 'correct-solution');
correctSolution.innerHTML = trueString;


var enteredString = document.querySelector("#entered-string");
// var enteredString = '27182818284';


enteredString.addEventListener("keydown", function (event) {


    // lengthOfString = enteredString.length;
    console.log(event.key);
});


for (let i = 0; i <= lengthOfString; i++) {


    if (enteredString[i] == trueString[i]) {
        stringColor = 'black';
        xR++;

    } else if (enteredString[i] != trueString[i]) {
        stringColor = 'red';
        xW++;
    }
    propCorrect = xR / lengthOfString;
    propWrong = xW / lengthOfString;

}

console.log(propCorrect)


