import { create, all } from "mathjs";
import Layer from "./Layer.js";

const config = {};
const math = create(all, config);

const input = [1, 2];

const layer = new Layer({
  nodes: 2,
  activation: "relu",
  inputShape: input.length,
  input: input,
});

console.log(layer);
