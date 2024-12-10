let person = {
    name: "Sonu",
    age: 23,
    address: {
      street: "Main St",
      city: "New York",
      zipCode: 10001
    }
  };
  
  let { address: { street, city, zipCode } } = person;
  
  console.log(street);  // "Main St"
  console.log(city);    // "New York"
  console.log(zipCode); // 10001
  