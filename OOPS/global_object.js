

// Global object  ->

//   Window is Global object
 // programm 1


//  let chinmay = {
   
//    firstname : "Chinmay",
//    lastname : "Deshpande",

  
// //   function expression   
//   dispalyName : function(){
     
//     // this refer to -> chinamy objcet here
//  //   console.log(this.firstname+' '+this.lastname)
    
     
// //     //  this - > window   
//   function dispalyName2(){
     
//      console.log(this.firstname+' '+this.lastname)
     
//   }
  
//      dispalyName2()
    
// }

    
// //chinmay.dispalyName();

 // programm 2

// let kedar = {

//     Firstname : "Kedar",
//     Lastname :   "Jadhao",

//     DisplayName : function(){

// this -> refer to kedar -> kedar refer to global object -> Window
//         console.log(this.Firstname+" "+this.Lastname)

// arrow function
 // its refer to immidiate parent -> DisplayName Method

//     let DisplayName2 = ()=> {

// this refer to-> DisplayName ->DisplayName refer to globsl object->Window
//         console.log(this.Firstname+' '+this.Lastname)
//     }

//    DisplayName2() 
//     }
// }

// kedar.DisplayName()

// programm 3 and very important

// both below peroperty and value belongs to global object->Wndow
// var My_name = "Aanad"
// var My_surname =  "Bakshi"
 
// let Vihan = {

//     // My_name : "Vihan",
//     // My_surname : "Ranawat",

//     Dosplay_Name:()=>{

//  // this -> refer to global object-> Window       
//         console.log(this.My_name+' '+this.My_surname)

//     let Dosplay_Name2 =()=>{

// // this -> refer to global object-> Window
//         console.log(this.My_name+' '+this.My_surname)
//     }  
    
//     Dosplay_Name2()
// }
// }

// Vihan.Dosplay_Name()// Anand Bakshi

// programm- 4

// firstname = "Chatrapati Shivaji"
// lastname = "Maharaj"
// age = 50
// let Shivaji = {
  
//     firstname : "Shivaji",
//     lastname :  "Maharaj",
//     age : 50,
    
//          DisplayName :()=>{
           
//            console.log(this.firstname+' '+this.lastname)
           
//       let  DisplayName2 =()=>{
          
//           console.log(this.age)
//         }   
           
//         DisplayName2()

//          }
      
//     }
    
//     Shivaji.DisplayName();

 
 //programm-5
 
 // Global object varibale
 
firstname1 = "Vedant"
lastname1 = "Chavan"
age1 = 25

let detail = {
  
  
   Show_Detail :()=>{
  
//  this refer to global Object -> window  
//  arrow function refer to immidiate parent 

    console.log(this.firstname1+" "+this.lastname1)
    
  let  show_age =()=>{
       
       console.log(this.age1)
     }
  
    show_age()
  
}
}
detail.Show_Detail()

   