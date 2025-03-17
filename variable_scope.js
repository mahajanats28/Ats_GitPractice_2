
// actual diff between let const and var

// **var keyword no longer in use 
// **var is function scope,once we declared 
// in function it wil not accesseble outside the function

// programm 1  globle scope

// let a = 10 ;
// a = 100
// console.log(a)

// var b = 20 ;
//     b = 200 
// console.log(b)    

// // programm -> scope level

// var a1 = 10 ;// Globle scope
// function add(){

//     var a1 = 100 // declar new varible function scope
//     console.log(a1)//100 *this variable not accessble out side the function
// }
// add()//100
// console.log(a1)//10

// programm 

var b1 = 10 ;
function add1(){
 
    b1 = 20 ; // updated globle scope varible here
    console.log(b1); // 20

}
console.log(b1)//10
add1()// 20
console.log(b1)//20

// programm-> Block scope
// let and const are block scope variable*

// let c = 10 ; // globle scope
// {
//     let c = 90 ; // block scope
//     console.log(c)//90
// }
// console.log(c)//10

// let B = "Shree"; // globle scope
// {
//     let B = "Krishu" // block scope
//     console.log(B)// krishu
// }
// console.log(B) // shree

// // programm 

// // {
// //     let jk = 50 ;
// //     jk = 500 ;
// //     console.log(jk) // 500
// // }
// // console.log(jk)// jk is not defined

// // programm 

// let mpl = 20 ;// global scope
// console.log(mpl)//20
// {
//    let mpl = 200 ; // block scope
//     console.log(mpl)//200
// } 
// console.log(mpl)//20

// programm - const variable

const d = 14 ;
console.log(d)//14
{
    const d = 20 ;
    console.log(d)//20
}
console.log(d)//14

const d1 = 50 ;
{
    d1 = 40 ; // we can tupdate varible with const
    console.log(d1)
}
console.log(d1)

