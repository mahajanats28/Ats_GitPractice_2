
// function in javascript

// function Declaration
// function Expression
// function arrow

// function Declaration
function addition(x,y){
  
    return x + y
    
    console.log("HIII Mom")// return is last statement of block so it cant work
    
  }
  
  a = addition(50,200)
  console.log(a)
  
  // function Expression ->
  
  let multiplication = function(x,y){
    
    return x * y
  }
  
  b = multiplication(10,10)
  console.log(b)
  
  // function Expression
  let sub = function(x,y){
    
    return x + y
  }
  
  c= sub(100,25)
  console.log(c)
  
  // function Expression
  
  let add = (x,y)=> x + y 

  d = add(25,55)
  console.log(d)

  // function arrow

  let mul = (x,y) => x * y

  e = mul(12,12)
  console.log(e)

  // function arrow

  let div = (x,y) => x / y 

  f = div(75,5)
  console.log(f)

  // function arrow

  let mod = (x,y) => x % y

  g = mod(48,7)
  console.log(g)
