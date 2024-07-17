


//  Continue statement with while loop
// let i = 1;
// while(i <= 10){

//     if(i == 5){

//         i++

//         continue
//     }

//     console.log(i)//1,2

//     i =i + 1 ; // 2,3
// }

// //  break statement with while loop

// let j = 6 ;
// while(j >= 1){

//     if(j == 2){

//         break
//     }
//     console.log(j)//6,5,4,3
//     j = j - 1;//  5,4,3,2
// }

// // for loops with break and Continue Statement

// for(let i2 = 1 ; i2 <= 6 ; i2++){//2,3,4

//     if(i2 == 4){

//         break //   Exit the loop when its 4
//     }
//     console.log(i2)// 1,2,3
// }

// Take positive interger input and tells if it is 3 didgit number or not

//   let  a = 999 ;

// if(a > 99 && a<1000){

//  console.log(a + " is Three digit number")

// }else{
//     console.log(a + " is not Three digit number")
// }

// -------------------------------------7thJune-2024-------------------------

// while
//for loop

// for(intialization ; conditionCheck ; increment/decrement){
//     // statements
// }

// intialization
// while(conditionCheck){
//     // statement
//     // increment / decrement
// }

// program1 
// print "hello" three times
let i1 = 1
while(i1 <= 3){
    console.log("hello") // "hello" // "hello" // "hello"
    i1 = i1 + 1 // 2 // 3 // 4
}

// program 2
// print  1 to 3
let i2 = 1
while(i2 <= 3){
    console.log(i2) // 1 // 2 // 3
    i2 = i2 + 1 // 2 // 3 // 4
}

// print 1 to 5
// program 3
let i3 = 1
while(i3 <= 5){
    console.log(i3) // 1 // 2 // 3 // 4 // 5
    i3 = i3 + 1 // 2 // 3 // 4 // 5 // 6
}

// program 4
// print  table of 2
let i3a = 1
while(i3a <= 10){
    console.log(i3a * 2) // 2 // 4 ----- 20
    i3a = i3a + 1 // 2 ------------------11
}

let i4 = 2
while(i4 <= 20){
    console.log(i4) // 2 // 4 // 6 ----- 20
    i4 = i4 + 2 // 4 // 6 // 8 ------22
}

// program 5
// print 5 to 1 using while 
let i5 = 5
while(i5 >= 1){
    console.log(i5)
    i5 --
}

// program 6
// print 3 to 1 in reverse
let i6 = 3
while(i6 >= 1){
    console.log(i6)
    i6 = i6 - 1
}


// program 7
// break statement with while loop
let i7 = 1
while(i7 <= 5){
    if(i7 == 3){
        break
    }
    console.log(i7) // 1 // 2
    i7 = i7 + 1 //2 // 3
}

let i8 = 5
while(i8 >= 1){
    if(i8 == 3){
        break
    }
    console.log(i8) // 5 // 4
    i8 = i8 -1 // 4 // 3
}
