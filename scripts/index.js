const car = {
    color: 'red',
    // maximumSpeed: 230,
    // numberOfWheels: 4
};

// console.log(car['color']);

class Car {
    constructor(color) {
        this.color = color;
        this.maximumSpeed = 230;
        this.numberOfWheels = 4;
    }

    setColor = function(newColor) {
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
}

const bmw = new Car('black');
const open = new Car();

console.log(bmw);
console.log(open);

bmw.setColor('red');

console.log(bmw.getColor());

const wasSetNewColor = bmw.setColor(0);

if (wasSetNewColor === true) {
    //...
}




