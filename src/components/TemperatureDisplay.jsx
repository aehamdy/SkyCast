/* eslint-disable react/prop-types */
function TemperatureDisplay({ temp }) {
  const temperature = Math.trunc(temp);

  return <p>{`${temperature}\u00b0 C`}</p>;
}

export default TemperatureDisplay;
