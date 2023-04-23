// // Task1

// Function Declaration 

function getName1(name) {
    console.log(`Имя равно ${name}`);
};

getName1('Marta1');



//Function Expression

const getName2 = function(name) {
    console.log(`Имя равно ${name}`)
}

getName2('Marta2');

//Arrow Function Expression

const getName3 = (name) => {
    console.log(`Имя равно ${name}`)
};

getName3('Marta3');

//Task2

function getSumOfNumbers(number, type) {
    let sum = 0;
    // let type;
    if (type == 'odd'){
        for (let i = 0; i <= number; i += 1) {
     if (i%2==!0){
     sum += i; 
    } }
    }
    else if(type=='even'){
                    for (let i = 0; i <= number; i += 1) {
         if (i%2==0){
         sum += i; 
         }}
        
    }
    else if(type ==''){
        for (let i = 0; i <= number; i += 1) {
           
            sum += i 
    }}
    return sum;
}
console.log(getSumOfNumbers(6,'even'));

//Task2

let count = 0;

function getDivisorsCount(number) {
    for(let i=1; i<=number; i++){
    if(number%i==0){
     count += i/i
    }
    }
    return count;
}
console.log(getDivisorsCount(24));
