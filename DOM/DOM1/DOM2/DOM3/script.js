
let headOne = document.querySelector('h1')
let buttonc = document.querySelector('button');

console.log(headOne);
console.log(buttonc);

buttonc.addEventListener('click',function(el){

  headOne.textContent = "Karsan";
  headOne.style.color = "Red";
  headOne.style.backgroundColor = "yellow";
});