
let head  = document.querySelector('h1')
let buttonc = document.querySelector('button')
let inputt = document.querySelector('input')


buttonc.addEventListener('click',function(){
      let colorText = inputt.value
      head.style.color = colorText
      inputt.value = " "

});