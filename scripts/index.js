//zadanie
// 10 pytań;
// tabliczka mnożenia od 1 do 10;

let correctAnswersCount = 0;
// const numberOfQuestions = prompt("How many question do you want to answer?");
let numberOfQuestions = undefined;

function isNumberOfQuestionsCorrect(number){
    return isNaN(parseInt(number)) === true;
}

function getRandomNumberBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

do {
    numberOfQuestions = prompt("How many question do you want to answer?");
} while (isNumberOfQuestionsCorrect(numberOfQuestions));



for (let i = 1; i <= numberOfQuestions; i ++) {
    const firstNumber = getRandomNumberBetween(1, 10);
    const secondNumber = getRandomNumberBetween(1, 10);
// 0 - 0.9999

    console.log(firstNumber);
    console.log(secondNumber);


    const result = prompt(`How much is ${firstNumber} * ${secondNumber}?`);
    const numberResult = parseInt(result);

    if (isNaN(numberResult) === true) {
        alert('It must be a number.');
    } else {
        const correctResult = firstNumber * secondNumber;
        if (numberResult === correctResult) {
            console.log('Correct value.');
            correctAnswersCount++;
        } else {
            console.log('Incorrect.');
        }
    }
}

console.log(`You have ${correctAnswersCount} correct answers, you are a genius`);
const examPassed = correctAnswersCount / numberOfQuestions;
if (examPassed > 0.5) {
    console.log(` you have passed this difficult test.`);
    } else {
    console.log('please get back to school');
}









