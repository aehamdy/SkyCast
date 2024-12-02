import { useState } from "react";
import "./App.css";
import CurrentDayWeather from "./components/CurrentDayWeather";
import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";
import ForecastPanel from "./components/ForecastPanel";

const apiKey = import.meta.env.VITE_API_KEY;

const API = {
  key: apiKey,
  base: "https://api.openweathermap.org/data/2.5/weather?q=",
};

function App() {
  const [status, setStatus] = useState({});
  const [nextDaysData, setNextDaysData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <div
        className="flex flex-col justify-between items-center md:w-[330px] h-screen mx-auto pt-3 bg-no-repeat bg-center overflow-hidden"
        style={{ backgroundImage: "url('/starry-night-2.jpg')" }}
      >
        <div>
          <SearchBar
            setStatus={setStatus}
            setNextDaysData={setNextDaysData}
            API={API}
            setErrorMessage={setErrorMessage}
          />
          {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        </div>
        {status && status.main && status.weather && (
          <CurrentDayWeather status={status} />
        )}
        {nextDaysData.list && !errorMessage && (
          <ForecastPanel nextDaysData={nextDaysData} />
        )}
      </div>
    </>
  );
}

export default App;
