//zadanie
//wytyczne: ilosc subs.; kategorie odznaczen;
// <100 zapis o tym jak duzo brakuje, 100 = srebro, 1000 = zloto
// 1000 subs oraz 1000 lajkow = platyna

// prompt('Exercise-02');


const userSubs = prompt('How many subscribers do you have?');

console.log(userSubs);

if (userSubs == null || isNaN(parseInt(userSubs)) === true) {
    alert('you inserted an invalid value.');
} else {
    if (userSubs < 100) {
        const diff = 100 - userSubs;
        // console.log('you are missing ' + diff + ' subs to get a silver medal.');
        console.log(`you are missing ${diff} subs to get a silver medal.` );
    } else if (userSubs >= 100 && userSubs < 1000) {
        console.log(`you are having ${userSubs} subs, you get a silver medal.` );
    } else if (userSubs >= 1000) {
        console.log(`you are having ${userSubs} subs, you get a gold medal.` );
    }
}




