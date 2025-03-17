
// promise -> pending resolve and reject
// then , catche, finally

// then -> use with resolve values
//catche -> to recive generice error
// finally -> resolve or reject it will always execute

// let pro = new Promise(function(resolve,reject){

// let a = 10
// let b = 10
// if(a == b){

//     resolve('hooo its Promis')
// }else{

//     reject('Promis fail')
// }

// })

// // consume the promise

// pro.then(function(str){  for resove the promise 

//     console.log(str)
// },function(str){    if promise is reject  

//     console.log(str)
// });

// let pro1 = new Promise(function(resolve,reject){

//     My_name = "Vinayak";

//     if(My_name.length >= 7){

//         resolve('Its Done')
//     }else{

//         reject('its fail')
//     }
     
// })

// // consume the promise

// pro1.then(function(str){

//     console.log(str)
// })
// .catch(function(str){

//     console.log(str)
// })
// .finally(function(){

//     console.log("Its Always Execute")
// })

// // progamm - 3 use of arrye[] in promise

// let pro2 = new Promise(function(resolve,reject){

//     let x = 10 
//     let y = 10
//     if(x == y){

//         resolve([['AMRAVATI','PUNE'],['NAGPUR','NASHIK'],['SOLAPUR','SANGLI']])
//     }else{

//       reject('bye bye..Maharashtra')
//     }
// })

// // // consume

// // pro2.then(function(c){

// //     console.log(c)
// //     return c[0]
// // })
// // .then(function(c){

// //     console.log(c[1])
// //     return c[1]
// // })
// // .then(function(c){

// //     console.log(c)
// // })
// // .catch(function(not_c){

// //     console.log('Promise fail')
// //     console.log(not_c)
// // })
// // .finally(function(){

   
// //     console.log('I will always execute')
// // });

// // programm 3 

// let pro3 = new Promise(function(resolve,reject){

//     My_Country = "India" ; 

//     if(My_Country.length >= 8 ){

//         resolve([['MH','GUJ'],['MP','AP'],['UP','BIR'],['KRL','KRNTK']])
//     }else{

//         // promis fail 
//         reject("This is not state of India")
//     }
// });

// // consume

// pro3.then(function(state){

//     console.log(state)
//     return state[1]
// })

// .then(function(state){

//     console.log(state[1])
//     return state[1]
// })
// .then(function(state){

//     console.log(state)
    
// })
// .catch(function(xyz){

//     console.log(xyz)
// })
// .finally(function(){

//     console.log('I am Execute..!')
// })

// asyn function Exection using await

// async function get_Info2() {

//     let x = await  create_User()
//     console.log(x)

//     let y = await User_Id()
//     console.log(y)

//     let z = await User_Info(z)
//     console.log(z)
// }

// get_Info2()



// async function Execution 

function user_Create(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('create user')
        },3000)
    })
}

function get_Id(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("getId")
        },2000)
    })
}

function get_Info(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("getInfo")
        },1000)
    })
}


async function get_Info3(){
     
    let abc = await user_Create()
    console.log(abc)
    
    let xyz = await get_Id()
    console.log(xyz)
    
    let mnc = await get_Info()
    console.log(mnc)
}

get_Info3()