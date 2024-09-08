import { useState } from "react";
import { canvasDimensions } from "./utils/painter";
import ModelGraphic from "./components/Model/ModelGraphic";

import Layer from "../neural-net/Layer";
import Model from "../neural-net/Model";

// These constants might be useful later

// const screenWidth = window.screen.width;
// const screenHeight = window.screen.height;

function App() {
  let model = new Model();

  model.add(new Layer({ inputShape: 2, nodes: 7 }));
  model.add(new Layer({ activation: "sigmoid", nodes: 4 }));
  model.add(new Layer({ nodes: 2, activation: "sigmoid" }));
  model.add(new Layer({ nodes: 1 }));

  const dimensions = canvasDimensions(model);

  return (
    <div>
      <svg
        width="1000"
        height="1000"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <ModelGraphic
          model={model}
          canvasHeight={dimensions.height}
        ></ModelGraphic>
      </svg>
    </div>
  );
}

export default App;
