// 1. string

const city = 'Москва';
console.log('city', city, typeof city);

// 2. number

const age = 10;
console.log(age, 'лет', typeof age);

// 3. boolean

const isItTrue = true;
console.log(isItTrue, "Правда", typeof isItTrue);

// 4. null

let myFavouriteDrink = 'Water';
myFavouriteDrink = null;
console.log(null, typeof null);

// 5. Undefined

let myFavouriteCar
console.log(myFavouriteCar, 'Моя любимая машина', typeof myFavouriteCar);

// 6. Object

const aboutMe = {
    myName: "Марта",
    legs: 2
};
console.log('Меня зовут', aboutMe.myName, 'у меня', aboutMe.legs, 'ноги', typeof aboutMe);


// 7. Symbol

const ha = Symbol('ha');
console.log(ha, typeof ha);


// 8. bigBig = BigInt(20);

const bigBig = BigInt(20);
console.log(bigBig , typeof bigBig );