import { drawModelLayers } from "../../utils/painter";

const ModelGraphic = ({ model, canvasHeight }) => {
  const layers = model._layers;

  const drawnModelLayers = drawModelLayers(layers, canvasHeight);

  return <>{drawnModelLayers}</>;
};

export default ModelGraphic;
