import { useState } from "react";
import "./App.css";
// import House from "../public/house.png";
import CurrentDayWeather from "./components/CurrentDayWeather";
import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";
import Forecast from "./components/Forecast";

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
        {nextDaysData.list && <Forecast nextDaysData={nextDaysData} />}

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
[ ] create a component for the next seven days
[ ] create a card component for each day of the seven days
[ ] make the seven days component to be toggelabel (show/hide)
[ ] 
 */
