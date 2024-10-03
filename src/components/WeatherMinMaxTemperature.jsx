/* eslint-disable react/prop-types */
function WeatherMinMaxTemperature({ minTemp, maxTemp }) {
  return (
    <p className="flex gap-2 font-medium">
      <span>{`Max: ${Math.ceil(maxTemp)}\u00b0`}</span>
      <span>{`Min: ${Math.floor(minTemp)}\u00b0`}</span>
    </p>
  );
}

export default WeatherMinMaxTemperature;
