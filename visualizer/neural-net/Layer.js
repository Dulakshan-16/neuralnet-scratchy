import { create, all, random } from "mathjs";

import Neuron from "./Neuron.js";
import activations from "./activationFunctions.js";
import {
  randomWeight,
  generateRandomWeightMatrix,
  initializeNodes,
} from "./utils.js";

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

    // Initialize random weights if no weights are given
    if (!args.weights) {
      this.weights = generateRandomWeightMatrix(args.nodes, args.input.length);
    }

    // Create nodes for layer
    this.nodes = initializeNodes(
      args.input,
      this.weights,
      args.nodes,
      this.activation
    );

    this.input = args.input;
  }

  computeLayerOutput = () => this.nodes.map((node) => node.computeOutput());
}

export default Layer;
