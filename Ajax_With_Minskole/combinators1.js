
// Promise Combinators -> Prallal Execution with await

// let pro_1 =  new Promise(function(resolve,reject){

//   setTimeout(()=>{

//     resolve('user successfuly created..1')
//   },3000)

// })

// let pro_2 =  new Promise(function(resolve,reject){

//     setTimeout(()=>{

//       resolve('user successfuly created..2')
//     },2000)

//   })

//   let pro_3 =  new Promise(function(resolve,reject){

//     setTimeout(() =>{

//       resolve('user successfuly created..3')
//     },4000)

//   })
//   let pro_4 =  new Promise(function(resolve,reject){

//     setTimeout(() =>{

//       reject('user successfuly created..4')
//     },1000)

//   })

//   // programm- 1 await and try catche

//   async function PromiseAll() {

//     try{
//      let pro =  await PromiseAll([pro_1,pro_2,pro_3])
//      console.log(pro)
//     }
//     catch{

//         console.log('Error Caught')
//     }

//   }
//   PromiseAll()

// promise allsettled()

// let ProOne = new Promise(function (resolve, reject) {

//   setTimeout(() => {

//     resolve('User created..1')
//   }, 2000)

// })

// let ProTwo = new Promise(function (resolve, reject) {

//   setTimeout(() => {

//     resolve('user Creted..2')
//   }, 5000)
// });

// let ProThree = new Promise(function (resolve, reject) {

//   setTimeout(() => {

//     resolve('user Creted..3')
//   }, 3000)
// });

// let ProFour = new Promise(function (resolve, reject) {

//   setTimeout(() => {

//     reject('user Creted..4')
//   }, 1000)
// });

// async function PromiseAllSettled() {

//   let newpro = await Promise.allSettled([ProOne, ProTwo, ProThree, ProFour])
//   console.log(newpro)

// };

// PromiseAllSettled()

// // programm-3 Promis.race()

// // let NewPro1 =  new Promise(function(resolve,reject){

// //   setTimeout(()=>{

// //     resolve('user 1 created..')
// //   },3000)
// // })

// // let NewPro2 =  new Promise(function(resolve,reject){

// //   setTimeout(()=>{

// //     resolve('user 2 created..')
// //   },4000)
// // })

// // let NewPro3 =  new Promise(function(resolve,reject){

// //   setTimeout(()=>{

// //     reject('user 3 not created..')
// //   },2000)
// // })

// // let NewPro4 =  new Promise(function(resolve,reject){

// //   setTimeout(()=>{

// //     resolve('user 4 created..')
// //   },1000)
// // })

// // async function Promise_Race() {
// // try{
// //   let Race_Winner = await Promise.race([NewPro1,NewPro2,NewPro3,NewPro4])

// //   console.log(Race_Winner)
// // }
// // catch{

// //   console.log("Error caught")
// // } 
// // };

// // Promise_Race()

// Programm 4 Promise.any() ingnored reject status

let Pro_New =  new Promise(function(resolve,reject){

  setTimeout(()=>{
    
    resolve('User New User Created..1')
  },4000)
})

let Pro_New2 =  new Promise(function(resolve,reject){

  setTimeout(()=>{
    
    resolve('User New User Created..')
  },5000)
})

let Pro_New3 =  new Promise(function(resolve,reject){

  setTimeout(()=>{
    
    reject('New User Not Created..3')
  },1000)
})

let Pro_New4 =  new Promise(function(resolve,reject){

  setTimeout(()=>{
    
    resolve('New User Created..4')
  },2000)
})

async function Promise_Any(){

    let Any_Promise = await Promise.any([Pro_New,Pro_New2,Pro_New3,Pro_New4])

    console.log(Any_Promise)
  }
  
Promise_Any();