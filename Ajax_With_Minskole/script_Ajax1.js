// Ajax in Javasacript

// programm 1
// snyc code to execute
let pro = new Promise(function(resolve,reject){

let x = 100
let y = 100

if(x == y){

    console.log("Heloooo")
}else{

    console.log('Bye')
}

})

// consume 
// then method use with resolve valaues
// we pass 2 function to then method

pro
.then(function(str){

    console.log(str)
},function(str){

console.log(str)

});

// programm - 2

let pro1 = new Promise(function(resolve,reject){

    let a = 1000
    let b = 100

    if(a == b){

        console.log("Its Promise")
    }else{

        console.log("Promis Fail")
    }
})

// consume
// we pass 2function to then method

pro1
.then(function(str){
    console.log(str)
},function(str){

    console.log(str)
});


// program-3 passing arry[]

let pro2 =new Promise(function(resolve,reject){

    let Firstname = "National";

    if(Firstname.length >= 8){

        resolve([11,22,33])
    }
    else{

        reject([-11,-22,-33])
    }

});

// consume

pro2
.then(function(a){

    console.log('its Promis ')
    console.log(a[0])
},function(b){

    console.log('Promis fail')
    console.log(b[0])
})

// programm-3

let pro4 = new Promise(function(resolve,reject){

    LastName = "Mahajan";
    if(LastName.length >= 9){

        
        resolve([10,20,30])
    }else{

        console.log('Promis Fail')
        reject([0,1,2]) 
        
    }
})

// we pass 2 function to then method

pro4
.then(function(x){

    console.log('its Promis')
    console.log(x[2])
},function(y){

    console.log('Promis Fail')
    console.log(y[2])
});







