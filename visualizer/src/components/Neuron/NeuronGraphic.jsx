import "./neuron.css";
const NeuronGraphic = ({}) => {
  return (
    <>
      <g id="neuron">
        <circle cx="100" cy="100" r="50"></circle>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em">
          test
        </text>
      </g>
    </>
  );
};
export default NeuronGraphic;
