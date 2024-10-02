/* eslint-disable react/prop-types */
function WeatherStatusDisplay({ weatherDescription }) {
  const weatherStatus = weatherDescription
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div>
      {console.log(weatherDescription)}
      <p>{weatherStatus}</p>
    </div>
  );
}

export default WeatherStatusDisplay;
