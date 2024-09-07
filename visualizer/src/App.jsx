import { useState } from "react";
import NeuronGraphic from "./components/Neuron/NeuronGraphic";
import LayerGraphic from "./components/Layer/LayerGraphic";
import Layer from "../neural-net/Layer";
import Model from "../neural-net/Model";

function App() {
  let model = new Model();

  model.add(new Layer({ inputShape: 1, activation: "sigmoid", nodes: 4 }));

  return (
    <div>
      <svg
        width="1000"
        height="500"
        viewBox="0 0 500 500 "
        xmlns="http://www.w3.org/2000/svg"
      >
        <LayerGraphic layer={model._layers[0]}></LayerGraphic>
      </svg>
    </div>
  );
}

export default App;
