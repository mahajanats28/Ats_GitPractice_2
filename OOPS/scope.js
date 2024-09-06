
// scope and assignment -> let , const and var
// let and const are block level
//   var scope is on global level

// let a  = 10
//     a = 100 // reassign value
// console.log(a)
// //let a = 1000 // with let we cant redeclare variable

let m = 10 
{
  m = 100 // value reassign
  
  console.log(m)
}
console.log(m) // 100

let n = 50 
{
  let n = 200
  console.log(n)// 200
}
console.log(n)// 50

//console.log(p)
// const -> we cant reassign and redeclare value its constant
// const b = 10 
// console.log(b)
    // b = 100
//console.log(b)
// scope of const -> block level
const p = 20
{
 // p = 10 we cant reassign
 const p = 20
 
  console.log(p)
}

// var -> we can redeclare and reassingn varibale and value
// var  ->  scope is global level

var x = 100
x = 1000// reassingn value
var x = 1 // redeclare variable
console.log(x)

var  l = 10 
{
  l = 20 
  console.log(l)
}
console.log(l)