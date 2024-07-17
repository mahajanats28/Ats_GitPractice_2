//     ** Arithmetic operaters **

// + - * / %

// let s = 10
// let t = 5 
 
// console.log(s+t)
// console.log(s-t)
// console.log(s*t)
// console.log(s/t)
// console.log(s%t)


// 2
// 5|10
// -10
// -----
// 0

//-----------------** comparison operator **---------------------------------
 
// < ,> ,<= , >=
// == , !=  // value
// === ,!== // value and type

console.log(typeof 10) // number
console.log(typeof '10') // string
// same value but different type 
// enity < enity === > boolean =====> true or false

console.log(8 === '8') //false
console.log(8 !== '8') // true
console.log(8 === 8) // true
console.log(8 != '8')// false
console.log(8 != 8)// true
console.log(8 !== 8)//false
console.log(7 > 3)// true
console.log(7 < 3)// false
console.log(7 >= 3)// true
console.log(7 <= 3)// false
console.log(7 >= 7)// true
console.log(7 <= 7)// true


// --------------------------** logical operator **------------------------------------------

//   && - AND 
//   || - OR
//   ! - NOT

// && - AND 

// true  &&   true   ---- true
// false &&   true   ----  false
// true  &&   false  ----  false
// false &&   false  ----  false

console.log(7 === 7 && 8 == 8)
console.log(6 === '6' && 7 ===7)
console.log(6 === 6 && 7 === '7')
console.log(6 != 6 && 7 != '7')


// || - OR
// true  ||   true   ----- true 
// true  ||   false  ----- true 
// false ||   true   ----- true 
// false ||   false  ----- false

console.log(8 == 8 || 8 != 9)
console.log(8 == 8 || 8 == 9)
console.log(9 === '9' || 6 == 6)
console.log(9 === '9' || 6 === '6')


// ! - NOT
// !true   ---- false
// !false  ----- true

console.log(!(8 === '8'))
console.log(!(7 === 7))
