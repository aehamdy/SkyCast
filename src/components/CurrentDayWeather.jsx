import HumidityDisplay from "./HumidityDisplay";
import LocationNameDisplay from "./LocationNameDisplay";
import TemperatureDisplay from "./TemperatureDisplay";
import WeatherStatusDisplay from "./WeatherStatusDisplay";

function CurrentDayWeather() {
  return (
    <section className="text-white">
      <LocationNameDisplay />
      <TemperatureDisplay />
      <WeatherStatusDisplay />
      <HumidityDisplay />
    </section>
  );
}

export default CurrentDayWeather;
