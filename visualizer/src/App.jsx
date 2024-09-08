import { useState } from "react";
import LayerGraphic from "./components/Layer/LayerGraphic";
import ModelGraphic from "./components/Model/ModelGraphic";
import Layer from "../neural-net/Layer";
import Model from "../neural-net/Model";

// These constants might be useful later

// const screenWidth = window.screen.width;
// const screenHeight = window.screen.height;

function App() {
  let model = new Model();

  model.add(new Layer({ inputShape: 1, activation: "sigmoid", nodes: 4 }));
  model.add(new Layer({ nodes: 2, activation: "sigmoid" }));

  return (
    <div>
      <svg
        width="1000"
        height="1000"
        viewBox={`0 0 1000 1000`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <ModelGraphic model={model}></ModelGraphic>
      </svg>
    </div>
  );
}

export default App;
