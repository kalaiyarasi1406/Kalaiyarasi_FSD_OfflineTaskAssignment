function chekObj(input) {
  return input !== null && Object.prototype.toString.call(input) === "[object Object]";
}

function checkTwoInp(input1, input2) {
  if (!chekObj(input1) || !chekObj(input2)) {
   return (" Invalid Inputs ");
  }
  
  var res= {};

  for (var key in input1) {
    if (input1[key] !== undefined) {
      if (input2[key] !== undefined && chekObj(input1[key]) && chekObj(input2[key])) {
        res[key] = checkTwoInp(input1[key], input2[key]);
      } else {
        res[key] = input1[key];
      }
    }
  }
  
  for (var key in input2) {
    if (input2[key] !== undefined && !res[key]) {
      res[key] = input2[key];
    }
  }
  return res;
}








