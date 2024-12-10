let salaries = {
    Sonu: 200,
    Manu: 150,
    Sono: 300
  };
  
  function sortSalaries(obj) {
    return Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
  }
  
  console.log(sortSalaries(salaries));  // ["Manu", "Sonu", "Sono"]
  