// const arr = nonEmptyArr;

//Tworzenie tablic
const firstArr = new Array();
const emptyArr = [];
const nonEmptyArr = ['Janek', 'Andrzej', 'Ania'];

//Poruszanie sie po tablica
console.log(nonEmptyArr[0]);
console.log(nonEmptyArr[2]);

//Zmiana elementu w tablicy
nonEmptyArr[0] = ['Zosia', 'Kasia'];

console.log(nonEmptyArr[0][1]);

//Operacje na końcu tablic
nonEmptyArr.push('NoweImie');
nonEmptyArr.pop();

//Operacje na początku tablic
nonEmptyArr.unshift('StartEl');
nonEmptyArr.shift();


//Usuwanie elementów od podanego indexu z określoną ilością elementów
console.log('nonEmptyArr with splice', nonEmptyArr.splice(1, 2));
console.log('nonEmptyArr after splice', nonEmptyArr);


//Sprawdzanie czy istnieje element w tablicy, jesli istnieje to zwraca jego index jeśli nie to -1
console.log('nonEmptyArr after splice', nonEmptyArr.indexOf('Janek'));
