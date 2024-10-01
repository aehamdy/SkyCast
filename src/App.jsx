import { useState } from "react";
import "./App.css";
// import House from "../public/house.png";
import CurrentDayWeather from "./components/CurrentDayWeather";
import SearchBar from "./components/SearchBar";

function App() {
  const [inputValue, setInputValue] = useState();
  const [status, setStatus] = useState({});

  const API = {
    key: "12085e4560bb86e46adfb492790ddf68",
    base: "https://api.openweathermap.org/data/2.5/weather?q=",
  };

  async function getWeatherData() {
    try {
      const response = await fetch(
        `${API.base}${inputValue}&appid=${API.key}&units=metric`
      );
      if (!response.ok) {
        throw new Error(`Request failed with status ` + response.status);
      }
      const data = await response.json();
      console.log(data);
      setStatus(data);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  return (
    <>
      {/* {status.size > 0 && console.log(status)} */}
      <div
        className="realtive h-screen bg-no-repeat bg-center pt-10"
        style={{ backgroundImage: "url('/starry-night.png')" }}
      >
        <SearchBar
          setInputValue={setInputValue}
          getWeatherData={getWeatherData}
        />
        {console.log(status)}
        {status && status.main && status.weather && (
          <CurrentDayWeather status={status} />
        )}

        {/* <img
          src={House}
          alt="house-image"
          className="absolute w-2/5 top-1/2 start-1/2 -translate-y-1/4 -translate-x-1/2"
        /> */}
      </div>
    </>
  );
}

export default App;
