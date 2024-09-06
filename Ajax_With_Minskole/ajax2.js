
// New programm - use of catche and finaly keywords 

// catche -> to recive generice error
// finaly -> resolve or reject it wil execute

// let pro = new Promise(function(resolve,reject){

// let a = 100
// let b = 100

// if(a == b){

//     resolve('Heloo..!')
// }else{

//     reject('Bye')
// }

// })

// pro.then(function(str){

// console.log('it promis')
// console.log(str)
// })

// // catch -> to recive Generic Error

// .catch(function(str){

//     console.log(str)
// })

// //finlly-> resolve or reject it will execute
// .finally(function(){

//     console.log("I wil always Execute")
// });

// programm-2

let pro1 = new Promise(function(resolve,reject){

   let My_Name = "Vasant"   
   
   if(My_Name.length >= 6){

       resolve("Promise Done..!")
   }else{

      reject("Promise Fail")
   }

})

// consume

pro1.then(function(str){

   console.log(str)

})

.catch(function(str){

    console.log(str)
})

.finally(function(){

    console.log("I am always execute..!")
})