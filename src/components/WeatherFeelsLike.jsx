/* eslint-disable react/prop-types */
function WeatherFeelsLike({ feelsLike }) {
  return <p>{`Feels like: ${Math.trunc(feelsLike)}\u00b0`}</p>;
}

export default WeatherFeelsLike;
