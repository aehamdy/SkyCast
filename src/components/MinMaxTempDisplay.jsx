/* eslint-disable react/prop-types */
function MinMaxTempDisplay({ minTemp, maxTemp }) {
  return (
    <p className="flex gap-3">
      <span>{`Low: ${Math.trunc(minTemp)}\u00b0`}</span>
      <span>{`Max: ${Math.trunc(maxTemp)}\u00b0`}</span>
    </p>
  );
}

export default MinMaxTempDisplay;
