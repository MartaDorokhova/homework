// 1.
let age = 33;
console.log(Number(age), Boolean(age), String(age));

// 2.

let name = 'Roman';
console.log(Number('Roman'), Boolean('Roman'), String('Roman'));

// 3.

let truefalse = true;
console.log(Number(true), Boolean(true), String(true));

// 4.

let something;
console.log(Number(something), Boolean(something), String(something));

// 5.

let qq = "";
console.log(Number(qq), Boolean(qq), String(qq));

// 6.

let men = {
    name1:'Bob',
    age1: 12
};
console.log(men.name1, men.age1);
console.log(Number(men), Boolean(men), String(men));

// 7.

let ww = Symbol('ww');
console.log(Boolean(ww), String(ww));
// console.log(Number(ww));  - в консоли ошибка

// 8.

let bigBig = BigInt(10000);
console.log(Number(bigBig), Boolean(bigBig), String(bigBig));