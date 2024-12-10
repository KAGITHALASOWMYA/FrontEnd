let userInfo1 = {
    name: "Sono",
    age: 22
  };
  
  let userInfo2 = {
    age: 23,
    city: "New York"
  };
  
  let mergedUser = Object.assign({}, userInfo1, userInfo2);
  
  console.log(mergedUser);  // { name: "Sono", age: 23, city: "New York" }
  