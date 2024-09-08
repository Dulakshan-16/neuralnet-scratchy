import NeuronGraphic from "../Neuron/NeuronGraphic";

const drawLayerNodes = (nodes, noNodes, xPosition) => {
  let layerNodes = [];
  for (let i = 0; i < noNodes; i++) {
    const nodePosition = { x: xPosition, y: 100 + 150 * i };
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

const LayerGraphic = ({ layer, xPost, id }) => {
  const layerNodes = drawLayerNodes(layer._nodes, layer._noNodes, xPost);

  return <g id={id}>{layerNodes}</g>;
};

export default LayerGraphic;
