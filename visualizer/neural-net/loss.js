export const mse = (data) => {
  let loss = 0;
  let size = data.yTrue.length;

  for (let i = 0; i < size; i++) {
    loss += (data.yHat[i] - data.yTrue[i]) ** 2;
  }

  return loss / size;
};
