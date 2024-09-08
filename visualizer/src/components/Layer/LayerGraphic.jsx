import { drawLayerNodes } from "../../utils/painter";

const LayerGraphic = ({ layer, id, xPost, yPost }) => {
  const layerNodes = drawLayerNodes(layer._nodes, layer._noNodes, xPost, yPost);

  return <g id={id}>{layerNodes}</g>;
};

export default LayerGraphic;
