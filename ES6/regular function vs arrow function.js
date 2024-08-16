var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  var a,b,c,d,e,f,g;

  // This statement returns the array: [8, 6, 7, 9]
  a = elements.map(function(element) {
    return element.length;
  });
  
  // The regular function above can be written as the arrow function below
  b = elements.map((element) => {
    return element.length;
  }); // [8, 6, 7, 9]
  
  // When there is only one parameter, we can remove the surrounding parentheses
  c = elements.map(element => {
    return element.length;
  }); // [8, 6, 7, 9]
  
  // When the only statement in an arrow function is `return`, we can remove `return` and remove
  // the surrounding curly brackets
  d = elements.map(element => element.length); // [8, 6, 7, 9]
