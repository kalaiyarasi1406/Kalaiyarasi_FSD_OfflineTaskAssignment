function smplData(inputs, n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    const currentEle = {};
    inputs.forEach((items) => {
    if (items.type === "string") {
      currentEle[items.key] = i === 0 ? "sample" : "another";
      } else if (items.type=== "number") {
        currentEle[items.key] = Math.floor(Math.random() * 100) + 1;
      } else if (items.type=== "boolean") {
        currentEle[items.key] = Math.random() < 0.5;
      }
    });
  
    res.push(currentEle);
  }
  return res;
}





