import { layerWidth, layerSpacing, nodeSpacing, nodeRadius } from "./config";
import NeuronGraphic from "../components/Neuron/NeuronGraphic";
import LayerGraphic from "../components/Layer/LayerGraphic";

export const canvasDimensions = (model) => {
  const layers = model._layers;
  const maxNodes = Math.max(...layers.map((layer) => layer._noNodes));

  const canvasWidth = layerWidth * layers.length;
  const canvasHeight = (nodeRadius * 2 + nodeSpacing) * maxNodes;

  return { width: canvasWidth, height: canvasHeight };
};

export const drawModelLayers = (layers, canvasHeight) => {
  const noLayers = layers.length;

  const drawnLayers = [];

  for (let i = 0; i < noLayers; i++) {
    const layer = layers[i];
    const layerId = `layer${i}`;

    const newLayerSpacing = layerSpacing + layerWidth * i;

    // Centers the nodes (Aesthetically pleasing lol)
    const yPost =
      (canvasHeight -
        (layer._nodes.length * (nodeRadius * 2 + nodeSpacing) -
          nodeSpacing * 2)) /
      2;

    const layerUI = (
      <LayerGraphic
        key={layerId}
        id={layerId}
        layer={layer}
        xPost={newLayerSpacing}
        yPost={yPost}
      ></LayerGraphic>
    );

    drawnLayers.push(layerUI);
  }

  return drawnLayers;
};

export const drawLayerNodes = (nodes, noNodes, xPosition, yPosition) => {
  console.log("node start y position:", yPosition);

  let layerNodes = [];
  for (let i = 0; i < noNodes; i++) {
    const nodePosition = {
      x: xPosition,
      y: yPosition + (nodeSpacing + nodeRadius * 2) * i,
    };
    const neuronId = `neuron${i}`;

    const node = nodes[i];

    const nodeUI = (
      <NeuronGraphic
        w={node._w}
        x={node._x}
        activation={node._activation.name}
        position={nodePosition}
        id={neuronId}
        key={neuronId}
      ></NeuronGraphic>
    );

    layerNodes.push(nodeUI);
  }

  return layerNodes;
};
