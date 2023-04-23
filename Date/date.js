// const date = new Date();
// const dayDate = date.getDate();
// const month = date.getMonth();
// let n1 = 0;
// let n2=0;
// getDateFormat = ()=>{
//     if (month>9) {
//         n1 === '';
//       }
//  if (dayDate>9) {
//     n2 ==='';
//  }}
// const separator = ".";
// console.log(`${n2}${dayDate}${separator}${n1}${date.getMonth()+1}${separator}${date.getFullYear()}`)

// 2 вариант

// const two = n => (n > 9 ? "" : "0") + n;

// const addZero = n => (n > 9 ? "" : "0") + n;
// function addZero (n) {
//         if (n<10) {
//            return  `0`+n
//           }
//         else {
//             return  n
//            }
// }
const getDateFormat = (date, separator = ".") =>
addZero(date.getDate()) + separator +
addZero(date.getMonth() + 1) + separator +
    date.getFullYear();

    function addZero (n) {
        if (n<10) {
           return  `0`+n
          }
        else {
            return  n
           }
}
let date = new Date('December 27, 2006');
console.log(getDateFormat(date));

// 3 вариант

// const date = new Date()
// getDateFormat = () => {

//     console.log(date.toLocaleDateString())
// }
// getDateFormat()

// 4 вариант

// const dayDate = date.getDate();
// const month = date.getMonth();
// let n1 = 0;
// let n2=0;
// getDateFormat = (date, separator = ".")=>{
//     if (month>9) {
//         n1 === '';
//       }
//  if (dayDate>9) {
//     n2 ==='';
//  }}

//  const date = new Date();
// const separator = ".";
// console.log(`${n2}${dayDate}${separator}${n1}${date.getMonth()+1}${separator}${date.getFullYear()}`)

// Task2

// const nextBirthdayDate = new Date();
// nextBirthdayDate.setFullYear(2024);
// nextBirthdayDate.setMonth(1);
// nextBirthdayDate.setDate(8);
// const date = new Date();

// getDaysBeforeBirthday = () => {
//     const difference = nextBirthdayDate.getTime() - date.getTime()
//     return difference
//     }
// const difference = getDaysBeforeBirthday();
// console.log(difference)

// convertMsToDays = () => {
// const convert = difference/1000/60/60/24.6
// return Math.round(convert)
// }
// console.log('convertMsToDays:', convertMsToDays());

// вариант 2



// getDaysBeforeBirthday = (nextBirthdayDate) => {
// nextBirthdayDate.setFullYear(2024);
// nextBirthdayDate.setMonth(1);
// nextBirthdayDate.setDate(8);

// console.log(nextBirthdayDate.getTime() - date.getTime())
//  }
//  getDaysBeforeBirthday()

// function getDaysBeforeBirthday(nextBirthdayDate) {
//     return Math.round((nextBirthdayDate - new Date()) / 1000 / 3600 / 24);
//   }
//   console.log(getDaysBeforeBirthday(new Date(Date.parse('Febrary 8, 2024'))))






// Task3

// addDays = (date, days) =>{
// return new Date(date.getTime() + days * 24*60*60*1000); 
// }
// console.log(addDays(new Date(), 30));

