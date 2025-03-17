// in JS Hoisting is behavior of variable and function where
// declaration move tope to their contaning scope 
// before execution begin.
// only declaration is hoisted not assignment
// You can use variable nad function before they are actully declared in code

//        Varibales let const and var

console.log(a) // hoisting is palced -> undefined
// only declaration is hoisted
var a = 10 ;
console.log(a)

// console.log(b) // declaration is not hoisted
// let b = 100 ;
// console.log(b)

// console.log(c)// declaration is not hoisted
// const c = 1000 ;
// console.log(c)

// function 

add()// 20 declaration is hoisted
function add()
{
    console.log(10 + 10);
}

// with parameter

let dd = mul(10,20)//declaration is hoisted
console.log(dd) //  200
function mul(x, y){
    
    return x * y ;
}

ats()//Hellow.! -> hoisted is placed
function ats()
{
    console.log("Hellow.!")
}

// function expression

//  myfun(5,5)//TypeError: myFunc is not a function
// var myfun = function (a ,b)
// {
    
//     console.log(a * b)
// } 