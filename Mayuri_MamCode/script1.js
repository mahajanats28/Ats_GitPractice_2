
//console.log("Har Har Mahadev")

// Math.floor-> lowest number
// Math.ceil -> largest number
// Math.round -> gives rounded number
// Math.random -> gives 0.99 nmber

// console.log(Math.floor(29.78))
// console.log(Math.floor(-29.78))
// console.log(Math.ceil(29.28))
// console.log(Math.ceil(-29.28))
// console.log(Math.ceil(-58.14))
// console.log(Math.random())
// console.log(Math.round(25.47))
// console.log(Math.round(25.59))



//console.log(Math.floor(Math.random()*10)+1)

// print ramdom number from 1 to 9

// let RandomNumber = Math.floor(Math.random()*9)+1
// console.log(RandomNumber)

// // Take user Input from user Programm-1

// let User_Input = prompt("Enter Number from 1 to 9")
// console.log("User_Input "+ User_Input)

// if(RandomNumber == User_Input){
    
//     console.log("Guess Correct")
// }else{
    
//     console.log("Guess InCorrect")
// }

// // programm2 ----> 3 Chance to user 

// let Randomnumber = Math.floor(Math.random()*9)+1
// console.log("Random number "+ Randomnumber)

// for(let i=1 ; i <= 3 ; i++){
    
// let userinput = Number(prompt("Enter Number Between 1 to 9"))
// console.log('userinput '+ userinput)

// if(Randomnumber === userinput){
    
//     console.log("Correct Guess")
// }else{
    
//     console.log("Incorrect Guess")
// }
// };

// // Programm-3 User has infinity chance until Guess is Correct

let randomNumber = Math.floor(Math.random()*9)+1
console.log('randomNumber  '+randomNumber)

let user_INPUT 

while(randomNumber !== user_INPUT){
    
    user_INPUT =Number(prompt("Enter Number 1 to 9"))
    console.log('user_INPUT '+ user_INPUT)
    
if(randomNumber === user_INPUT){
    
    console.log('Guess is correct')
}   else{
    
    console.log('Guess is Incorrect')
} 
};