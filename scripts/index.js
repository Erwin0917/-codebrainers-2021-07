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


// function getRandomNumberBetween(min = 1, max = 10){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// let availableNo = [];
// for (let i = 1; i <= 49; i++){
//     availableNo.push(i);
// }
//
// function getNumbersDrawn(){
//     const numbersDrawn = [];
//
//     while ( numbersDrawn.length < 3 ) {
//
//         let randomBallNo = getRandomNumberBetween(1, availableNo.length);
//         console.log("randomBallNo", randomBallNo)
//
//         const indexRandomBall = availableNo.indexOf(randomBallNo);
//         console.log("indexRandomBall", indexRandomBall)
//
//         if (indexRandomBall !== -1){
//             availableNo.splice(indexRandomBall, 1);
//             numbersDrawn.push(randomBallNo);
//             console.log("availableNo", availableNo);
//         }
//
//     }
//     return numbersDrawn;
//
// }

// function lotteryGame(){
//     let jackpot = false;
//     let ticketsCount = 0;
//
//     const numberSelected = [1, 45, 21, 49, 37, 7];
//
//     while (jackpot === false) {
//         const numbersDraw = getNumbersDrawn();
//
//         jackpot = compareArray(numbersDraw, numberSelected);
//
//         ticketsCount++;
//     }
//     return ticketsCount
// }

// sorting drown array by ascending order
// function sortedNumbersDrawn(){
//     let newNumbersDrawn = getNumbersDrawn();
//     let sortedNumbersDrawn = newNumbersDrawn.sort(function(a, b){return a-b})
//     console.log("sortedNumbersDrawn: ", sortedNumbersDrawn);
//
//     return sortedNumbersDrawn
// }
//
// sortedNumbersDrawn()

// let newNumbersDrawn = getNumbersDrawn();
// let sortedNumbersDrawn = newNumbersDrawn.sort(function(a, b){return a-b})
// console.log("sortNumbersDrawn: ", sortedNumbersDrawn);

// let numberSelected = [1, 45, 21];
// let sortNumberSelected = numberSelected.sort(function(a, b){return a-b});
// console.log("sortNumberSelected: ", sortNumberSelected.sort(function(a, b){return a-b}));


// without function
// let ticketsCount = 0;
// while (sortedNumbersDrawn() !== sortNumberSelected) {
//     let jackpot = false;
//     ticketsCount ++;
//     console.log("The numbers don't match ", "sortedNumbersDrawn: ", sortedNumbersDrawn, "numberSelected: ", sortNumberSelected);
//     getNumbersDrawn();
//     if (sortedNumbersDrawn() === sortNumberSelected){
//         console.log("Congratulations The numbers match ", "sortedNumbersDrawn: ", sortedNumbersDrawn, "numberSelected: ",
//             sortNumberSelected, "System guessed correct in: ", ticketsCount);
//         jackpot = true;
//     }
// }

//Tutaj dziadostwo tak jakby pobiera cały czas number i nie wiem nie kończy/uzupełnia działania tablicy.
// let ticketsCount = 0;
//
// sortNumberSelected = [9,17, 34]
// function compareArray(a, b) {
//     while (sortedNumbersDrawn() !== sortNumberSelected) {
//
//         let jackpot = false;
//         ticketsCount++;
//         console.log("The numbers don't match ", "sortedNumbersDrawn: ", sortedNumbersDrawn, "numberSelected: ", sortNumberSelected);
//         getNumbersDrawn();
//         console.log("tutaj powinno pobierac nowy numery")
//         if (sortedNumbersDrawn() === sortNumberSelected) {
//             console.log("Congratulations The numbers match ", "sortedNumbersDrawn: ", sortedNumbersDrawn, "numberSelected: ",
//                 sortNumberSelected, "System guessed correct in : ", ticketsCount, "try");
//             jackpot = true;
//         }return jackpot;
//     }return ticketsCount;
// }
// compareArray(sortedNumbersDrawn(), sortNumberSelected)

// console.log("whateva")
//
// function lotteryGame(){
//     let jackpot = false;
//     let ticketsCount = 0;
//
//     const numberSelected = [1, 45, 21, ];
//     console.log("whateva");
//
//     while (jackpot === false) {
//         // const numbersDrawn = getNumbersDrawn();
//         //lub też
//         const numbersDrawn = sortedNumbersDrawn();
//
//         if (numbersDrawn === numberSelected){
//             console.log("hurra")
//             jackpot = true
//             ticketsCount++;
//         }
//
//     }
//     return ticketsCount, jackpot
// }
// lotteryGame()
//z zajęć
// function lotteryGame(){
//     let jackpot = false;
//     let ticketsCount = 0;
//
//     const numberSelected = [1, 45, 21, ];
//
//     while (jackpot === false) {
//         const numbersDrawn = getNumbersDrawn();
//
//         jackpot = compareArray(numbersDrawn, numberSelected);
//
//         ticketsCount++;
//     }
//     return ticketsCount
// }

// function compareArray(arr1,arr2){

