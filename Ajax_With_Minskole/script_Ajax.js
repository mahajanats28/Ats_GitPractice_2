// Ajaex in javascript

//  synchronously execution

// function addition(){
   
//   console.log("call to add")
// }
 
// function addition1(){
   
//   console.log('call add 1')
// }
 
// addition1()
// addition()
 
 
// // programm2-> call method using setTimeout()function

// setTimeout() is used to delay the execution of the resolve() function.
 
// function addThree(){
   
//   setTimeout(function(){
     
//     console.log('call addThree')
     
//   },3000)
   
// }
 
// function addFour(){
   
//   console.log('call to addFour')// this wil run first
// }
 
// addThree()
// addFour()
 
// programm3->

// UserCreation--->UserId--->UserInfo -----> asyn code to execute

// function getInfo(){
  
//   setTimeout(function(){
    
//     console.log("User_Created")
    
//   },3000)
  
//   setTimeout(function(){
//     console.log("get User_Id")// this runs first
    
//   },2000)
  
//   setTimeout(function(){
    
//     console.log("get User_Info")
//   },1000)
  
// }
 
// getInfo() 
 
// programm4-   Call back hell

// * asyn code synchronously execute *
// User_Creation -->User_Id--->User_Info

// code tightly coupled
// not reusable
// gives command failed error

// function get_INFO(){
  
//   setTimeout(function(){
    
//     console.log('User_Creation')
    
//   setTimeout(function(){
    
//     console.log('User_Id')
    
//     setTimeout(function(){
      
//       console.log('User_Info')
//     },1000)
//   },2000)  
//   },3000)
  
// }

// get_INFO()// gives command failed error


// programm5 - 

//*promises()-> pending ,resolve and reject

let pro = new Promise(function(resolve,reject){
  
    let a = 10
    let b = 10
    
    if(a == b){
      
      resolve('Hello..!')
    }else{
      
      reject('Bye')
    }
      
})

// consume
// then is called with resolve values
// we pass 2 function to then method

pro.then(function(str){
  
  console.log(str)
},function(str){
  
  console.log(str)
})


