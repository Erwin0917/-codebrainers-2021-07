const car = {
    color: 'red',
    // maximumSpeed: 230,
    // numberOfWheels: 4
};

// console.log(car['color']);
//homework - dokonczyc 3 metody (setSpeed, accelerate, slowdown) z weryfikacja:
// current speed nie moze byc wiekszy od maximumSpeed oraz mniejszy od 0
// musi byc zawsze "number"
// skrot od if
// * dorobic nowe, wedle uznania, wzorujac sie na rzeczywistych samochodach

class Car {
    constructor(color = 'black', maximumSpeed = 230, wheels = 4) {
        this.color = color;
        this.maximumSpeed = maximumSpeed;
        this.numberOfWheels = wheels;
        this.currentSpeed = 0;
    }

    setCurrentSpeed(currentSpeed = 0){
        if (typeof currentSpeed === "number"){
            if (currentSpeed > this.maximumSpeed || currentSpeed < 0){
                console.log('invalid number, it can\'t be below zero nor greater than maximum speed.');
            }else{
                this.currentSpeed = currentSpeed;
                }
        }
        console.log('insert number');

    }

    setColor = function(newColor = 'black') {
        if (typeof newColor === 'string') {
            this.color = newColor;
            return true;
        } else {
            return false;
        }
    }

    getColor = function () {
        return this.color;
    }

    accelerate = function (howMuch) {
        if (typeof howMuch === "number"){
            const higherSpeed = this.currentSpeed + howMuch;
            if (higherSpeed <= this.maximumSpeed){
                this.setCurrentSpeed(higherSpeed);
            }
        }
    }

    slowdown = function (howMuch) {
        const slowerSpeed = this.currentSpeed - howMuch;
        this.setCurrentSpeed(slowerSpeed);
    }
}

const bmw = new Car('black');
const open = new Car();

console.log(bmw.currentSpeed);
bmw.setCurrentSpeed('-40');
console.log(bmw.currentSpeed);




//
// console.log(bmw);
// console.log(open);
//
// bmw.setColor('red');
//
// console.log(bmw.getColor());
//
// const wasSetNewColor = bmw.setColor(0);
//
// if (wasSetNewColor === true) {
//     //...
// }




