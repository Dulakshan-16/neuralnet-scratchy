import { create, all } from "mathjs";
import Model from "./Model.js";
import Layer from "./Layer.js";
import { mse } from "./loss.js";

const config = {};
const math = create(all, config);

const data = { x: [1, 2], y: [2, 4] };

const model = new Model();

model.add(new Layer({ inputShape: 1, nodes: 1 }));
model.add(new Layer({ nodes: 2 }));

console.log(model);

// model.fit(data.x, data.y);
