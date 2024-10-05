/* eslint-disable react/prop-types */
import WeatherHumidity from "./WeatherHumidity";
import WeatherLocationName from "./WeatherLocationName";
import WeatherMinMaxTemperature from "./WeatherMinMaxTemperature";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import WeatherStatus from "./WeatherStatus";

function CurrentDayWeather({ status }) {
  return (
    status && (
      <section className="font-dosis flex flex-col items-center gap-2 text-white">
        <div className="flex flex-col items-center">
          <WeatherLocationName cityName={status.name} />
          <WeatherTemperature
            temp={status.main.temp}
            CSymbol={true}
            fontSize="3.75rem"
          />
          {/* <FeelsLikeDisplay feelsLike={status.main.feels_like} /> */}
          <WeatherStatus weatherDescription={status.weather[0].description} />
          <WeatherMinMaxTemperature
            minTemp={status.main.temp_min}
            maxTemp={status.main.temp_max}
          />
          <WeatherHumidity humidity={status.main.humidity} />
        </div>
        <div>
          <WeatherIcon
            weatherDescription={status.weather[0].main}
            iconSize="70"
          />
        </div>
      </section>
    )
  );
}

export default CurrentDayWeather;