//return true or false
// }
// function compareArray(array1, array2){
//
//     while (sortedNumberDrawn() !== sortNumberSelected){
//         console.log("not-working", "sortedNumbersDrawn: ", sortedNumbersDrawn, "numberSelected: ", sortNumberSelected )
//     let newArrayNo = sortedNumberDrawn()
//     if (sortedNumberDrawn == sortNumberSelected){
//         let jackpot = false;
//         console.log("work")
//         return true
//     }
//     }
//     //return true or false
// }

//tutaj inny sposób znaleziony w internetach
// const equals = (a, b) => JSON.stringify(sortedNumbersDrawn) === JSON.stringify(sortNumberSelected);
// console.log("equals: ", equals())

//czemu to kurwa nie działa skoro to takie proste
// a = 1;
// b = 1;
// if (a===b){
//     console.log("true")
// };
// //tutaj jako funkcja
// a = 1;
// b = 1;
//
// function compare(a, b){
//     let flag = false
//     if (a === b)
//         flag = true
//     return console.log("flag is: ", flag)
// }
// compare(a, b)


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//                                          HOMEWORK 2
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//
// let ticket
// numberSelected = [1, 45, 21, 49, 37, 7]
// numberSelected.forEach(function (a) {
//     ticket = ticket + a
//     console.log("ticket: ", ticket)
// });

// numberSelected = [1, 45, 21, 49, 37, 7]

// numberSelected.forEach(element => console.log("This is :", element))
// numberSelected.forEach(element => console.log("This is new:", element + 5))

// numberSelected = [1, 45, 21, 49, 37, 7]

// let arr = numberSelected.map(function (a) {
//
//     return 2 + 2;
// });
// let a = numberSelected.sort(function (a, b) {
//     if (a - b) {
//         console.log(a, b)
//         return 1;
//     }
//
//     if (b - a) {
//         return -1;
//     }
//
//     if (a === b) {
//         return 0;
//     }
// });
// const arr2 = numberSelected.filter(function (a) {
//     if(a === 45) {
//         console.log("kaboom")
//
//         return true;
//     }
// });
//
// console.log(arr2)
//
// const arr3 = numberSelected.some(function (a) {
//     if (a === 21) {
//         return true;
//     }
// });
//
// console.log(arr3);

// const someArr = [1, 4, 6, 8]
//
// const map1 = someArr.map(x => x *2);
// console.log(map1)


// numberSelected.reduce();


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


// const names = ['Janek', NaN,    'andrzej', 'Ania', 'Adrian', 'kamil', 1 , 5, 7, "2", "9", ['abc', 'Ugh'], {name: 'Jakub', city: 'Gdynia'}, 'Ada', 'Kuba', ];
//
// const removeNaN = (name) => {
//     // console.log(name)
//
//     if (typeof name === "number" && isNaN(name)){
//         return false;
//     }
//     return true;
// }
// // console.log(names.filter(removeNaN))
// const arrayWithoutNaN = names.filter(removeNaN)
//
//
// const filterOutStringsLongerThan5 = (name) => {
//     return name.length > 5;
// }
//
// console.log(filterOutStringsLongerThan5(names))
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

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//                                          HOMEWORK 2 - solution
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const names = ['Janek', NaN,  undefined,  'andrzej', 'Ania', 'Adrian', 'kamil', 1 , 5, 7, "2", "9", ['abc', 'Ugh'], {name: 'Jakub', city: 'Gdynia'}, 'Ada', 'Kuba', null];

// 1 - Filtrowanie -> Same imiona *

// function remove(names){
//     const newArr = names.filter(e => typeof e === 'string' && e !== '' && e !== '2' && e !== '9');
//
//     return console.log(newArr);
// };
// remove(names);
//
// //funkcja strzałkowa
// newArr1s = names.filter(e => typeof e === 'string' && e !== '' && e !== '2' && e !== '9');
// console.log("newArr1s", newArr1s);


// 2 - Filtrowanie -> Zwraca same liczby -> Zwraca podwojone wartości a*a


// let filtered = names.filter(Number.isInteger);
// console.log(filtered);
//
// const multyply = filtered.map(x => x*2);
// console.log(multyply);
//
// const tryInOne = (names) => {
//     let filtered2 = names.filter(Number.isInteger);
//     console.log(filtered2);
//
//     const multyply2 = filtered2.map(x => x*2);
//     console.log(multyply2);
// }
// tryInOne(names)

// 3 - usunięcie niepoprawnych wartości (Nan, null, undefined)

// const removeUnnecessaryValue = (names) => {
//     let mostWantedValue = names.filter(e => e !== undefined && e !== null && isNaN(e))
//     return mostWantedValue
// }
//
// console.log(removeUnnecessaryValue(names))

// 4 - Imiona kończące się na 'A'

// const wordsFinishWithA = (name) => {
//     const newArr = names.filter(e => typeof e === 'string')
//     const finishWithA = if(newArr)
//     console.log(newArr)
// }
// wordsFinishWithA(names)

console.log(names.endsWith('a', ))
// typeof name === "number

