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


//
// #homework1
// function getRandomNumberBetween(min = 1, max = 10){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// function getNumbersDrawn(){
//     let availableNo = [];
//
//     for (let i = 1; i <= 49; i++) {
//         availableNo.push(i);
//     }
//
//     const numbersDrawn = [];
//
//     while ( numbersDrawn.length < 6 ) {
//
//         let randomBallNo = getRandomNumberBetween(1, availableNo.length);
//         // console.log("randomBallNo", randomBallNo)
//
//         const indexRandomBall = availableNo.indexOf(randomBallNo);
//         // console.log("indexRandomBall", indexRandomBall)
//
//         if (indexRandomBall !== -1){
//             availableNo.splice(indexRandomBall, 1);
//             numbersDrawn.push(randomBallNo);
//             // console.log("availableNo", availableNo);
//         }
//     }
//     return numbersDrawn;
// }
//
// function compareArray(arr1, arr2) {
//     // console.log('arr1', arr1, arr2);
//
//     if (arr1 === undefined || arr2 === undefined) {
//         return false;
//     }
//
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//
//     arr1 = arr1.sort();
//     arr2 = arr2.sort();
//     // console.log('arr1', arr1, arr2);
//
//
//     arr1 = arr1.toString();
//     arr2 = arr2.toString();
//     // console.log('arr1', arr1, arr2);
//
//     return arr1 === arr2;
// }
//
// // console.log(compareArray([8, 2, 9, 1], [22, 11, 1 , 13]))
//
// function lotteryGame() {
//     let jackpot = false;
//     let ticketsCount = 0;
//
//     const numberSelected = [1, 45, 21, 49, 37, 7];
//
//     while (jackpot === false) {
//         const numbersDraw = getNumbersDrawn();
//         jackpot = compareArray(numbersDraw, numberSelected);
//         ticketsCount++;
//     }
//
//     return ticketsCount;
// }
// console.log(lotteryGame())




// 1 - Filtrowanie -> Same imiona *
// 2 - Filtrowanie -> Zwraca same liczby -> Zwraca podwojone wartości a*a
// 3 - usunięcie niepoprawnych wartości (Nan, null, undefined)
// 4 - Imiona kończące się na 'A'

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


const names = ['Janek', NaN, null, undefined,  'andrzej', 'Ania', 'Adrian', 'kamil', 1 , 5, 7, "2", "9", ['abc', 'Ugh'], {name: 'Jakub', city: 'Gdynia'}, 'Ada', 'Kuba'];


// 1 - Filtrowanie -> Same imiona *
const remove1 = (name) => {
    console.log(name)
    if (typeof name === "string" && !isNaN(name) || typeof name === "number" && !isNaN(name) || name === null){
        return false;
    }

    if (typeof name === "string" || !isNaN(name)){
        return true;
    }
}

// 2 - Filtrowanie -> Zwraca same liczby -> Zwraca podwojone wartości a*a
const remove2 = (name) => {
    console.log(name)

    if (typeof name === "number" && isNaN(name) || typeof name === "string" ){
        return false;
    }

    return true;
}
const doubledNumbers = names.filter(remove2).map(n => n*n);
console.log(doubledNumbers)


// 4 - Imiona kończące się na 'A'
const remove4 = (arr) => {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
            if (arr[i] != null || arr[i] != undefined){
                if (arr[i][arr[i].length- 1] === "a" ){
                arr2.push(arr[i]);
                }
            }
    }
    return arr2;
}
// console.log(names.filter(removeNaN))
// const arrayWithoutNaN = names.filter(removeNaN)

// console.log(remove4(names))
// console.log(names.filter(remove1))


// 2


//
//
// const filterOutStringsLongerThan5 = (name) => {
//     return name.length > 5;
// }
//
// const newArr = names.filter(filterOutStringsLongerThan5).map(name => name + '22');
//
// const clearArr = names.filter(name => name.length > 5);
//
// // console.log([3 ,4 ,5].map((elem) => elem * 2))
//
// console.log('newArr', newArr);
//
// const oldName = 'Ada';
//
// filterOutStringsLongerThan5(names);