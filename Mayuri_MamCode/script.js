
// programm -1
// takes user input from user in between 1 to 5
// guess number is correct or incoreect

// let randomNumber = Math.floor(Math.random()*5)+1
// console.log('randomNumber ' + randomNumber );

// let userInput = prompt("Enter number between 1 to 5 ")
// console.log('userInput '+ userInput);

// if(randomNumber == userInput){

//     console.log("You Guess Correct Number")
// }else{

//     console.log("Incorrect Number")
// }

// programm-2
//user has 3 chance to input number
// we use for loop when we konws certain condition

// let randomNumber1 = Math.floor(Math.random()*5)+1
// console.log("randomNumber "+randomNumber1);

// for(let i = 1 ; i <=3 ; i++){

//     let userInput1 = Number(prompt("Enter Number between 1 to 5"))

//     if(randomNumber1 === userInput1){

//         console.log('Guess Correct Number')
//     }else{

//         console.log("Plz Try again..! Guess Incorrect")
//     }
// }
 
// programm-3 infinity chance to user tiil the guess is correct
// when we dont no certain condtion we use While loop

let randomNumber2 = Math.floor(Math.random()*5)+1
console.log("randomNumber "+ randomNumber2);

let userInput2 

while(randomNumber2 !== userInput2){

    userInput2 = Number(prompt("Enter Number in between 1 to 5"))
    console.log("Userinput "+ userInput2)

    if(randomNumber2 === userInput2){

        console.log("Guess is Correct")
        break ;
    }else{

        console.log("Plz Try Again..! ")
    }
}


// My_Pracice of Programm

// // take user input from user 

// // programm - 1

// let randomNumber = Math.floor(Math.random()*5)+1
// console.log("randomNumBER "+randomNumber)

// let userinput = prompt(Math.floor(Math.random()*5)+1
// console.log("UserInput "+userinput)

// if(randomNumber == userinput){
  
//   console.log("You Guess Correct Number ")
// }else{
  
//   console.log("Incorrect guess")
// }

// // we use for loop when we knows certain condtion

// randomNumber = (Math.floor(Math.random()*5)+1
// console.log("randomNumber"+randomNumber)



// for(let i = 1 ; i <= 3 : i++){
  
//   let userinput = Number(prompt("Enter Number 1 to 5"))
// console.log("userinput "+userinput);

// if(randomNumber === userinput){
  
//   console.log("Guess is correct ")
// }else{
  
//   console.log("Incorrect Guess")
// }

// }

// // programm 3 
// // when we dont no how many time run ->infinity time

// randomNumber = (Math.floor(Math.random()*5)+1
// console.log("randomNumber"+randomNumber);

// let inputuser 

// while(randomNumber !== userinput){
  
//   inputuser = Number(prompt("Enter number 1 to 5"))
//   console.log("inputuser "+inputUser)
  
//   if(randomNumber === inputUser){
    
//     console.log("You Guess Correct")
//   }else{
    
//     console.log("Incorrect Guess ")
//   }
  
// };


