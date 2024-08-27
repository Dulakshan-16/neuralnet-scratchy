import Neuron from "./Neuron.js";
import activations from "./activationFunctions.js";

class Layer {
  constructor(args) {
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
  }
}

export default Layer;
