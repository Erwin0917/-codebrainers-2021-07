//zadanie
//wytyczne: ilosc subs.; kategorie odznaczen;
// <100 zapis o tym jak duzo brakuje, 100 = srebro, 1000 = zloto
// 1000 subs oraz 1000 lajkow = platyna

// prompt('Exercise-02');

let correctAnswersCount = 0;
const numberOfQuestions = 6;

for (let i = 1; i <= numberOfQuestions; i ++) {
    const firstNumber = Math.floor(Math.random() * 10) + 1;
    const secondNumber = Math.floor(Math.random() * 10) + 1;
    //0 - 0.9999
    console.log(firstNumber);
    // console.log(Math.round(firstNumber));
    // console.log(Math.ceil(firstNumber));
    // console.log(Math.floor(firstNumber));

    console.log(secondNumber);
    // console.log(secondNumber);
    // console.log(secondNumber);

    const result = prompt(`How much is ${firstNumber} * ${secondNumber}?`);
    numberResult = parseInt(result);

    if (isNaN(numberResult) === true) {
        alert("It must be a number.");
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
console.log(`Your correct answers: ${correctAnswersCount}`);
const examPassed =  correctAnswersCount / numberOfQuestions;
if (examPassed > 0.5) {
    console.log('Congratulations! You have passed exam')
} else {
    console.log("So sorry. You didn't pass exam");
}











// const userSubs = prompt('How many subscribers do you have?');
//
// console.log(userSubs);
//
// if (userSubs == null || isNaN(parseInt(userSubs)) === true) {
//     alert('you inserted an invalid value.');
// } else {
//     if (userSubs < 100) {
//         const diff = 100 - userSubs;
//         // console.log('you are missing ' + diff + ' subs to get a silver medal.');
//         console.log(`you are missing ${diff} subs to get a silver medal.` );
//     } else if (userSubs >= 100 && userSubs < 1000) {
//         console.log(`you are having ${userSubs} subs, you get a silver medal.` );
//     } else if (userSubs >= 1000) {
//         console.log(`you are having ${userSubs} subs, you get a gold medal.` );
//     }
// }




