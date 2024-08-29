import { create, all } from "mathjs";
import activations from "./activationFunctions.js";
import { randomWeight } from "./utils.js";

const config = {};
const math = create(all, config);

class Neuron {
  constructor(args) {
    this.w = args.weights;
    this.x = args.activations;
    this.b = args.bias;
    this.activation = args.activation;
  }

  computeZ() {
    return math.dot(this.w, this.x) + this.b;
  }

  computeOutput() {
    const z = this.compute_z();
    return this.activation(z);
  }
}

export default Neuron;
