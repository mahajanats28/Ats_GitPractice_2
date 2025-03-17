
// New programm - use of catche and finaly keywords 

// catche -> to recive generice error
// finally -> resolve or reject it wil execute

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

// let pro1 = new Promise(function(resolve,reject){

//    let My_Name = "Vasant"   
   
//    if(My_Name.length >= 6){

//        resolve("Promise Done..!")
//    }else{

//       reject("Promise Fail")
//    }

// })

// // consume

// pro1.then(function(str){

//    console.log(str)

// })

// .catch(function(str){

//     console.log(str)
// })

// .finally(function(){

//     console.log("I am always execute..!")
// })

// // programm - 3

// let pro_new = new Promise(function(resolve,reject){

// let m = 15 
// let n = 10

// if(m == n){

//     resolve('Promis Done')
// }else{

//     reject("Promis fail")
// }

// })

// // consume 

// pro_new.then(function(str){

//     console.log(str)
// })
// .catch(function(str){

//     console.log(str)
// })
// .finally(function(){

//     console.log("Execution of code always")
// })

// new programm 

let promo = new Promise(function(resolve,reject){

    let m = 10
    let n = 10 
    if( m == n){

        resolve([['akola','amravti'],['wardha','nagpur'],['mumbai','thane']])
    }
    else{

        reject('Bye its reject')
    }
})

promo.then(function(str){

    console.log(str)
    return str[0]
})
.then(function(str){
    console.log(str[0])
    return str[0]
})
.then(function(str){

    console.log(str)
})
.catch(function(str){

    console.log(str)
})
.finally(function(){

    console.log('Close Statement')
})

// *async code function Execution using await*

// async function get_Info() {

//    let a =  await user_Create()
//      console.log(a)

//     let b = await user_Id()
//     console.log(b) 

//     let c = await user_Info()
//     console.log(c)
    
// }

// // calling function()

// get_Info()

function user_Create(){

    return new Promise(function(resolve,reject){

        setTimeout(function(){

            resolve('user create')
        },3000)
    })
}

function get_id(){

    return new Promise(function(resolve,reject){

        setTimeout(function(){

            resolve('get id..')
        },2000)
    })
}

function get_Info(){

  return new Promise(function(resolve,reject){

    setTimeout(function(){

        resolve('get info...')
    },1000)
  })
    
}
// asyn call --> syncronasly

user_Create()
.then(function(str){

    console.log(str)
    return(get_id)
})
.then(function(str2){
    console.log(str2)
    return get_Info
})
.then(function(str3){

    console.log(str3)
})

// user_Create()
// get_id()
// get_Info()

async function getinfo2() {

    let a = await user_Create()
    console.log(a)

    let b = await get_id()
    console.log(b)

    let c = await get_Info()
    console.log(c)
    
}
getinfo2()