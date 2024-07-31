
let byTagname = document.querySelector('p');
let byId = document.querySelector('#one');
let byClass = document.querySelector('.two');
let byattr = document.querySelector('p[name1 = "three"]');

console.log(byTagname);
console.log(byId);
console.log(byClass);
console.log(byattr);

byattr.addEventListener('click',function(){

  byattr.textContent = "Vegitable";
  
});


let info = {
  
  fullname : "Atul s Mahajan" ,

    parent : {

      Father : "Suresh B Mahajan",
      Mother : "Anita Mahajan"

    }

};

// Accessing values 
info.parent.Father = "Suresh Mahajan";
info['parent']['Mother'] = "Anita Suresh Mahajan";
