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
      <section className="font-dosis flex flex-col items-center gap-4 text-white">
        {/* {status.size > 0 && console.log(status)} */}
        <div className="flex flex-col gap-2">
          <WeatherLocationName cityName={status.name} />
          <WeatherTemperature
            temp={status.main.temp}
            CSymbol={true}
            fontSize="6xl"
          />
          {/* <FeelsLikeDisplay feelsLike={status.main.feels_like} /> */}
          <WeatherStatus weatherDescription={status.weather[0].description} />
          {/* {console.log(status)} */}
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
