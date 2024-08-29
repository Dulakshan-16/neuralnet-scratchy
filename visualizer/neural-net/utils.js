import Neuron from "./Neuron.js";

export const randomWeight = () => Math.random() * 2 - 1;

export const generateRandomWeightMatrix = (rows, columns) => {
  // Row i corresponds to the weights that affect the ith neuron in the Layer
  // Column j corresponds to the weights from the jth neuron from the previous layer that affect the neurons in the next layer
  // W[i][j] corresponds to the weight that affects the ith neuron in the L layer from the jth neuron in L-1 layer

  let weightMatrix = new Array(rows);

  for (let i = 0; i < rows; i++) {
    weightMatrix[i] = new Array(columns);

    for (let j = 0; j < columns; j++) {
      weightMatrix[i][j] = randomWeight();
      // console.log(weightMatrix[i][j]);
    }
  }

  return weightMatrix;
};

export const initializeNodes = (input, weights, noNodes, activation) => {
  let nodes = new Array(noNodes);

  for (let i = 0; i < noNodes; i++) {
    nodes[i] = new Neuron({
      // Generate random weight when initliazing neuron
      weights: weights[i],
      // Set bias to 0
      bias: 0,
      activations: input,
      activation: activation,
    });
  }

  return nodes;
};
