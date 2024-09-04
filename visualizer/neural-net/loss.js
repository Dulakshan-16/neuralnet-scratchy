export const mse = (yTrue, yHat) => {
  let loss = 0;
  let size = yTrue.length;

  for (let i = 0; i < size; i++) {
    console.log(yHat[i], yTrue[i]);
    
    loss += (yHat[i] - yTrue[i]) ** 2;
  }

  return loss / size;
};
