/* eslint-disable react/prop-types */
function TemperatureDisplay({ temp }) {
  const temperature = Math.trunc(temp);

  return <p className="text-6xl">{`${temperature}\u00b0`}</p>;
}

export default TemperatureDisplay;
