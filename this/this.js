//task 1
//  const student = {
//     stack: [`HTML`],
//     level1: 1,
//     improveLevel() {
//         this.level1++;
//             if (this.level1 === 2) {
//                 this.stack.push(`CSS`)}
//                 else
//         if (this.level1 === 3) {
//             this.stack.push(`JavaScript`)}
//             else
//         if (this.level1 === 4) {
//             this.stack.push(`React`)}
//             else
//         if (this.level1 === 5) {
//             this.stack.push(`NodeJS`)}
//             else
//         if (this.level1 > 5) {
//             alert(`Студент выучил все технологии!`)}
//     return this;
//     }
// }
// student.improveLevel().improveLevel().improveLevel().improveLevel().improveLevel()
// console.log(student.stack);

// task2

// const dog = {
//     name: 'Чарли',
//     type: 'Собака',
//     makeSound() {
//        return 'Гав-Гав';
//     }
//  }
 
//  const bird = {
//     name: 'Петя',
//     type: 'Воробей',
//     makeSound() {
//        return 'Чик-чирик';
//     }
//  }

//  function makeDomestic(isDomestic) {
//     if (this === dog) {
//     this.isDomestic = true}
//     else 
//     if (this === bird) {
//         this.isDomestic = false}
//     return console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
//  }

//  makeDomestic.bind(dog, true)(); 

//  makeDomestic.call(bird, false); 
//  makeDomestic.apply(bird, [false]);

//  console.log(dog)
//  console.log(bird)

// task3

const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack(){
      return console.log(`${this.fullName} сейчас с мячом и начинает атаку!`)
    },
    scoreGoal(sound) {
       console.log(`${this.fullName} забил гол! Вот это да!`);
    },
    celebrate(sound) {
       console.log(sound);
    },
    goToSubstitution: function(newPlayer) {
       console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
    }
 };
 
 const attack = footballer.attack;
 attack.bind(footballer)();

 const score = footballer.scoreGoal;
 score.call(footballer);

 const substitute = footballer.goToSubstitution;
 substitute.apply(footballer, ['Paulo Dibala']);
 

