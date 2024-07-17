//           ** First Programm  **


console.log("hello")
console.log("Hellow Minskole")
console.log("Today is Friday");
console.log("Sunday is Holidays")

// -----------------------  Day 1-------------------------------------
//           ** Variables **

// variable - it is a reserved memory location where we can store the value
//   we can creat vairiables using let, const , var
// let ,const ,var

// js code is execute line by line: - it is a synchronus in nature

let a = 10 
a = 100
console.log(a)


const h = 10
console.log(h)
//h = 5000

// Arithmetic operation 

let x = 10
let y = 5 

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)

let q = 9
let r = 3

console.log(q+r)
console.log(q-r)
console.log(q*r)
console.log(q/r)
console.log(q%r)

// function 

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,4)


// function without parameter and without return 

function add(){
    console.log(9+7)
}
add()
add()
add()
add()
add()
add()

// function with parameter and with return type 
function addB(x,y){
    console.log(x+y)
}
addB(12,3)
addB(12,31)
addB(12,311)
addB(12,3111)

// function with parameter and with return type 

function addC(x,y){
    return x + y
}
let e = addC(12,4)
console.log(e)
console.log(e + e)
console.log(e * 0.10)

// Introver        // Extrovert

// calm            // loud 
// less outing     // more outing
// less social     // more social

// Human -- amol
// Properties - age , color , height , weight , gender
// Methods - talk() , walk()

// Vehicle  - car
// Properties - color , regno ,type , modelNo
// Methods - start() , stop()


// Backacc  icici bank 
// Properties - accNo , accName , bal , IFSC code , branchName
// Method - deposit(), withdrawl() 

//------------------------------ Day 2-----------------
//---------------- Data Types ----------------

let a = 10 
console.log(a)
console.log(typeof a)
// 10 , -10 , 10.30,-19.67 --> Number Data Type

let ln = true
console.log(ln)
console.log(typeof ln)
// true or false -- >   Boolean Data Types


let n = "chinmay"
console.log(n)
console.log(typeof n)
// " ", '',``
// "A" , "1" ,"adc","324234","sf4234234@@" -- > String Data Types
