
// retrive element 
let para_class = document.querySelector('p');
console.log(para_class.className)

// update and create/add value
para_class.classList.add('two')
console.log(para_class.className)

// remove / delete value from class list
para_class.classList.remove('one')
console.log(para_class.className)

// use of toggle()

para_class.classList.toggle('three')
console.log(para_class.className)// added "three" value

para_class.classList.toggle('two')
console.log(para_class.className)// remove "two" value from classlist

// dealiing with multiple attribute 

// retrive value

let id_element = document.querySelector('#abp')
console.log(id_element)//

// retrive value
let new_id = id_element.getAttribute('id')
let new_cls = id_element.getAttribute('class')
let new_name = id_element.getAttribute('name')

console.log(new_id)
console.log(new_cls)
console.log(new_name)

// update value
 id_element.setAttribute('id','Ibn');
console.log(id_element)// update id with -> "abp" to "Ibn"

// crreate new attribute and value
id_element.setAttribute('id1',"aajtak")
console.log(id_element);// added new attri and value

// remove/delete 

id_element.removeAttribute("id");
console.log(id_element)// id Attribue and value is remove
