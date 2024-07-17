
console.log("Her Her Mahadev..!");


//   object Distructurin

let detail = {
  
     fname : "Chinmay",
     lname : "Deshpande",
     Age :  35
};

console.log(detail);

//  alising the properties

let {fname:fn,lname:ln,Age:ag} =   detail ;

console.log(fn);
console.log(ln)
console.log(ag)


//   nested objects 

let info = {
  
   student1 : {
     
     name : "Kedar",
     surname : "Ghude",
     std :  "10th"
     
   },
     
     student2: {
       
       name1 :   "Laxman",
       surname1 : "Deshbhratar",
       std1 : "10th"
       
     }
  
};

console.log(info)

//   alsing properties 

let {student1:{name:n,surname:s,std:std},student2:{name1:n1,surname1:s1,std1:std1}} = info ;

console.log(n);
console.log(s);
console.log(std)
console.log(n1)
console.log(s1)
console.log(std1)

let info2 ={
  
  stu :{
    
    firstName : "Kavay",
    lastName  : "Mahajan"
    
  },
  
  stu1 : {
    
    firstName1 : "Mamta",
    lastName1  : "Jatale"
}
};

let {stu:{firstName:fn1,lastName:ln1},stu1:{firstName1:fn2,lastName1:ln2}} = info2;

console.log(fn1);
console.log(ln1)
console.log(fn2)
console.log(ln2)

let detail1 = [
  
  {
        id : 1045,
        token: 41278956

},
{
    id2 : 1088,
    token2: 41789568
  
}
];


  let [{id:id,token:tk},{id2:id2,token2:tk2}] = detail1 ;
console.log(id)//1045
console.log(tk)// 41278956
console.log(id2)// 1088
console.log(tk2)//41789568

let per_detail = [
  
  {
    my_name : "Angad",
    my_lastname : "Awchar"
    
  },
  {
    
    my_name1 : "Inshant",
    my_lastname1 : "Shilawant"
    
  }
  
  ];
  
  let [{my_name:mn,my_lastname:myl},{my_name1:mn1,my_lastname1:myl1}] = per_detail ;

console.log(mn)
console.log(myl)
console.log(mn1)
console.log(myl1)

let stu_skill = {
  
  f_name : "Shirsha",
  skills :["Dance","Artist"]
}

let {f_name:f_n,skills:[sk1,sk2]} = stu_skill ;

console.log(f_n);
console.log(sk1);
console.log(sk2);

let skills1 = {
  
  studentone:{
    
    fname_1 : "Trisha",
    lname_1 : "Shivhare",
    skill: ["Singer","Java"]
  },
  
  studenttwo:{
    
    fname_2 : "Shrithi",
    lname_2 : "Jayswal",
    skill2 : ["Actor","JavaScript"]
    
  }
};

let {studentone:{fname_1:fna1,lname_1:lna1,skill:[skl1,skl2]},
studenttwo:{fname_2:fna2,lname_2:lna2,skill2:[skl3,skl4]}} = skills1 ;

console.log(fna1);// Trisha
console.log(lna1);// shivhare
console.log(fna2);// Shrithi
console.log(lna2);// jayswal
console.log(skl1,skl2);// Singer java
console.log(skl3,skl4);// Actor javascript
