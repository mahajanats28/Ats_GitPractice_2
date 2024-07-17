//    **  Practice of Important Arrys Programm **  

//  Programm-> 1 Calculate all Student Current Ages

let birthYear = [1989,1992,1995,1998]

let currentAge = [] ;

for(let i = 0 ; i < birthYear.length ; i++){
  
    // console.log(i)//  index 0,1,2,3
    // console.log(birthYear[i])// it wil gives all Array Element
     
        let ages  =  2024 - birthYear[i]
        
        currentAge.push(ages)
  
  
}
   console.log(currentAge)//[ 35, 32, 29, 26 ]
   
   //  Programm-> 1.1 Calculate Your Current Age
   
   let birthYear2 = [1996,1999,2002,2005]
   
   let currentAge2 = []
   
   for(let i = 0 ; i < birthYear2.length ; i++){
      
     //   console.log(i) // it wil gives alarray index
        console.log(birthYear2[i])// it wil gives all Array Element
     
            let ages2 = 2024 - birthYear2[i] ;
   //  console.log(ages2)// 28,25,22,19 we have to store in an blank Array
            currentAge2.push(ages2)
     
   }
   
   console.log(currentAge2)//  [ 28, 25, 22, 19 ]
   
   
   // programm- 1.2 Calculate Your Current Age
   
   let birthYear3 = [1999,2001,2003,2006]
   
   let currentAges3 = [];
   
   for(let i = 0; i < birthYear3.length ; i++){
     
        // console.log(i)
        // console.log(birthYear3[i])// it wil al Array Element
        
           let ages3 =  2024 - birthYear3[i]    
           
           currentAges3.push(ages3)
     
   }
     console.log("Current Ages of all Student  " + currentAges3);// [25,23,21,18]
     
     
   
   //  programm --> 2.1 store all student result who have got above 40 Marks
   
   
   let marks = [42,55,50,33,22,58,35,60,38]
   
   let above40 = []
   
   for(let i = 0 ; i < marks.length ; i++){
     
      console.log(i) // gives all index number
      console.log(marks[i])//  gives all element of an Array
     
     if(marks[i] > 40){
       
       above40.push(marks[i])
       
     }
     
   }
   
     console.log("All Pass Student -- > " +above40);//[42,55,50,58,60]
     
   //  programm --> 2.2 store all student result who have got above 40 Marks   
   
   let marks1 = [60,55,34,45,42,40,55,22]
   
   let above40_1 = [];
   let below40 = [];
   
   for(let i = 0 ; i < marks1.length ; i++){
     
    // console.log(i)// index of an array
      // console.log(marks[i])// all Element of an Arry
     
     if(marks1[i] > 40){
       
       above40_1.push(marks1[i])
      
     }else{
       
       below40.push(marks1[i])
       
     }
     
   }
   
   console.log("student who have got 40 plus marks -->  " +above40_1)//[60,55,45,42,55]
   console.log("student who have below 40 marks --> " + below40)//[34,40,22]
   
   
   
 //   //  programm --> 2.3 store all student result who have got above 50 Marks  
 
    let marks2 = [45,68,72,33,62,35,55,76]
   
   let above50 = []
   let below50 = []
   
   for(let i = 0 ; i < marks2.length ; i++){
     
         if(marks2[i] > 50){
           
           above50.push(marks2[i])
           
         }else{
           
           below50.push(marks2[i])
           
         }
    
   }
      console.log(above50)// [ 68, 72, 62, 55, 76 ]
      console.log(below50)// [ 45, 33, 35 ]
      
      
  //  programm - 3.1 give total of an array element -->
  
  let number = [11,22,33]
  
  let total = 0 ;
  
  for(let i = 0 ; i < number.length ; i++){// 1,2,3
    
   //  console.log(number[i])// gives all Array Element
    
     total = total + number[i] //
     
//   total = 0 + 11 = 11
//   total = 11 + 22 = 33
//   total = 33 + 33 = 66
                              
//    output should be -> 66                              
  }
  
     console.log("Total of an Array Element -->" +total);// 66
     
     
//  programm - 3.2 give total of an array element -->   

 let number2 = [15,25,35,55,70]
 
 let sum = 0 ;
 
 for(let i = 0 ; i < number2.length ; i ++){//1,2,3,4,5
   
     console.log(number2[i])
     
     sum = sum + number2[i]
   
//   sum = 0 + 15 -> 15   
//   sum = 15 + 25 -> 40 
//   sum = 40 + 35 -> 75 
//   sum = 75 + 55 -> 130 
//   sum = 130 + 70 -> 200  
   
   //   output should be --> 200
 }
    console.log("Sum of an Given Array is --> " +sum) // 200