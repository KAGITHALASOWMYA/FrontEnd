let user1 = { name: "Sonu", age: 23 };
let user2 = { city: "Paris", country: "France" };

let mergedUser = { ...user1, ...user2 };

console.log(mergedUser);  // { name: "Sonu", age: 23, city: "Paris", country: "France" }
