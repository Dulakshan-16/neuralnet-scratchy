import { useState } from "react";
import NeuronGraphic from "./components/Neuron/NeuronGraphic";
import LayerGraphic from "./components/LayerGraphic";
import Layer from "../neural-net/Layer";

function App() {
  let layer = new Layer({ inputShape: 1, activation: "sigmoid", nodes: 3 });

  return (
    <div>
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500 "
        xmlns="http://www.w3.org/2000/svg"
      >
        <NeuronGraphic
          w={[-1, 0.5]}
          x={[1, 2]}
          activation={"linear"}
        ></NeuronGraphic>
      </svg>
    </div>
  );
}

export default App;
