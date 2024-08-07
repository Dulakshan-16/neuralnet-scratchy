import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

const sigmoid = (z) => 1 / (1 + math.exp(-z));

const relu = (z) => {
  if (z <= 0) return 0;

  return z;
};

class Neuron {
  constructor(weights, x, bias, activation = "sg") {
    this.w = weights;
    this.x = x;
    this.b = bias;

    if (activation === "sig") this.activation = sigmoid;
    else if (activation === "relu") this.activation = relu;
  }

  compute_z() {
    return math.dot(this.w, this.x) + this.b;
  }
  computeOutput() {
    const z = this.compute_z();
    return this.activation(z);
  }
}

export default Neuron;
