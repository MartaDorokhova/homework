// JavaScript появился в 1995 году?
// Спецификация JavaScript называется ECMAScript?
// JavaScript был создан за 1 месяц?

// let a1 = confirm('JavaScript появился в 1995 году?');

// if (a1===true) {
//     alert(`Верно`);    
// } 
// else { 
//     alert("Неверно. JavaScript появился в 1995 году.");
// };

// let a2 = confirm('Спецификация JavaScript называется ECMAScript?');

// if (a2===true) {
//     alert(`Верно`);    
// } 
// else { 
//     alert("Неверно. Спецификация JavaScript называется ECMAScript.");
// };

// let a3 = confirm('JavaScript был создан за 1 месяц?');

// if (a3===true) {
//     alert(`Верно`);    
// } 
// else { 
//     alert("Неверно. JavaScript был создан за 1 месяц.");
// };

//4

// for (let i = 0; i < 3; i += 1) {
//     let newStudent = prompt('Введите имя нового студента!');
//     if (newStudent) {
//       newStudent = newStudent.trim();
//       alert(`Добро пожаловать, ${newStudent}!`)
//     }
//   }

//   let i = 1;
//   let newStudent
//   while (i<=3) {
//     newStudent = prompt('Введите имя нового студента!');
//     if (newStudent) {
//         newStudent = newStudent.trim();
//         alert(`Добро пожаловать, ${newStudent}!`); console.log(i, newStudent); i++;
//   }
//   }


// let sum
// do {
//     console.log(i); i++;
//     sum += i;
//     console.log(sum);
// }
//     while (i<=100);

//     console.log(sum);

// let i = 0;


let sum;
let max = 100;
for (let i = 0; i<=max; i+=1) {
    sum=(i+1)*i/2;
if (i==max) {console.log(sum); alert(`Сумма всех чисел ${sum}`)}
}
