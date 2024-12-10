let student = {
    name: "Sony",
    age: 21,
    grade: "A"
  };
  
  for (let key in student) {
    console.log(`${key}: ${student[key]}`);
  }