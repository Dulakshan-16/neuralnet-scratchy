import { create, all } from "mathjs";
import Layer from "./Layer.js";

const config = {};
const math = create(all, config);

const inputs = [1, 2, 3, 4, 5];

const layer = new Layer({
  nodes: 2,
  activation: "relu",
  inputShape: inputs.length,
});

console.log(layer);
