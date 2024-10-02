/* eslint-disable react/prop-types */
function MinMaxTempDisplay({ minTemp, maxTemp }) {
  return (
    <p className="flex justify-around font-medium">
      <span>{`Max: ${Math.ceil(maxTemp)}\u00b0`}</span>
      <span>{`Min: ${Math.floor(minTemp)}\u00b0`}</span>
    </p>
  );
}

export default MinMaxTempDisplay;
