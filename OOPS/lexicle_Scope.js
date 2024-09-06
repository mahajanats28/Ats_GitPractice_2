//                    * Lexical Scope *
//Lexical scop = is used to get the output of parent function in the child code,
//Note_ child data/variable values can't be get in the parent output

function addition (){
  
    a = 100
    b=  108
    
  console.log(a + b)
  
 console.log("Hiiii Frend");
 
 function sub(){
   
   c = 50
   d = 20
   
   console.log(c - d)
   
 }
 
 sub()
 
 function  mul(){
   
   e = 10 
   f = 9
   
   console.log(e * f)
   
 }
 
 mul()
 
 function arethmatice(){
   
   console.log(a + b + c + d + e + f)
 }
  
  arethmatice()
}

addition()

// closer 

function addition(){
 
  x = 50
  y= 40
  
  return x + y
  
 // console.log('Hiiiii') its not run
// return is last statement block
}

addition()

// lexicle Scope

function outer(){
 
 username = "Devilal"
 
// console.log('outer '+secrate) wil not print
 function inner(){
   
    let secrate = "its Me Inner"
   console.log("Inner "+ username)
   console.log(secrate)
  
 }
 
 function innerTwo(){
   
   console.log("InnerTwo "+ username)
  // console.log(secrate)// wil not print
   
 }
 
 inner()
 innerTwo()
}
outer()