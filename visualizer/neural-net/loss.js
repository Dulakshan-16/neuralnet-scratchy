export const mse = (yTrue, yHat) => {
  let loss = 0;
  let size = data.yTrue.length;

  for (let i = 0; i < size; i++) {
    loss += (yHat[i] - yTrue[i]) ** 2;
  }

  return loss / size;
};
