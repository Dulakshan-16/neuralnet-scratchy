import NeuronGraphic from "../Neuron/NeuronGraphic";

const drawNode = (node, index) => {
  let nodePosition = { x: 100, y: 100 + 150 * index };
  let neuronId = `neuron${index}`;

  return (
    <NeuronGraphic
      w={node._w}
      x={node._x}
      activation={node._activation.name}
      position={nodePosition}
      id={neuronId}
      key={neuronId}
    ></NeuronGraphic>
  );
};

const LayerGraphic = ({ layer }) => {
  console.log(layer);

  //   console.log(drawLayerNodes(layer._nodes, layer._noNodes));

  return <g id="layer">{layer._nodes.map(drawNode)}</g>;
};

export default LayerGraphic;
