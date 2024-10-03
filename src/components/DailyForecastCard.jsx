/* eslint-disable react/prop-types */
import WeatherDayDate from "./WeatherDayDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

function DailyForecastCard({ date, temp, description }) {
  return (
    <li className="flex flex-col justify-between items-center gap-4 h-36 py-4 px-2 text-white bg-weather-card hover:bg-weather-card-hover rounded-3xl shadow-xl duration-300">
      <WeatherDayDate date={date} />
      <WeatherIcon weatherDescription={description} iconSize="32" />
      <WeatherTemperature temp={temp} fontSize="lg" />
    </li>
  );
}

export default DailyForecastCard;
