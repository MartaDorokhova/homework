// task2
    // const patients  = [
    //         {
    //           id: 1,
    //          patientName: 'David'
    //         },
    //         {
    //             patientName:  'Lucy',
    //           id: 2
    //         },
    //         {
    //             patientName:  'Bob',
    //         id: 3
    //             }
    //     ];
          
    // const orders = [3, 1, 2];  
        
    // function giveTalonsInOrder(patients, orders) {
    //     return orders.map((order) =>
    //        patients.find(patient => order === patient.id)
    // ); 
    // }
    // const result = giveTalonsInOrder(patients, orders);
    
    // console.log(result);

// task3

const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
 }
 
function handleObject(obj, key, action) {
    if (action ==='get'){ 
    console.log(obj[key])
   return obj[key] }

if  (action == 'add') {
obj[key] = ''
console.log(obj)
return obj}

if (action == 'delete') {
delete obj[key];
console.log(obj)
return obj}
}
handleObject(student, 'programmingLanguage', 'get');

// task4

// const student = {
//     fullName: 'Максим',
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
//   }
//    function giveJobToStudent(){


//   return  updatedStudent = {
//     ... student,
//     jobName: 'веб-разраотчик'
//       }
//   }
//   giveJobToStudent()
//   console.log('updatedStudent', updatedStudent)

// task5

// function sum(a, b, ...rest) {
//   return a+b+ rest.reduce((a,i) => a+i,0)
//   }
//   console.log(sum(1, 2, 3))
//   console.log(sum(2, 2)) 
//   console.log(sum(10, 15, 249, 653, 846)) 