import { create, all } from "mathjs";

import Neuron from "./Neuron.js";
import activations from "./activationFunctions.js";
import { generateRandomWeightMatrix } from "./utils.js";

const config = {};
const math = create(all, config);

class Layer {
  constructor(args) {
    // Determine activation function
    if (!args.activation) this.activation = activations["linear"];

    if (args.activation in activations)
      this.activation = activations[args.activation];
    else {
      this.activation = activations["linear"];
    }

    this.nodes = new Array(args.nodes).fill(
      new Neuron({
        weights: NaN,
        bias: NaN,
        activations: NaN,
        activation: this.activation,
      })
    );

    this.input = args.input;

    // Initialize random weights if no weights are given
    if (!args.weights) {
      this.weights = generateRandomWeightMatrix(this.nodes.length, this.input.length);
    }
  }
}

export default Layer;
