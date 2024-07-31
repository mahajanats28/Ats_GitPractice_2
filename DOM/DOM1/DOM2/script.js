
//  id="jay" class = "viru" name = "Shole"

let byTagname = document.querySelector('h2');
let byId = document.querySelector('#jay');
let byclass = document.querySelector('.viru');
let byName = document.querySelector('h2[name = "three"]');

console.log(byTagname);
console.log(byId);
console.log(byclass);
console.log(byName);

// update name of page

// console.log(byName.textContent)
//  let change = byName.textContent = "Hindustan..!" ; 
//  console.log(change);

// // by class
// byclass.addEventListener('click',function(el){

//    byclass.textContent = "Hindustan..!";
// })

// by id

byId.addEventListener('dblclick',function(el){

    byId.textContent = "Bharat..!"
});











