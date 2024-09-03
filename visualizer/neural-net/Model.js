import { create, all, random } from "mathjs";
import { forwardPropogate } from "./utils.js";

const config = {};
const math = create(all, config);

class Model {
  constructor() {
    this.layers = [];
    this.optimizer;
    this.loss;
    this.metrics;
  }

  add(layer) {
    this.layers.push(layer);
  }

  compile(args) {
    this.loss = args.loss;
    this.metrics = args.metrics;
  }

  fit(inputs, labels, options) {
    let cardinality = inputs.length;

    let modelOutputs = [];

    // Loop through dataset
    for (let i = 0; i < cardinality; i++) {
      // Run forward propogation through each datapoint
      let output = forwardPropogate(inputs[i], this.layers);

      modelOutputs.push(output);
    }
    console.log(modelOutputs);
  }
}

export default Model;
