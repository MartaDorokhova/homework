// 1
// const existingUserLogin = 'Marta';
// const existingUserPassword = '12345678';

// let userLogin = prompt("Введите логин").trim();
// let userPassword = prompt("Введите пароль").trim();

// console.log(userLogin);
// console.log(userPassword);

// if (userLogin===existingUserLogin && userPassword===existingUserPassword) {
//     alert(`Добро пожаловать, ${userLogin}`)
    
// } else { 
//     alert("Логин и (или) Пароль введены неверно!")
    
// }

// 2/

const correctAnswer1 = 4;
const correctAnswer2 = 4;
const correctAnswer3 = 1;
const correctAnswer4 = 12;
const correctAnswer5 = 6;


let a1 = Number(prompt("Сколько будет 2 + 2?").trim());

if (a1===correctAnswer1) {
    alert(`Ответ Верный`);
    b1=1;
    
} else { 
    alert("Ответ Неверный");
    b1=0;}

let a2 = Number(prompt("Сколько будет 2 * 2?").trim());

if (a2===correctAnswer2) {
    alert(`Ответ Верный`);
    b2=1;
    
} else { 
    alert("Ответ Неверный");
    b2=0;
}

let a3 = Number(prompt("У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?").trim());

if (a3===correctAnswer3) {
    alert(`Ответ Верный`);
    b3=1;
    
} else { 
    alert("Ответ Неверный");
    b3=0;}

let a4 = Number(prompt("У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?").trim());

if (a4===correctAnswer4) {
    alert(`Ответ Верный`);
    b4=1;
    
} else { 
    alert("Ответ Неверный");
    b4=0;}


let a5 = Number(prompt("Сколько будет 2 + 2 * 2?").trim());

if (a5===correctAnswer5) {
    alert(`Ответ Верный`);
    b5=1;
    
} else { 
    alert("Ответ Неверный");
    b5=0;}


 let correctAnswers = b1 + b2 + b3 + b4 + b5;
 let incorrectAnswers = 5 - correctAnswers;

 console.log(correctAnswers, incorrectAnswers);

 alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers} `);
