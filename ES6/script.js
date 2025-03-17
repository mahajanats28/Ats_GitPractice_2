
//  rest opratore(...)allows you to represent indifinate
// number of arguments or element as an array
// this opratore collects multipal elements and packs the into an array or object

// programm 1
function addall(...arr){

    console.log(arr)
}


let a = addall(1,2,3,4,5,6,7,8,9)
console.log(a)
// (...arr)convert values into an array
//1,2,3,4,5,6,7,3,4,5,6,7,8,9, ===> [1,2,3,4,5,6,7,3,4,5,6,7,8,9,5]

// programm 2

function addAll(...arr){

    return arr.reduce(function(acc,el){

        return el + acc ;
    },0)
}

let x = addAll(1,2,5,4,7,8,9,10)
console.log(x)

// spred oprator(...)allow you t sprede the elememnt 
// of an array or object into an individual elememnts

let number = [11,22,33,44,55,66,99]

function add_Fivefirst(a,b,c,d,e){

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
}
add_Fivefirst(...number)

//programm 3 

let numbers = [22,33,5,77,88,55,99]

// [...numbers] == 22,33,44,5,77

function addfirstThree(p,q,r,...s){
    console.log(p)
    console.log(q)
    console.log(r)
    console.log(s)
    
}
addfirstThree(...numbers)

// programm 4
let numberB = [10,20,30,40,50,60,]
function addFirstThree(a,b,c,...d){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}
addFirstThree(...numberB) // 11,22,33,44,55

// programm - 5

let n = [11,22,33]

let  m = n
n[0] = 111
console.log(m) // [11,22,33]
console.log(n)// [111,22,33]

// programm 6 

let m2 = [...n] //copy ---- separate memory
m2[0] = 222
console.log(m2)
n[2] = 108
console.log(n)
