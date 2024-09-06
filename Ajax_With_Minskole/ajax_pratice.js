
// promise -> pending resolve and reject
// then , catche, finally

// then -> use with resolve values
//catche -> to recive generice error
// finally -> resolve or reject it will always execute

let pro = new Promise(function(resolve,reject){

let a = 10
let b = 10
if(a == b){

    resolve('hooo its Promis')
}else{

    reject('Promis fail')
}

})

// consume the promise

pro.then(function(str){

    console.log(str)
},function(str){

    console.log(str)
});