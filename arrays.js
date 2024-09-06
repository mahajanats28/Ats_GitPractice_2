
let a = "Fathers Day";
console.log(a)

// // //                         **  Aarry **

// // // Array is used to store multipal values in single varible , it wil come with 
// // // many inbuit methods that makes easy to manupulate and access data hold by an array
// // // Arrays stores the value by an Index, array index start from [0]


// // //     Define an Array

// // let name  = ["Atul","Krishna","Amit","Subhuti","Kavay"]// <--Aarray constructor

// // let teams = ["Dehli","Gujrat","Mumbai","Chennai","RCB"] // <-- Array constructor

// // // Programm 1

// // //      Index      0         1     2            3             4
// // let channel = ["AbpMaja","Ibn7","SamTv","LoksahiMarathi","TV9Marathi"]
// // //  Length        1        2       3           4              5

// // //  Retrive The Value of an Aarry (Fetching data)
// // console.log(channel[0])// AbpMaja
// // console.log(channel[1])//  Ibn7
// // console.log(channel[2])//  SamTv
// // console.log(channel[3])//  LoksahiMarathi
// // console.log(channel[4])//  TV9Marathi

// //  console.log(channel.length) // 5 length of an Array
// //  console.log(channel.length-1)// 4
// //  // Programm 2
 
// //   //    Index    0      1        2       3
// // let fruit = ["Apple","Banana","Mango","Papaya"]
// //  // Length      1        2       3       4
 
 
// //  //  Retrive The Value of Aarry
// //  console.log(fruit[0])// Apple
// //  console.log(fruit[1])// Banana
// //  console.log(fruit[2])// Mango
// //  console.log(fruit[3])// Papaya
 
// //  console.log(fruit.length) // 4
// //  console.log(fruit.length-1)// 3

// // // programm 3 
// //  let vegitable = ["Potato","Tomato","Binjal","Onion","Spinach"]
// //  console.log(vegitable.length)// 5
 
// //  for(let i = 0 ; i <= 5 ; i++){
   
// //   // console.log(i) //   0,1,2,3,4  gives index of values
// //    console.log(vegitable[i])
// //  }
 
 
// //  //    programm 4
 
// //  let country = ["India","Srilanka","Maynmar","Nepal","Bhutan"]
// //  console.log(country.length) //  length is 5
 
// //  for(let i = 0 ; i < country.length ; i++){
   
// //    console.log(i)// //   0,1,2,3,4  gives index of values
// //    console.log(country[i])
// //  }
 
// //  //    programm 5
 
// //  let state = ["Maharashtra","Kerala","Gujrat","Tamilnadu"]
// //  console.log(state.length) //  4
 
// //  for(let i = 0 ; i< state.length ; i++){
   
// //    console.log(state[i])
// //  }
 
//  // ################ ** Day-2  Arrays ** ########################

// let fruits = ["orange","mango","custered apple","lichi"]

//  // Retrive data (Fetching data)
//      console.log(fruits[0])// orange

//   //  update an index element into an Array
  
//   fruits[0] = "apple" // update an array index with orange to apple
//   console.log(fruits)

//   fruits[2] = "chikoo" // update an array index with custered apple to chikoo
//   console.log(fruits)

//   //   Add an new element into an Array--> we use push method

// let teams = ["Mumbai Indians","KKR","Chennai","RCB"];

// console.log(teams[2])//chennai
// console.log(teams.length)//4
// console.log(teams.length-1)// 3 it wil give last index of an current Array,RCB

// // use of push methd to add new elemnt -->

//      teams.push("Gujrat");
//      console.log(teams)// new element add at the last
//      //  [ 'Mumbai Indians', 'KKR', 'Chennai', 'RCB', 'Gujrat' ]
//      console.log(teams.length)//5
     
//      teams.push("Delhi");
//      console.log(teams)// add Delhi at the last
     
// // delete elements from existing array --> we use pop method
// //  it wil delete last element of an array

