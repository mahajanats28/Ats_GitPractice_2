
let headName = document.querySelector('h1');
let intputfiled = document.querySelector('input')
let buttonclick = document.querySelector('button');


buttonclick.addEventListener('click',function(){
 let colorText =intputfiled.value

 headName.style.color = colorText

 intputfiled.value = " "

});