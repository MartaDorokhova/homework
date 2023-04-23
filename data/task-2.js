//task 2
//1
console.log(+'50', typeof +'50'); // неявное
console.log(Number('50'), typeof +'50'); // явное

//2
console.log(Number('100'), typeof Number('100')); // явное 
//3
console.log('' + 1, typeof ('' + 1)); // неявное
console.log(String('' + 1), typeof String('' + 1)); // явное
//4
console.log(String(1), typeof String(1)); // явное 
//5
console.log(Boolean(0), typeof Boolean(0)); // явное 
//6
console.log(+'001', typeof +'001'); // неявное
console.log(Number('001'), typeof Number('001')); // явное
//7
console.log(1 + '', typeof  (1 + '')); // неявное
console.log(String(1 + ''), typeof String(1 + '')); // неявное
//8
console.log(Boolean(1), typeof Boolean(1)); // явное 
//9
console.log(String(001), typeof String(001)); // явное 
//10
console.log(Number('Hello World'), typeof Number('Hello World')); // явное 

//task 3
console.log;
console.log(Number(console.log), Boolean(console.log), String(console.log));

{ name: 'Maxim' };
console.log(Number({ name: 'Maxim' }), Boolean({ name: 'Maxim' }), String({ name: 'Maxim' }));

Symbol('key');
// console.log(Number(Symbol('key')), Boolean(Symbol('key')), String(Symbol('key')));

Number
console.log(Number(Number), Boolean(Number), String(Number));

''
console.log(Number(''), Boolean(''), String(''));

0
console.log(Number(0), Boolean(0), String(0));

-10
console.log(Number(-10), Boolean(-10), String(-10));

'-105'
console.log(Number('-105'), Boolean('-105'), String('-105'));

//task 4
// 1
console.log(Number(' 1 2 3 4 5')); //12345 - NaN
// 2
console.log(Number('1234 5')); //12345 - NaN
// 3
console.log(Number('12345'));//12345
// 4
console.log(String(false)); //'false' - false
// 5
console.log(Boolean(0000000)); //false
// 6
console.log(Boolean(0.0000001)); //true
// 7
console.log(String(undefined)); //'undefined' - undefined
// 8
console.log(Number('100f')); //NaN
// 9
console.log(Number('100')); //100
// 10
console.log(Number('000001')); //1


const text = 'NodeJS and JavaScript';
text[0] = 'n';
console.log(text);
