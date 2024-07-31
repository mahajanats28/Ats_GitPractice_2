let byid = document.querySelector('#one')
let byclass = document.querySelector('.two')
let by_Atrr = document.querySelector('h1[name="nm"]')
let by_tag = document.querySelector('h1')
let by_ul = document.querySelector('ul')

console.log(byid)
console.log(byclass)
console.log(by_Atrr)
console.log(by_tag)
console.log(by_ul);

let li_el = document.querySelector('li')
console.log(li_el);// return 1st el of document

console.log(li_el.textContent);// get text of 1st li Element (India)

let all_Li_El = document.querySelectorAll('li');
console.log(all_Li_El);// return node list[]

// by attribute
let all_liel = document.querySelectorAll('h1[name= nm]');
console.log(all_liel)


// retrivng all elemnts by getElementby method()

// by id
let byIdname = document.getElementById('one');
console.log(byIdname);

//  by classname
let by_Classname = document.getElementsByClassName('fr')
console.log(by_Classname);// return HTML Collection

//  by atrribute value
let by_Name = document.getElementsByName('nm');
console.log(by_Name);// return node list[]

//  by TagName
let by_TagNAME = document.getElementsByTagName('h1');
console.log(by_TagNAME);// return HTML Collection

// <h2 id="three" class="four" name="me">List Of Country</h2>

let ele = document.getElementById('three')
console.log(ele.className);// return class value

//  add class value in classlist
ele.classList.add('five')
console.log(ele.className)// added five as classname in classlist

// remove class value

ele.classList.remove('four')
console.log(ele.className)//remove four from classlist

// *toggle -> use to add and remove class value from classlist
// if certain class value is present its removes that in classlist
// if certain value not present its added that in classlist

// ele.classList.toggle('six');
// console.log(ele.className)// six is present so its added

ele.classList.toggle('six');
console.log(ele.classList)// now its removes from classlist