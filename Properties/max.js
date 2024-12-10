let products = {
    "laptop": 1000,
    "phone": 500,
    "tablet": 700
  };
  
  function findMaxPrice(obj) {
    let maxPrice = 0;
    let maxProduct = "";
  
    for (let key in obj) {
      if (obj[key] > maxPrice) {
        maxPrice = obj[key];
        maxProduct = key;
      }
    }
  
    return maxProduct;
  }
  
  console.log(findMaxPrice(products));  // "laptop"