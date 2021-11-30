// // const arr = nonEmptyArr;
//
// //Tworzenie tablic
// const firstArr = new Array();
// const emptyArr = [];
// const nonEmptyArr = ['Janek', 'Andrzej', 'Ania'];
//
// //Poruszanie sie po tablica
// console.log(nonEmptyArr[0]);
// console.log(nonEmptyArr[2]);
//
// //Zmiana elementu w tablicy
// nonEmptyArr[0] = ['Zosia', 'Kasia'];
//
// console.log(nonEmptyArr[0][1]);
//
// //Operacje na końcu tablic
// nonEmptyArr.push('NoweImie');
// nonEmptyArr.pop();
//
// //Operacje na początku tablic
// nonEmptyArr.unshift('StartEl');
// nonEmptyArr.shift();
//
//
// //Usuwanie elementów od podanego indexu z określoną ilością elementów
// console.log('nonEmptyArr with splice', nonEmptyArr.splice(1, 2));
// console.log('nonEmptyArr after splice', nonEmptyArr);
//
//
// //Sprawdzanie czy istnieje element w tablicy, jesli istnieje to zwraca jego index jeśli nie to -1
// console.log('nonEmptyArr after splice', nonEmptyArr.indexOf('Janek'));


function getRandomNumberBetween(min = 1, max = 10){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNumbersDrawn(){
    let availableNo = [];

    for (let i = 1; i <= 49; i++) {
        availableNo.push(i);
    }

    const numbersDrawn = [];

    while ( numbersDrawn.length < 6 ) {

        let randomBallNo = getRandomNumberBetween(1, availableNo.length);
        // console.log("randomBallNo", randomBallNo)

        const indexRandomBall = availableNo.indexOf(randomBallNo);
        // console.log("indexRandomBall", indexRandomBall)

        if (indexRandomBall !== -1){
            availableNo.splice(indexRandomBall, 1);
            numbersDrawn.push(randomBallNo);
            // console.log("availableNo", availableNo);
        }
    }
    return numbersDrawn;
}

function compareArray(arr1, arr2) {
    // console.log('arr1', arr1, arr2);

    if (arr1 === undefined || arr2 === undefined) {
        return false;
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    arr1 = arr1.sort();
    arr2 = arr2.sort();
    // console.log('arr1', arr1, arr2);


    arr1 = arr1.toString();
    arr2 = arr2.toString();
    // console.log('arr1', arr1, arr2);

    return arr1 === arr2;
}

// console.log(compareArray([8, 2, 9, 1], [22, 11, 1 , 13]))

function lotteryGame() {
    let jackpot = false;
    let ticketsCount = 0;

    const numberSelected = [1, 45, 21, 49, 37, 7];

    while (jackpot === false) {
        const numbersDraw = getNumbersDrawn();
        jackpot = compareArray(numbersDraw, numberSelected);
        ticketsCount++;
    }

    return ticketsCount;
}
console.log(lotteryGame())
