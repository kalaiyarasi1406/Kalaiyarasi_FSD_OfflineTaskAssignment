function findVal(inputs, val) {
  try {
    const res = val
      .split(".")                           
      .map((key) => (inputs = inputs[key])) 
      .pop();                               
    return res !== undefined ? res : "Error coudn't find the path ";
  } catch {
    return "path does not exist";
  }
}







