
// promise combinators -> Parallal Execution

// promise.all()-if all promise resolved its return resolve arry([])
//if one of the promise is reject its reject promis([])array
// promise.allsettled() shows both status pass and faill -> return([])arrays
// promis.race()return promise that resolve or reject 1st
//promise.any()return promise that resolve 1st and its ingorned reject promise 

// programm-1
// promise.all()
let Pro_One = new Promise(function(resolve,reject){
  
    setTimeout(function() {
      
      resolve('user one create')
    },2000);

})

let pro_Two = new Promise(function(resolve,reject){

setTimeout(function(){
 
 resolve('user Two Create')
},3000)

})

let Pro_Three = new Promise(function(resolve,reject){

setTimeout(function(){
 
 resolve('user Three Create')
},5000)
})

// let pro_Four = new Promise(function(resolve,reject){

//     setTimeout(function(){

//         reject('User Four not Creted')
//     },4000)
// })

// Promis combinators -> Parallal Execution
 
// programm-4 promise.race()

let Pro_one = new Promise(function(resolve,reject){

    setTimeout(function(){

        resolve('user One creted')
    },2000)
})

let pro_two = new Promise(function(resolve,reject){

    setTimeout(function(){

        resolve('user Two creted')
    },5000)
})

let pro_three = new Promise(function(resolve,reject){

    setTimeout(function(){

        resolve('user Two creted')
    },3000)
})
let pro_four = new Promise(function(resolve,reject){

    setTimeout(function(){

        reject('user Four not creted')
    },1000)
})

Promise.race([Pro_one,pro_two,pro_three,pro_four])
.then(function(arr){

    console.log(arr)
})
.catch(function(arr){

    console.log(arr)
});

// programm - 4 Promise.any() ingonered reject promise

let New_Pro = new Promise(function(resolve,reject){

    setTimeout(function(){

        resolve('User 1 creted')
    },1000)
})

let New_pro2 =  new Promise(function(resolve,reject){

      setTimeout(function(){

        resolve('User 2 Created')
      },2000)
})

let New_pro3 =  new Promise(function(resolve,reject){

    setTimeout(function(){

      reject('User 3 not Created')
    },3000)
})

let New_pro4 =  new Promise(function(resolve,reject){

    setTimeout(function(){

      resolve('User 4 Created')
    },5000)
})

// promise.any()

Promise.any([New_Pro,New_pro2,New_pro3,New_pro4])
.then(function(arr){

    console.log(arr)
})
.catch(function(arr){

    console.log(arr)
});
