// array methods()

//slice(),splice(),reverse(),sort(),join(),concate(),indexOf(),at()
// MultiDimentional array

let number = [10,20,50,200,400,25]

// arry count number from -->left to right -->

// slice ()
let aa =number.slice(1,5)// run 1 to 4
console.log(number.slice(-3))
console.log(number.slice(0,-2))
console.log(number.slice(-3,0))
console.log(aa)

// splice() romves element

let bb = number.splice(2,2)
console.log(bb)
console.log(number.splice(0,3))
console.log(number.splice(-5,1))
console.log(number)

number = [10,20,50,200,400,25]
console.log(number)

// reverse () revesre element of arry

let cc = number.reverse()
console.log(cc)

let names = ['Kiran',"Hiran","Jiran","Dharan","Kuran"]

let dd = names.sort()
 console.log(dd)

// join()  return string

let alpha = ['A','B','C','D','E','G']

let gg =  alpha.join('-')
console.log(gg)// return string

// concate() to join more than 2 array

let a = [1,2,4]
let b = [10,9,8]

let c = a.concat(b)
console.log(c)// return new array

let d = c.concat(a,b)
console.log(d)// return new array

// Multidimentional array

let team =  [['MI','CSK'],['KKR','GG'],['DD','RCB']]

console.log(team)

console.log(team[1][0])// KKR
console.log(team[0][1])// CSK
console.log(team[2][1])// RCB

// flat() its combine all array el into one array

let xx = team.flat()
console.log(xx)//  return created array

// indexOf() return INDEX NUMBER

let animal = ['Cat','Dog','Rabbit','Hare','Stage']

let yy = animal.indexOf('Rabbit')
console.log(yy)// 
console.log(animal.indexOf('Stage'))//4
// if el not present its return -1
console.log(animal.indexOf('Tiger'))

// at() return index values

let zz = animal.at(3)
console.log(zz)// Hare