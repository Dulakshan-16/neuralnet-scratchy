import { create, all } from "mathjs";
import Neuron from "./neuralNetwork.js";

const config = {};
const math = create(all, config);

const input = math.matrix([1, 2, 3, 4, 5]);
const weights = math.matrix([1, 1, 1, 1, 1]);
const bias = 1;

const neuron = new Neuron(input, weights, bias);

console.log(neuron.computeOutput());
