/* eslint-disable react/prop-types */
function WeatherIcon({ weatherDescription, iconSize }) {
  const sunny = "/weather-sunny.png";
  const foggy = "/weather-foggy.png";
  const rainy = "/weather-rain.png";
  const cloudy = "/weather-cloudy.png";
  const snowy = "/weather-snow.png";
  const stormy = "/weather-storm.png";
  const windy = "/weather-wind.png";
  const tornado = "/weather-tornado.png";

  const handleWeatherIcon = () => {
    switch (weatherDescription.toLowerCase()) {
      case "clear":
        return sunny;
      case "fog":
      case "mist":
      case "smoke":
        return foggy;
      case "rain":
      case "drizzle":
      case "light rain":
      case "moderate rain":
      case "heavy intensiy rain":
        return rainy;
      case "clouds":
      case "broken clouds":
      case "overcast clouds":
      case "scattered clouds":
        return cloudy;
      case "snow":
      case "light snow":
      case "heavy snow":
        return snowy;
      case "thunderstorm":
        return stormy;
      case "wind":
        return windy;
      case "tornado":
        return tornado;
      default:
        return null;
    }
  };

  const weatherIcon = handleWeatherIcon();

  return (
    <div>
      <img
        src={weatherIcon}
        alt="weather image"
        width={iconSize}
        className="mt-1"
      />
    </div>
  );
}

export default WeatherIcon;
