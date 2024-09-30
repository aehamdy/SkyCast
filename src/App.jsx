import { useState } from "react";
import "./App.css";
// import House from "../public/house.png";
import CurrentDayWeather from "./components/CurrentDayWeather";
import SearchBar from "./components/SearchBar";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState({});

  const API = {
    key: "12085e4560bb86e46adfb492790ddf68",
    base: "https://api.openweathermap.org/data/2.5/weather?q=",
  };

  const getWeatherData = () => {
    fetch(`${API.base}${inputValue}&appid=${API.key}&units=metric`)
      .then((response) => response.json())
      .then((result) => setStatus(result));
  };

  return (
    <>
      {console.log(status)}
      <div
        className="realtive h-screen bg-no-repeat bg-center pt-10"
        style={{ backgroundImage: "url('/starry-night.png')" }}
      >
        <SearchBar
          setInputValue={setInputValue}
          getWeatherData={getWeatherData}
        />
        <CurrentDayWeather />

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
