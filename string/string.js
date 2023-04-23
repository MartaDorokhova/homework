const myName = 'Марта';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилен Минин';
const reasonText = 'хочу сменить раоту';
const numberOfMonth = '0,5';

console.log(`Всем привет! Меня зовут ${myName}. 
Сейчас я изучаю язык программирования ${programmingLanguage} 
на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. 
До этого я изучала ${programmingLanguage} ${numberOfMonth} месяца. 
Я уверена, что пройду данный курс до конца!`);

let myInfoText = `Всем привет! Меня зовут ${myName}. 
Сейчас я изучаю язык программирования ${programmingLanguage} 
на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. 
До этого я изучала ${programmingLanguage} ${numberOfMonth} месяца. 
Я уверена, что пройду данный курс до конца!`;

console.log(myInfoText.replaceAll('JavaScript', 'javascript'));

myInfoText = myInfoText.replaceAll('JavaScript', 'javascript');

console.log(myInfoText.replaceAll('курс', 'КУРС'));

myInfoText = myInfoText.replaceAll('курс', 'КУРС');
console.log(myInfoText);
console.log('lenght', myInfoText.length);
console.log(myInfoText[0], myInfoText[myInfoText.length - 1]);

// let userAnswer = prompt('Как вас зову?');
// userAnswer = userAnswer.toLowerCase();
// userAnswer = userAnswer.trim();

// console.log(userAnswer);


// let userAge = prompt('Сколько вам лет?');
// userAge = userAge.trim();
// userAge = Number(userAge);

// console.log(userAge);  
// let alertText = `Вас зовут ${userAnswer} и вам ${userAge} лет`;  
// alert(alertText);

// let userString = prompt('Какую строку обрезать');
// userString = userString.trim();

// let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки');
// startSliceIndex = startSliceIndex.trim();

// let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки');
// endSliceIndex = endSliceIndex.trim();

// string = userString.slice(startSliceIndex, endSliceIndex);

// console.log(string);

// alert(`Результат: ${string}`)


// let userText = prompt('Введите текст');
// userText = userText.trim();

// let wordFromText = prompt('Введите слово из текста');
// wordFromText = wordFromText.trim();

// let indexOfWord;
// indexOfWord = userText.indexOf(`${wordFromText}`);

// let string;
// string = userText.slice(0,`${indexOfWord}`);

// console.log(string);

// alert(`Результат: ${string}`)