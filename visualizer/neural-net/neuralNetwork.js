import { create, all } from "mathjs";
import Layer from "./Layer.js";
import { mse } from "./loss.js";

const config = {};
const math = create(all, config);

const data = { x: [1, 2], y: [2, 4] };

const layer = new Layer({
  nodes: 1,
  activation: "relu",
  inputShape: 1,
  input: data.x[0],
});

console.log(layer);

let output = [layer.computeLayerOutput()];

layer.setInput = data.x[1];

output.push(layer.computeLayerOutput());

let mseLoss = mse({ yHat: output, yTrue: data.y });

