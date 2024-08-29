export const randomWeight = () => Math.random() * 2 - 1;

export const generateRandomWeightMatrix = (rows, columns) => {
  let weightMatrix = new Array(rows);
  
  for (let i = 0; i < rows; i++) {
    weightMatrix[i] = new Array(columns);

    for (let j = 0; j < columns; j++) {
      weightMatrix[i][j] = randomWeight();
      console.log(weightMatrix[i][j]);
    }
  }

  return weightMatrix
};
