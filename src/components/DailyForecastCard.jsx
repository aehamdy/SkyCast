/* eslint-disable react/prop-types */
const sunny = "/weather-sunny.png";
const foggy = "/weather-foggy.png";
const rainy = "/weather-rain.png";
const cloudy = "/weather-cloudy.png";
const snowy = "/weather-snow.png";
const stormy = "/weather-storm.png";
const windy = "/weather-wind.png";
const tornado = "/weather-tornado.png";

function DailyForecastCard({ date, temp, description }) {
  const formattedDate = () => {
    const fullTime = date.split(" ");
    const initDate = fullTime[0].split("-");
    const month = initDate[1];
    const day = initDate[2];
    const formattedDate = `${day}/${month}`;
    return formattedDate;
  };

  const formatTemp = () => {
    const initValue = Math.trunc(temp);
    const value = `${initValue}\u00b0 C`;
    return value;
  };

  const handleWeatherIcon = () => {
    switch (description.toLowerCase()) {
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

  const nextDayDate = formattedDate();
  const weatherIcon = handleWeatherIcon();
  const nextDayTemp = formatTemp();

  return (
    <li className="flex flex-col items-center gap-2">
      <p>{nextDayDate}</p>
      <img src={weatherIcon} alt="weather image" width="17" />
      <p>{nextDayTemp}</p>
    </li>
  );
}

export default DailyForecastCard;
