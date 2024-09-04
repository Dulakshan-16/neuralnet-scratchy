import { create, all, random } from "mathjs";

import Neuron from "./Neuron.js";
import activations from "./activationFunctions.js";
import { generateRandomWeightMatrix, initializeNodes } from "./utils.js";

const config = {};
const math = create(all, config);

class Layer {
  constructor(args) {
    this._inputShape = args.inputShape;
    this._noNodes = args.nodes

    if (this._inputShape === 1) {
      this._input = [args.input];
    } else {
      this._input = args.input;
    }

    // Determine activation function
    if (!args.activation) this._activation = activations["linear"];

    if (args.activation in activations)
      this._activation = activations[args.activation];
    else {
      this._activation = activations["linear"];
    }

    // Initialize random weights if no weights are given
    if (!args.weights) {
      this._weights = generateRandomWeightMatrix(args.nodes, args.inputShape);
    }

    // Create nodes for layer
    this._nodes = initializeNodes(
      this._input,
      this._weights,
      args.nodes,
      this._activation
    );
  }

  set inputShape(newInputShape) {
    this._inputShape = newInputShape;
    this._weights = generateRandomWeightMatrix(this._nodes.length, this._inputShape);

    for (let i = 0; i < this._nodes.length; i++) {
      this._nodes[i]._w = this._weights[i]
    }
  }
  setInput(newInput) {
    if (this._inputShape === 1) {
      this._input = [newInput];
    } else {
      this._input = newInput;
    }

    // Change input of each neuron
    for (let i = 0; i < this._nodes.length; i++) {
      this._nodes[i].x = this._input;
    }
  }

  computeLayerOutput() {
    return this._nodes.map((node) => node.computeOutput());
  }
}

export default Layer;
