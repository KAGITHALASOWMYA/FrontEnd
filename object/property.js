let book = {
    title: "1984",
    author: "Sowmya"
  };
  
  function hasProperty(obj, key) {
    return key in obj;
  }
  
  console.log(hasProperty(book, "title"));   // true
  console.log(hasProperty(book, "year"));    // false
