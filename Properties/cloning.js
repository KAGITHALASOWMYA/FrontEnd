let user = {
    name: "Sam",
    age: 23
  };
  
  function cloneObject(obj) {
    let clone = {};
    for (let key in obj) {
      clone[key] = obj[key];
    }
    return clone;
  }
  
  let userClone = cloneObject(user);
  console.log(userClone);  // { name: "Sam", age: 28 }