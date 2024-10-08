import "./neuron.css";

const circleRadius = 50;

const NeuronGraphic = ({ w, x, activation, position, id }) => {
  return (
    <g key={id} id={id}>
      <circle cx={position.x} cy={position.y} r={circleRadius}></circle>
      <text x={position.x} y={position.y} textAnchor="middle" dy=".3em">
        <tspan x={position.x}>input: {x}</tspan>
        <tspan x={position.x} dy="1.2em">
          {/* weights: {w.toString()} */}
        </tspan>
        <tspan x={position.x} dy="1.2em">
          activation: {activation}
        </tspan>
      </text>
    </g>
  );
};
export default NeuronGraphic;
