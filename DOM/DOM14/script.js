
{/* <h1>Fruits</h1>
<p class = "one">Learning updates</p> */}

// we learned 

// javascript retrive element
// javascript update element
// javascript create element
// javascript delete element

// we are learning ->

// javascript attribute create
// javascript attribute updtate
// javascript attribute retrive
// javascript attribute delete

//  Attribute

// retrive value of class
let para = document.querySelector('p');
console.log(para.className)// class value = one

// add value to classlist
para.classList.add('two')
console.log(para)// class value "two" is added

// remove class value from classlist
para.classList.remove('one')
console.log(para)// calss value "one" is deleted/remove

// toggle() method use to delete and add new value to classlist

para.classList.toggle('three');
console.log(para)// class value ="three" os added in classlist

para.classList.toggle("two");
console.log(para)// remove class value ="two"

// ** 2nd way to to deal with the HTML Attribute

let myElement_id = document.querySelector('#nmk')
console.log(myElement_id)

// retrive the values of attribute
// getAttribute is method of Elements

let id_x = myElement_id.getAttribute('id')
let class_y = myElement_id.getAttribute('class')
let name_z = myElement_id.getAttribute('name')

console.log(id_x)// id value ="nmk"
console.log(class_y)// class valua ="one"
console.log(name_z)// name value ="Minskole"

// update values of attribute ->setAttribute()

myElement_id.setAttribute("id","asm")
console.log(myElement_id)// update value with nmk to asm

// add/ create attribute and value to th class list

myElement_id.setAttribute('class1','two')
console.log(myElement_id)// ass new attribte and value

// remove/delete attribute from class list -->removeAttribute()

myElement_id.removeAttribute("class1")
console.log(myElement_id)// removes attribute nad its value
