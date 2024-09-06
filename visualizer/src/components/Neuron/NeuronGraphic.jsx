import "./neuron.css";
const NeuronGraphic = ({ w, x, activation }) => {
  return (
    <>
      <g id="neuron">
        <circle cx="250" cy="250" r="50"></circle>
        <text x="50%" y="45%" text-anchor="middle" dy=".3em">
          <tspan x="50%">input: {x}</tspan>
          <tspan x="50%" dy="1.2em">
            weights: {w.toString()}
          </tspan>
          <tspan x="50%" dy="1.2em">
            activation: {activation}
          </tspan>
        </text>
      </g>
    </>
  );
};
export default NeuronGraphic;
