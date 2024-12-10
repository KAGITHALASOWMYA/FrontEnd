let fruitPrices = {
    apple: 2,
    banana: 1,
    cherry: 3
  };
  
  function getKeys(obj) {
    return Object.keys(obj);
  }
  
  function getValues(obj) {
    return Object.values(obj);
  }
  
  console.log(getKeys(fruitPrices));   // ["apple", "banana", "cherry"]
  console.log(getValues(fruitPrices)); // [2, 1, 3]
  