//     teams.pop()//[ 'Mumbai Indians', 'KKR', 'Chennai', 'RCB', 'Gujrat', 'Delhi' ]
//     console.log(teams)// it delete Delhi from array
//     // [ 'Mumbai Indians', 'KKR', 'Chennai', 'RCB', 'Gujrat']
    
    
//     teams.pop()
//     console.log(teams)// Gujrat deleted
//     //[ 'Mumbai Indians', 'KKR', 'Chennai', 'RCB' ]
    
//     //  programm 2
//                   //  0        1         2       3       4
//     let animals = ["Tiger","Elephant","Monkey","Lion","Rabbit"]
//     console.log(animals[4])// rabbit
//     console.log(animals.length)// 5
//     console.log(animals.length-1)// 4 last index of an array--> Rabbit
    
//     // forword for loop
    
//     //  type --> 1
//     for(let i = 0 ; i < 5 ; i++){
      
//       console.log(i)// its give all index 0,1,2,3,4
//       console.log(animals[i])
      
//     }
    
//     //  type --> 2
//     for(let i = 0 ; i < animals.length-1 ; i++){
      
//       console.log(animals[i])
//     }
    
//     //   programm 3 --> Reverse array--
    
//     for(let i = animals.length-1 ; i >= 0 ; i--){
      
//        console.log(animals[i])
//     }
    
    
//     // programm 4 
    
//     let numbers = [12,14,21,24,33]
    
//     console.log(numbers[3]);//24
//     console.log(numbers.length) // length 5
//     console.log(numbers.length-1)// 4
    
//     // update value
//     numbers[4] = 38 ;
//     console.log(numbers[4]) // udated 38
    
    
//     // delete element from an array
//     numbers.pop()
//     console.log(numbers)// delted 38 value
    
//     //   add new element into an array
//     numbers.push(41)
//     console.log(numbers)//  add new element -->41
    
//     // forword for loop
    
//     //  type 1
//     for(let i = 0; i < 5 ; i++){
      
//       console.log(numbers[i])
//     }
    
//     // type 2
//     for(let i = 0; i < numbers.length ; i++){
      
//        console.log(numbers[i])
//     }
 
//  //    reverse array--
 
//  for(let i = numbers.length-1 ; i >= 0 ; i--){
   
//    console.log(numbers[i])
//  }
    
//     //   while loops
    
//     let grades = ['A','B','C','D']
    
//     let i = 0 ;
    
//     while(i < grades.length){
      
//       console.log(grades[i])
      
//       i = i + 1;
//     }

    // ############################# ** Day3 --> Arrays ** ################################


  // Gym -->   properties  and Method 
         
  //       Method --> Excercise
  //       Return --> Health, Fitness, Body
        
   let names = ["Arjun","Yudhishthira","Nakul","Sahdev"]
   
   console.log(names)
   console.log(names[1])//  retrive values 
   console.log(names.length)// 4
   console.log(names.length-1)// 3
   
   names[2] = "Bhima"; // update value in an array
   console.log(names) // Bhima with Nakul
   
   //Method-->  push() add new element into an array
   //   Method--> add new element
   //   return-->  new length of an Array
   
 let m =  names.push("Nakul")
 console.log(m)// return new length of Array
 console.log(names) // add Nakul new element to an array
 
// Method--> pop() use to remove last element of an 
//   Action ->  delete last element of an array
//   return-> return deleted element   

let m1 = names.pop() // delete Nakul element of an Array
console.log(names)
console.log(m1)//   return deleted element --> Nakul

// Method unshift() add new element to begnning of an Array  
//       Action -> add elemnt to the beginning
//         return-> return new length of Array

let animals = ["Cat","Dog","Tiger","Horse"]//--> length 4

let m2 =  animals.unshift("Deer")
console.log(animals)
console.log(m2)// return new length of an Array --> 5

//  Method shift() delete start element of AN Array
//      Action-> delete start element
//      return -> return deleted element --> same element

let m3 = animals.shift()
console.log(animals)//  start element id deleted
console.log(m3)// return deletd element-> Deer

// Method includes() search the element inside 
//        Action-> search the element inside array
//         Return-> retrun true if found that element else return false

  console.log(animals.includes("Tiger"));// true-> includes
  console.log(animals.includes("Deer"))//false-> Deer in an exiting Array
  console.log(animals.includes("Cat"))// true-> includes
  
  