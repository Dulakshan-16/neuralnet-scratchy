import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

class Neuron {
  constructor(args) {
    this._w = args.weights;
    this._x = args.activations;
    this._b = args.bias;
    this._activation = args.activation;
  }

  computeZ() {
    // console.log(this._w, this._x);

    return math.dot(this._w, this._x) + this._b;
  }

  computeOutput() {
    const z = this._computeZ();
    return this._activation(z);
  }
}

export default Neuron;
