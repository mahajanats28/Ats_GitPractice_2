
// // apply loops on array

// for(let i  = 0 ; i < city.length ; i++)
// {
  
//   console.log(city[i])
// }

// // reverse loop 

// for(let i = city.length-1 ; i >= 0 ; i--){
  
//   console.log(city[i])
// }

// // while lopp
// let j = 0
// while(j <= city.length-1 ){
  
//   console.log(city[j])
  
//   j++
// }

// // reverse
// let a = city.length-1

// while(a >= 0){
  
//   console.log(city[a])
  
//   a--
// }

// let stu_age = [1995,1996,1999,2002]

// let currentage = []

// for(let i = 0 ; i < stu_age.length ; i++){
  
  
//       age = 2024 - stu_age[i]
  
//       currentage.push(age)
// }

// console.log(currentage)

// // by using map() method
// my_age =stu_age.map(function(el,index,arr){
  
//   return 2024 - el
// })

// console.log(my_age);

// let marks = [75,72,68,57,39,34]

// let ab50 = []

// for(let i = 0 ; i < marks.length ; i++){
  
//   if(marks[i] > 50){
    
//     ab50.push(marks[i])
    
//   }
// }

// console.log(ab50)

// let belo60 = []


// for(let i = 0 ; i < marks.length ; i++){
  
//   if(marks[i] < 60){
    
//     belo60.push(marks[i])
//   }
// }

// console.log(belo60)

// // filter method()

// my_marks = marks.filter(function(el,index,arr){
  
//       return el > 50
  
// })
// console.log(my_marks)

let arr = [11,33,55,44]

let total = 0

for(let i=0 ;i < arr.length ; i++){
  
     total = total + arr[i]
  
}
console.log(total)

// reduce methods()


  my_total = arr.reduce(function(acc,el,index,arr){
     
      return acc + el
     
   },0)

console.log(my_total)