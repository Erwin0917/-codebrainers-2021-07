//zadanie
// 10 pytań;
// tabliczka mnożenia od 1 do 10;



const firstNumber = Math.round(Math.random() * 10) + 1;
const secondNumber = Math.round(Math.random() * 10) + 1;
// 0 - 0.9999
console.log(firstNumber);
console.log(secondNumber);
// console.log(Math.round(firstNumber));
// console.log(Math.ceil(firstNumber));
// console.log(Math.floor(firstNumber));



const result = prompt(`How much is ${firstNumber} * ${secondNumber}?`);
const numberResult = parseInt(result);

if (isNaN(numberResult) === true) {
    alert('It must be a number.');
} else {
    const correctResult = firstNumber * secondNumber;
    if (numberResult === correctResult) {
        alert('Correct value.');
    } else {
        alert('Incorrect.');
    }
}


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




