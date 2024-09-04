import { create, all, random } from "mathjs";

import Neuron from "./Neuron.js";
import activations from "./activationFunctions.js";
import { generateRandomWeightMatrix, initializeNodes } from "./utils.js";

const config = {};
const math = create(all, config);

class Layer {
  constructor({ inputShape, input, weights, activation = "linear", nodes }) {
    this._inputShape = inputShape;
    this._noNodes = nodes;

    if (this._inputShape === 1) {
      this._input = [input];
    } else {
      this._input = input;
    }

    // Determine activation function
    if (activation in activations) this._activation = activations[activation];
    else {
      console.error("Invalid activation function.");

      this._activation = activations["linear"];
    }

    // Initialize random weights if no weights are given and inputShape argument is present
    if (!weights && inputShape) {
      this._weights = generateRandomWeightMatrix(nodes, inputShape);
    } else {
      // TODO: Add function to verify dimensions of given weights
      this._weights = weights;
    }

    // If input shape arguement is present, create nodes for layer
    this._nodes = initializeNodes(
      this._input,
      this._weights,
      this._noNodes,
      this._activation
    );
  }

  set inputShape(newInputShape) {
    // If new input is not the current input, update weights according to the new input shape
    if (newInputShape !== this._inputShape) {
      this._inputShape = newInputShape;
      this._weights = generateRandomWeightMatrix(
        this._noNodes,
        this._inputShape
      );

      for (let i = 0; i < this._nodes.length; i++) {
        this._nodes[i]._w = this._weights[i];
      }
    }
  }
  set input(newInput) {
    if (this._inputShape === 1) {
      this._input = [newInput];
    } else {
      this._input = newInput;
    }

    // Change input of each neuron
    for (let i = 0; i < this._nodes.length; i++) {
      this._nodes[i]._x = this._input;
    }
  }

  computeLayerOutput() {
    return this._nodes.map((node) => node.computeOutput());
  }
}

export default Layer;
