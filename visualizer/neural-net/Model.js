import { create, all } from "mathjs";
import { forwardPropogate } from "./utils.js";
import { mse } from "./loss.js";

const config = {};
const math = create(all, config);

class Model {
  constructor() {
    this._layers = [];
    this._noLayers = 0;
    this._optimizer;
    this._loss;
    this._metrics;
  }

  add(layer) {
    if (this._noLayers > 0) {
      let prevLayer = this._layers[this._noLayers - 1]
      
      layer.inputShape = prevLayer._nodes.length;
    }

    this._layers.push(layer);
    this._noLayers++;
  }

  compile(args) {
    this._loss = args.loss;
    this._metrics = args.metrics;
  }

  fit(inputs, labels, options) {
    let cardinality = inputs.length;

    let modelOutputs = [];

    // Loop through dataset
    for (let i = 0; i < cardinality; i++) {
      // Run forward propogation through each datapoint
      let output = forwardPropogate(inputs[i], this._layers);

      modelOutputs.push(output);
    }

    let loss = mse(yTrue, yHat);
    // console.log(loss);
  }
}

export default Model;
