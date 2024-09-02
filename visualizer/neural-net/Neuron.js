import { create, all } from "mathjs";

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
    console.log(this.w, this.x);
    
    return math.dot(this.w, this.x) + this.b;
  }

  computeOutput() {
    const z = this.computeZ();
    return this.activation(z);
  }
}

export default Neuron;
