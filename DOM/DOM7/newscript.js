// Find Css Elements

let new_input = document.querySelector('input');
let new_button = document.querySelector('button');
let ul_list = document.querySelector('ul');

console.log(new_input)
console.log(new_button)
console.log(ul_list)

new_button.addEventListener('click',function(){

   let teams =  new_input.value
      let newTeam =  document.createElement('li')// creatd <li></li>
      newTeam.textContent = teams //  added Element <li>Dehli</li>
      ul_list.appendChild(newTeam);

      new_input.value = ""

});