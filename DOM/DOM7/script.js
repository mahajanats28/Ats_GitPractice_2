
let inputText = document.querySelector('input');
let buttonclick = document.querySelector('button');
let ulList = document.querySelector('ul');


buttonclick.addEventListener('click',function(){

   let fruitN  =   inputText.value
   let newEl =   document.createElement('li') // li > < list created
   newEl.textContent= fruitN // <li>Papaya</li>
   ulList.appendChild(newEl)

   inputText.value = " "

});