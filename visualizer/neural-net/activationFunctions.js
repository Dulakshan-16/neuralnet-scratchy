import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

const sigmoid = (z) => 1 / (1 + math.exp(-z));

const relu = (z) => math.max(0, z);

const linear = (z) => z;

const activations = { sigmoid, relu, linear };

export default activations;
