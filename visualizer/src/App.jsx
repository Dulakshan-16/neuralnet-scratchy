import { useState } from "react";
import NeuronGraphic from "./components/Neuron/NeuronGraphic";
import LayerGraphic from "./components/LayerGraphic";
import Layer from "../neural-net/Layer";

function App() {
  let layer = new Layer({ inputShape: 1, activation: "sigmoid", nodes: 3 });

  return (
    <div>
      <svg width="200" height="200" viewBox="0 0 200 200 " xmlns="http://www.w3.org/2000/svg">
        <NeuronGraphic></NeuronGraphic>
      </svg>
    </div>
  );
}

export default App;
