
//      *closure 
//a closure is a powerful feature where an inner function has access to variables from its outer
//(enclosing) function, even after the outer function has finished executing

// // programm -1
// function calculator(){
  
//     m = 20
//     n = 21
    
//     return function(){
      
//       console.log(m + n)
      
//     }
// }

// // we are passing whole calculator function to print variable
// let print = calculator()

// print()//41

// // Programm 2

// // lexicel scope

// function outer(){
  
//   its_outer = "Shri krishna ji ..!" 
  
  
//   function inner(){
    
//   let  its_inner = "Khana Ji" ; 
    
//     console.log(its_inner)
//     console.log(its_outer);
//   //  console.log(innner2_me)// not print
    
//   }
  
// function inner2(){
  
//  let innner2_me = "Karsan Das..!"
 
//   console.log(its_outer);
//  // console.log(its_inner)// not run
//   console.log(innner2_me)
// }
  
//    inner()
//    inner2()
  
// }

// // calling   function()
// outer()

// function arethmatice (){
  
//   let p = 10
  
//   let q = 20
  
//   return function (){
    
//     console.log(p+q)
//   }
  
// }

// // clouser

// let add_me =  arethmatice()

// add_me()// 30

// programm 2

function itsme(){

  let mp = 10 ;
  let mh = 100 ; 

  return function itlove(){

    console.log(mp + mh)
  }
}
let itsresult = itsme()
console.log(itsresult) // 110

// Even after close the actual function return function can access the
// parent function proprety and methods its called closures