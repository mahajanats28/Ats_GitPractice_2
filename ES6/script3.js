
// short circuiting in javascript

// falsy value in javascript -->
// null , undefined , "" , NaN , 0 and 9 < 10 false Expression

let isloggedIn = true;
let user = { name: 'Narendra' }

let val = isloggedIn && user.name
console.log(val)// Narendra

let val2 = 5 > 6 && 0
console.log(val2)// short circuit-> false

let val3 = null && "Chatrapti"
console.log(val3)// null

let val4 = 7 > 3 && "Shivaji"
console.log(val4) // true -> Shivaji

let val5 = undefined && "India"
console.log(val5)// short circuit false -> undefined

let val6 = '' && 6 > 4
console.log(val6)//short circuit -> false --> blank

// programm 

if (NaN) {

   console.log('Hiiiii Mom')
} else {

   console.log('Bye')
}

if (null) {

   console.log('Helloo')
} else {

   console.log('By By')
}

if (7 > 3) {
   console.log('Welcome')
} else {

   console.log('Failed')
}

// new programm 

// truth values in js -> [],{}," ", true , 9  > 6 Expression are true in js

// i) and oprator && -> its run until expression becomes false

console.log("Short Circuite AND && Oprator")

let val7 = 2 > 0 && 5 < 1
console.log(val7)// false

let val8 = 5 > 4 && "Minskole"
console.log(val8)// true -> Minskole

let val9 = "Chinamy" && "Deshpande"
console.log(val9)// true -> Deshpande

let val10 = '' && "Chinamy"
console.log(val10)//short circuit false - balnk

let val11 = undefined + 10 && 4 + 9
console.log(val11)// false - > Nan

let val12 = 12 + 12 && 4 + 5
console.log(val12) // true -> 9 ans

let val13 = "Ajikay" && 6 > 8
console.log(val13)

console.log(6 == 6 && '')
console.log("Karma" && 7 > 4 && 3 == 0)
console.log(" " && undefined && null && 0 && 5 > 7)
console.log(" " && 5 > 7)
console.log('null' && true && 5 > 3 && 'undefined' && "Hello") // Hello
console.log('null' && true && 5 > 3 && "undefined" && 0 && "Hello")// 0


//  // ii) or oprator || -> its run until the expression becomes true

console.log("Short Circuite OR || Oprator")

//  console.log(3 || "Its Me")// 3
//  console.log(6 > 8 || "Durga Ma ")// Durga Ma -> 
//  console.log(null || 1 > 1)// false
//  console.log( 7 > 9 || 4 > 8 || 9 < 3 || "String")// string
//  console.log('' || 6 > 8 || true || null)// true

//  let  obj = {} ; 

//  let check = obj.check ? obj.check : 100 ;
//  console.log(check)// 100


// let va =  6 < 2 || "chinmay" // short circuite on chinamy  -> Chinmay
// let va2 = 0 || 'mayuri' // Mayuri
// let va3 = null || 'mayuri' // mayuri
// let va4 = 7  || 'ram' // 7
// console.log('Its Me' || 3) // true -> its me

// console.log(va)
// console.log(va2)
// console.log(va3)
// console.log(va4)

// console.log(0 || null)// null
// console.log(3 > 2 || 4 > 6) // true
// console.log('' || 6 > 8) // false
// console.log(1 > 5 || null || 7 > 9 || undefined || '' || "Dicipline" || 0 == 9 )

// iii) Nullish oprators in javascript

// we use nullish oprator to consider 0 or to print empty string-> falsy values

// this below example wil not print the falsy values
// we have to use nullis (??) oprator for printing falsy values

let q1 = 0
let check = q1 || "Ankita"
console.log(check)// Ankita

let q = 0
let check1 = q || 'Navin'
console.log(check1) // Navin

let q2 = 0;
let check3 = q2 || "Lucifer"
console.log(check3)// Lucifer

// use of Nullish oprator ?? -> to print the falsy values--> 0 ,'' 

let a = 0;
let result = a ?? 'Nullish'
console.log(result) // 0

let b = 0
let result1 = b ?? 'Oprator'
console.log(result1)// 0

let c = '';
let result2 = c ?? 'Js'
console.log(result2)// blank -> ''

let d = '';
let result3 = '' ?? "Manav";
console.log(result3)// blank ->''

// Null and undefined 

let e = ' ' ?? "Bhavna"
console.log(e)// blank 

let f = null
let result4 = f ?? 'Life'
console.log(result4)// Life

let g = undefined
let result5 = g ?? "Heart"
console.log(result5)// Heart

// iv) Optional Parameter

let Person = {

   Fname: "Suraj",
   Lname: "Chavhan",

   Parent: {

      mother: {
         Fname: "Damini",
         Lname: 'Chavhan',
      }
   },
   father: "Sandip"
}

//TypeError: Cannot read properties of undefined (reading 'mother')
console.log(Person.Fname.Parent.mother.Lname)