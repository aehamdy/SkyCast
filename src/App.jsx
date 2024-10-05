import { useState } from "react";
import "./App.css";
// import House from "../public/house.png";
import CurrentDayWeather from "./components/CurrentDayWeather";
import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";
import ForecastPanel from "./components/ForecastPanel";

const API = {
  key: "12085e4560bb86e46adfb492790ddf68",
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
        {/* {console.log(nextDaysData)} */}
        {nextDaysData.list && !errorMessage && (
          <ForecastPanel nextDaysData={nextDaysData} />
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
/**
TODO:
[x] validate input field and show error messages for the user when the input field is invalid/empty and when no response
[x] make sure to show city name as expected (first letter of each word is capitalized and rest of the word is in small case)
[x] remove white spaces from user input when click on search button
[x] show the proper weather icon depending on weather condition
[x] create a component for the next days
[x] create a card component for each day of the seven days
[x] add two buttons in Forecast component (one to show next days forecast and the other to show hourly weather for current day)
[x] add "Enter" key functionality
[x] make Forecast component to be toggelable (show/hide)
[x] add animation to CurrentDayWeather when appears
[x] add animation to ForecastList when change between Hourly and Weekly
[ ] add animated cloud icon that appears right after any search button click which mimics loading data from the server
[ ] add drag functionality to arrow icon
 */
