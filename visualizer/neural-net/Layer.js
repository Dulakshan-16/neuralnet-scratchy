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
    this.inputShape = args.inputShape;

    if (this.inputShape === 1) {
      this.input = [args.input];
    } else {
      this.input = args.input;
    }

    // Determine activation function
    if (!args.activation) this.activation = activations["linear"];

    if (args.activation in activations)
      this.activation = activations[args.activation];
    else {
      this.activation = activations["linear"];
    }

    // Initialize random weights if no weights are given
    if (!args.weights && args.input) {
      this.weights = generateRandomWeightMatrix(args.nodes, args.inputShape);
    }

    // Create nodes for layer
    this.nodes = initializeNodes(
      this.input,
      this.weights,
      args.nodes,
      this.activation
    );
  }

  set setInput(newInput) {
    if (this.inputShape === 1) {
      this.input = [newInput];
    } else {
      this.input = newInput;
    }

    // Change input of each neuron
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].x = this.input;
    }
  }

  computeLayerOutput() {
    return this.nodes.map((node) => node.computeOutput());
  }
}

export default Layer;
