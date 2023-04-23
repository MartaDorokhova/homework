// task1

// class Student {
//     constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';

//     this.setTechnologies = function(technologies) {
//       this.technologies = [
//         ...this.technologies,
//         ...technologies,
//       ];}
	
//     this.setNewStatus = function(newStatus) {
//       this.status = newStatus;
//     }}
// }

// const student = new Student ('Maxim', 20);
// student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
// student.setNewStatus('Middle');
// console.log(student);

// task2

// class Person {
//     constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     }
//     compareAge(nextPerson) {
//         if(this.age>=nextPerson.age){
//             alert(`${this.name} старше, чем ${nextPerson.name}`)
//         }
//         else        if(this.age<nextPerson.age){
//             alert(`${this.name} младше, чем ${nextPerson.name}`)
//         }
//     }
//     }

// const person1 = new Person('Максим', 24);
// const person2 = new Person('Светлана', 36);
// const person3 = new Person('Ирина', 23);

   
// person1.compareAge(person2); // Максим младше, чем Светлана 
// person2.compareAge(person3); // Светлана старше, чем Ирина 
// person3.compareAge(person1); // Ирина младше, чем Максим

// task3

// class Dictionary {
//     constructor(name) {
//       this.name = name;
//       this.words = {};
//     }
  
//     add(word, description) {
//       if (!this.words[word]) {
//         this.words[word] = { word, description };
//       }
//     }
//   }

// const dictionary = new Dictionary('Толковый словарь');
// dictionary.add('JavaScript', 'популярный язык программирования');
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
// console.log(dictionary)

// MySolve


class Dictionary {
    constructor(name){
        this.name = name;
        this.words = {};
    }
    add (word, description){
        if(!this.words[word]) {
        this.words[word] = {word, description}
        }
    }
     remove(word){
        delete this.words[word];
     }
     get(word){
        return this.words[word];
     }
     showAllWords() {
        for (const [word, { description }] of Object.entries(this.words)) {
            console.log(`${word} - ${description}`);
     }
    }}

    // const dictionary = new Dictionary('Толковый словарь');
    // dictionary.add('JavaScript', 'популярный язык программирования');
    // dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
    
    // dictionary.remove('JavaScript');
    // dictionary.showAllWords();

    // task4

//     class HardWordsDictionary extends Dictionary{
//         constructor (name) {
//         super (name);
//     }
//     add (word, description){
//         if(!this.words[word]) {
//         this.words[word] = {word, description};
//         this.isDifficult = this.isDifficult;
//         }}
//     }

//     const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    
// hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
    
// hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
    
// hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.'); 
    
// hardWordsDictionary.remove('неологизм');
    
// hardWordsDictionary.showAllWords();
// console.log(hardWordsDictionary)

// task5

class Developer {
    constructor (fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.technologies = [];
    }
    code(){}
    learnNewTechnologies(technology){
        this.technologies.push(`technology`)
    }
}

class JuniorDeveloper extends Developer {
    constructor(fullName, age){
        super (fullName, age)
        this.position = `Junior`;
        this.technologies = ['HTML', 'CSS', 'JavaScript'];
    }
    code(){
        console.log(`${this.position} пишет код`)
    }

}

class MiddleDeveloper extends Developer {
    constructor(fullName, age){
        super (fullName, age)
        this.position = `Middle`;
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    }
    code(){
        console.log(`${this.position} пишет код`)
    }

}

class SeniorDeveloper extends Developer {
    constructor(fullName, age){
        super (fullName, age)
        this.position = `Senior`;
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
    }
    code(){
        console.log(`${this.position} пишет код`)
    }

}

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20);
const middleDeveloper = new MiddleDeveloper('Игорь', 25);
const seniorDeveloper = new SeniorDeveloper('Максим', 30);

juniorDeveloper.code(); 
middleDeveloper.code(); 
seniorDeveloper.code(); 

seniorDeveloper.learnNewTechnologies('Docker');

console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position, juniorDeveloper.technologies); 

console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position, middleDeveloper.technologies); 

console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position, seniorDeveloper.technologies); 
