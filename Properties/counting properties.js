function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
      count++;
    }
    return count;
  }
  
  let user = {
    name: "Sony",
    age: 30,
    isAdmin: true
  };
  
  console.log(countProperties(user));  // 3
  