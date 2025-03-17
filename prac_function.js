// number as paramerter number as return Type

function add(a , b){
  
    return a + b
  }
  
  let a = add(10,10)
  console.log(a)
  
  // string as paramerter string as return Type
  
  function greet(str){
    
    return `Welcome ${str}`;
  }
  
  let b = greet('India')
  console.log(b)
  
  // Boolean as parameter and Boolean as return Type
  
  let age = 19
  function myAge(haveCar,age){
    
    if(age >= 18 && haveCar){
      
      return true
    }else{
      
      return false 
    }
  }
  
  let d = myAge(true,age)
  console.log(d)
  
  // object as paramter and object as return Type
  
  let Info = {
    
    name : "Abhiram",
    lastname : "Jadhao"
  }
  
  function addCity(obj){
    
    obj.city = "Mumbai"
    
    return obj
  }
  
  let c = addCity(Info)
  console.log(c)
  
  // array as parameter and array as return Type
  
  let arr = ['Nidhi',"Money","Sayli"]
  
  function addName(arr){
   
   arr.push = "Divya" 
   return arr ; 
  }
  
  let e = addName(arr)
  console.log(e)
  
  // function as parameter 
  // function expression
  
  let add1  = function(x,y){
    
    console.log(x + Y)
  }
  
  function addition(fn){
    
    return fn(13,6)
  }
  
  let f = addition(add)
  console.log(f)//19
  
  // function as return Type
  
  
  function calci(){
    
    return function(){
      
      return 9 + 9
    }
  }
  
  let ii = calci()
  console.log(ii)// not return
  let g = ii()
  console.log(g)// 18
  
  
  
  function add2(c,d){
    
    return c + d
  }
  
  let e1 = add2(4,5)
  console.log(e1)
  
  function str(str){
    
    return `Heloo ${str}`
  }
  
  let e2 = str('javascript')
  console.log(e2)
  
  let my_Age = 19
  function curage(hvv,my_Age){
    
    if(my_Age >= 18 && hvv){
      
      return true
    }else{
      
      return false
    }
    
  }
  
  let e3 = curage(true,my_Age)
  console.log(e3)
  
//  lexicicle scope

  function addme(){

    let p = 10 
    let m = 20

    console.log( m + p)

    function addme1(){

      let q = 20 
      let r = 25 

      console.log(m+p+q+r)

      //console.log(s)// not accsseble child variable in parent function
      function addme2(){

        let s = 30 
        
        console.log(m+p+q+r+s)
      }
      addme2()
    }
    addme1()

  }
  addme()