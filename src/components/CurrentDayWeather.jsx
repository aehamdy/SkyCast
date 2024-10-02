/* eslint-disable react/prop-types */
import HumidityDisplay from "./HumidityDisplay";
import LocationNameDisplay from "./LocationNameDisplay";
import TemperatureDisplay from "./TemperatureDisplay";
import WeatherStatusDisplay from "./WeatherStatusDisplay";

function CurrentDayWeather({ status }) {
  return (
    status && (
      <section className="text-white">
        {status.size > 0 && console.log(status)}
        <LocationNameDisplay cityName={status.name} />
        <TemperatureDisplay temp={status.main.temp} />
        <WeatherStatusDisplay
          weatherDescription={status.weather[0].description}
        />
        <HumidityDisplay humidity={status.main.humidity} />
      </section>
    )
  );
}

export default CurrentDayWeather;
