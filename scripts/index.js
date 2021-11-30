//
// numberSelected.forEach(function (a) {
//     ticket = ticket + a;
// });
// const arr = numberSelected.map(function (a) {
//     return 2 + 2;
// });
// numberSelected.sort(function (a, b) {
//     if (a - b) {
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

// numberSelected.reduce();

// 1 - Filtrowanie -> Same imiona *
// 2 - Filtrowanie -> Zwraca same liczby -> Zwraca podwojone wartości a*a
// 3 - usunięcie niepoprawnych wartości (Nan, null, undefined)
// 4 - Imiona kończące się na 'A'

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


const names = ['Janek', NaN, null, undefined,  'andrzej', 'Ania', 'Adrian', 'kamil', 1 , 5, 7, "2", "9", ['abc', 'Ugh'], {name: 'Jakub', city: 'Gdynia'}, 'Ada', 'Kuba'];

const removeNaN = (name) => {
    console.log(name)

    if (typeof name === "number" && isNaN(name)){
        return false;
    }
    return true;
}
console.log(names.filter(removeNaN))
const arrayWithoutNaN = names.filter(removeNaN)

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


