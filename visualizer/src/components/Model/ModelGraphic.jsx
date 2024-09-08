import LayerGraphic from "../Layer/LayerGraphic";

const drawModelLayers = (layers) => {
  const layerSpacing = 100;
  const noLayers = layers.length;

  const drawnLayers = [];

  for (let i = 0; i < noLayers; i++) {
    const layer = layers[i];
    const newLayerSpacing = layerSpacing + i * 200;
    const layerId = `layer${i}`;

    const layerUI = (
      <LayerGraphic
        key={layerId}
        id={layerId}
        layer={layer}
        xPost={newLayerSpacing}
      ></LayerGraphic>
    );

    drawnLayers.push(layerUI);
  }

  return drawnLayers;
};

const ModelGraphic = ({ model }) => {
  const layers = model._layers;

  const drawnModelLayers = drawModelLayers(layers);

  return <>{drawnModelLayers}</>;
};

export default ModelGraphic;
