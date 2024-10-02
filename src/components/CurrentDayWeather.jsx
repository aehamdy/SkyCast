/* eslint-disable react/prop-types */
import FeelsLikeDisplay from "./FeelsLikeDisplay";
import HumidityDisplay from "./HumidityDisplay";
import LocationNameDisplay from "./LocationNameDisplay";
import MinMaxTempDisplay from "./MinMaxTempDisplay";
import TemperatureDisplay from "./TemperatureDisplay";
import WeatherIcon from "./WeatherIcon";
import WeatherStatusDisplay from "./WeatherStatusDisplay";

function CurrentDayWeather({ status }) {
  return (
    status && (
      <section className="font-dosis flex flex-col items-center gap-6 text-white">
        {/* {status.size > 0 && console.log(status)} */}
        <div>
          <LocationNameDisplay cityName={status.name} />
          <TemperatureDisplay temp={status.main.temp} />
          <FeelsLikeDisplay feelsLike={status.main.feels_like} />
          <WeatherStatusDisplay
            weatherDescription={status.weather[0].description}
          />
          {/* {console.log(status)} */}
          <HumidityDisplay humidity={status.main.humidity} />
          <MinMaxTempDisplay
            minTemp={status.main.temp_min}
            maxTemp={status.main.temp_max}
          />
        </div>
        <div>
          <WeatherIcon weatherDescription={status.weather[0].main} />
        </div>
      </section>
    )
  );
}

export default CurrentDayWeather;
