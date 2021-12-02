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


// 1 - Filtrowanie -> Same imiona *
// 2 - Filtrowanie -> Zwraca same liczby -> Zwraca podwojone wartości a*a
// 3 - usunięcie niepoprawnych wartości (Nan, null, undefined)
// 4 - Imiona kończące się na 'A'

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


const names = ['Janek', NaN, null, undefined,  'andrzej', 'Ania', 'Adrian', 'kamil', 1 , 5, 7, "2", "9", ['abc', 'Ugh'], {name: 'Jakub', city: 'Gdynia'}, 'Ada', 'Kuba'];


// 1 - Filtrowanie -> Same imiona *
const onlyNames = (name) => {
    return (!isNaN(name)) ? false : typeof name === "string" || !isNaN(name);

    // if (!isNaN(name) ){
    //     return false;
    // }
    //
    // if (typeof name === "string" || !isNaN(name)){
    //     return true;
    // }
}
console.log(names.filter(onlyNames));

// 2 - Filtrowanie -> Zwraca same liczby -> Zwraca podwojone wartości a*a
const onlyNumbers = name => isNaN(name) || typeof name === "string" ? false : true;

// onlyNumbers === remove2Old;
// const remove2Old = name => {
//     if (isNaN(name) || typeof name === "string") {
//         return false;
//     }
//     return true;
// }

const double = number => number * number;
const doubledNumbers = names.filter(onlyNumbers).map(double);
// console.log(doubledNumbers);


// 4 - Imiona kończące się na 'A'
const namesWithAOnEnd = arg => {
    if (typeof arg === "string" && isNaN(arg)) {
        if (arg.slice(-1) === "a" ) {
            return true;
        }
    }
}

// console.log(names.filter(namesWithAOnEnd))


const newArr = [1, 2, 3].map(e => {return e});
const newArr2 = [1, 2, 3].filter(() => {return true});





