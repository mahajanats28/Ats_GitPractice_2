
//   Arrays Imporatant Methods()

let marks = [48,57,62,71,78,68]

// slice()  return new Array

//syntax
//arrayName.slice(startPosition,endPosition)
//endPosition optional
//endPosition always less than 1
// left to right
//return new array

let new_array = marks.slice(2,5) ;
console.log(new_array)
console.log("old Array " +marks)

// splice() return removes elements array[]

let arr_splice =marks.splice(1,2)// 57,62 removed
console.log(arr_splice)
console.log(marks)

//  new Array

let Fruits = ["Mango","Banana","Apple","Kiwi"];
console.log(Fruits)

//  reverse() return array reverse array[]
let res_arr = Fruits.reverse()
console.log(res_arr)

// sort() retured alpa sorted element Array[]

let srt_arr = Fruits.sort()
console.log(Fruits)
console.log(srt_arr)

// new array

let my_details = ["Atul","Suresh","Mahajan",8668283056]

// join() return String "  "

let detail_join = my_details.join("  ")
console.log(detail_join)

// new array

// program - 1
let arr_1 = ["A","B","C"]
let arr_2 = ["D","E"]

// concat()  return merged Arry[]

let new_arr = arr_1.concat(arr_2)
console.log(new_arr)

// programm - 2
let arr_3 = ["A","B","C"]
let arr_4 = ["D","E"]
let arr_5 = ['F','G','H']

let new_arr2 = arr_3.concat(arr_4, arr_5)
console.log(new_arr2)

// new Array []
//                0                   1                     2
let city = [ ["Mumbai","Nagpur"],["Amravti","Akola"],["Ratnagiri","Satara"]];
//               0        1           0        1          0           1

// Retriving Values/ Elemnts 

console.log(city[0][1])//  Nagpur
console.log(city[1][0])//  Amravti
console.log(city[2][1])//  Satara
console.log([1][2])//      undefined

//  flat() return new created Array[]
let flt_new = city.flat()
console.log(flt_new)// creted new array from sub array
//[ 'Mumbai', 'Nagpur', 'Amravti', 'Akola', 'Ratnagiri', 'Satara' ]

// new array 

let pin = [[785,587],[728,871],[555,287]]

// flat() use of infinity keyword 

let new_flt = pin.flat(Infinity)
console.log(new_flt)//[ 785, 587, 728, 871, 555, 287 ] creted new array from sub array

//  new array
// arrayname.fill("fill",Start_Index, End_Index(notIncluded))

let Stdn_Marks = [78,65,48,50,41,94,83,81]
let pass_std = Stdn_Marks.fill("Not Selected ",0,4)
console.log(pass_std)

// new array

let arr_index = ["Kiya","Nexon","Punch","Tesla","Ertiga"]

// index of() pass elements

let q1 = arr_index.indexOf("Punch")
console.log(q1);

let q3 = arr_index.includes("Ertiga")
console.log(q3)// 4

//  at()pass index of an array

let q2 = arr_index.at(3)
console.log(q2)