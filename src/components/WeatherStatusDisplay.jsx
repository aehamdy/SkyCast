/* eslint-disable react/prop-types */
function WeatherStatusDisplay({ weatherDescription }) {
  const weatherStatus = weatherDescription
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div>
      <p className="font-medium text-xl text-[#c2c2cf]">{weatherStatus}</p>
    </div>
  );
}

export default WeatherStatusDisplay;
