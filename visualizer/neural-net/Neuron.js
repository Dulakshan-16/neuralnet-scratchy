import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

class Neuron {
  constructor({ weights, activationFunction, bias, activations }) {
    this._w = weights;
    this._x = activations;
    this._b = bias;
    this._activation = activationFunction;
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
