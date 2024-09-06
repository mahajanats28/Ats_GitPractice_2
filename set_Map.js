// map() in javascript --->

// Map() similer to object but little bit advance
// Map()has more feaures than object
// Map()can be any data types
// Map() has better performance than object

//  Method of Maps()

// set() get() size() has() delete() clear()

let data = new Map(
    [
      
      ['name',"Aashish"],
      ['Lastname',"Kanade"],
      ['10','this is number']
      ]
  )
  
  console.log(data)
  
  // loop over a map()
  
  for(x of data){
    
    console.log(x[1])
  };
  
  
  // retrive values
  
  console.log(data)
  
  // set/add key and values in map()
  data.set('City',"Nashik");
  data.set("Age","25")
  data.set("Color",'Fair')
  console.log(data)
  console.log(data.size)
  
  // retrive values
  
  console.log(data.get('name'))
  console.log(data.get('Lastname'))
  console.log(data.get('Age'))
  console.log(data.get('City'))
  console.log(data.get('Color'))
  
  // has method use return boolien values
  console.log(data.has("10"))// true
  console.log(data.has("age"))//false
  console.log(data.has('Lastname'))//true
  
  // delete method()
  
  data.delete("Color")// delted key and values
  console.log(data)
  
  // Set in javascrip->
  //A Set is a collection of values where each value must be unique.
  // use to store collection of values
  // duplicate not allowed in set
  
  // Method() 
  
  // add() delete()has() clear() and size()
  
  
  let my_set = new Set()
  
  my_set.add("Ram")
  console.log(my_set)
  my_set.add("Singh")
  my_set.add(24)
  console.log(my_set)
  my_set.add("Amravti")
  
  console.log(my_set.size)
  
  // has()
  
  console.log(my_set.has(24))
  console.log(my_set.has('ram'))// false
  console.log(my_set.has('Ram'))
  
  // delete ()
  my_set.delete(24)
  console.log(my_set)
  
  // clear()
  my_set.clear()
  console.log(my_set)
  
  let setA = new Set()
  
  setA.add('Rutuja')
  setA.add("Kanade")
  setA.add("Akola")
  
  console.log(setA)
  
  setA.add(21)
  console.log(setA)

  // use of forEach meyhod in set

  setA.forEach(function(el){

    console.log(el)// print each element of SET
  });