function createUser(name, age, role = "user") {
    return {
      name: name,
      age: age,
      role: role
    };
  }
  
  let newUser = createUser("Tom", 22);
  console.log(newUser);  // { name: "Tom", age: 22, role: "user" }
  