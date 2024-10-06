/* eslint-disable react/prop-types */
import "../index.css"; // Ensure your CSS file is correctly imported
import WeatherDayDate from "./WeatherDayDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

function ForecastCard({ selectedOption, date, temp, description }) {
  return (
    <li className="flex text-lg flex-col justify-between items-center gap-4 h-36 py-4 px-2 text-white bg-weather-card rounded-3xl shadow-xl hover:bg-weather-card-hover hover:shadow-2xl duration-300">
      <WeatherDayDate selectedOption={selectedOption} date={date} />
      <WeatherIcon weatherDescription={description} iconSize="32" />
      <WeatherTemperature temp={temp} fontSize="1.125rem" />
    </li>
  );
}

export default ForecastCard;
