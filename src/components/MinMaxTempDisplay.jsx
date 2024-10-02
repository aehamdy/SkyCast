/* eslint-disable react/prop-types */
function MinMaxTempDisplay({ minTemp, maxTemp }) {
  return (
    <p className="flex gap-3">
      {console.log({ min_temp: minTemp, max_temp: maxTemp })}
      <span>{`Low: ${Math.trunc(minTemp)}\u00b0`}</span>
      <span>{`Max: ${Math.trunc(maxTemp)}\u00b0`}</span>
    </p>
  );
}

export default MinMaxTempDisplay;
